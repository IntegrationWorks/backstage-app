#!/bin/bash

# Function to replace substrings
replace_substrings() {
  local text="$1"
  shift
  for pair in "$@"; do
    var="${pair%%=*}"
    value="${pair#*=}"
    # Use sed to replace all instances of the substring
    text=$(printf '%s\n' "$text" | sed "s#${var}#${value//\\/\\\\}#g")
  done
  echo "$text"
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

# Replace substrings in content
replaced_content=$(replace_substrings "$content" "${env_vars[@]}")

# Write back to the file (consider backup if needed)
echo "$replaced_content" > "$filename"

echo "Successfully replaced substrings in '$filename'."
echo "$replaced_content"

echo "Successfully replaced substrings in '$filename'."