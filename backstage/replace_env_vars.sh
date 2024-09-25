#!/bin/bash

# Function to escape special characters for sed
escape_sed() {
    echo "$1" | sed 's/[\/&]/\\&/g'
}

# Function to replace substrings and count changes
replace_substrings_with_count() {
    local text="$1"
    shift
    local changes=0
    declare -A var_replacements  # Associative array to store replacement counts for each variable

    for pair in "$@"; do
        var="${pair%%=*}"
        value="${pair#*=}"

        # Escape special characters in the replacement value
        value=$(escape_sed "$value")

        # Use sed to replace all instances of the substring, including the ${}
        replaced_text=$(printf '%s\n' "$text" | sed "s#\${${var}}#${value}#g")
        
        # Count how many replacements occurred by comparing before/after
        local replacement_count
        replacement_count=$(grep -o "\${${var}}" <<< "$text" | wc -l)

        # If replacements were made, update the count
        if [[ "$replaced_text" != "$text" ]]; then
            ((changes+=replacement_count))  # Total number of changes across all variables
            var_replacements["$var"]=$replacement_count  # Store number of replacements for this variable
        fi
        text="$replaced_text"
    done

    # Output replaced text
    echo "$text"

    # Output the number of changes made
    echo "$changes"

    # Output the detailed count for each variable replacement
    for var in "${!var_replacements[@]}"; do
        echo "Replaced \$${var} with ${var_replacements[$var]} occurrence(s)"
    done
}

# Check if required arguments are provided
if [ $# -lt 2 ]; then
    echo "Usage: $0 <filename> <variable1>=<value1> [<variable2>=<value2> ...]"
    exit 1
fi

# Get filename and variable definitions
filename="$1"
shift

# Process variable definitions and store in an array
env_vars=()
for arg in "$@"; do
    var="${arg%%=*}"
    value="${arg#*=}"
    env_vars+=("$var=$value")
done

# Read file content
content=$(cat "$filename" 2>/dev/null)

# Check if file exists and readable
if [[ $? -ne 0 ]]; then
    echo "Error: File '$filename' not found or not readable."
    exit 1
fi

# Replace substrings in content and get the number of changes
replaced_content=$(replace_substrings_with_count "$content" "${env_vars[@]}")
changes=$(echo "$replaced_content" | tail -n 1)
replacement_details=$(echo "$replaced_content" | tail -n +3)  # Get detailed info on variable replacements
replaced_content=$(echo "$replaced_content" | head -n 1)

# Write back to the file (consider backup if needed)
echo "$replaced_content" > "$filename"

echo "Successfully replaced substrings in '$filename'. Changes made: $changes"
echo "$replacement_details"
