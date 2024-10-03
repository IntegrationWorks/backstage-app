import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';


const darkPrimary = {
    main: '#FD7B23',
    light: '#FECBA7',
    dark: '#b75c1a',
}
const darkSecondary = {
    main: '#3A444A',
    light: '#3A444A',
    dark: '#1C1A1A'

}
const lightPrimary = {
    main: '#FD7B23',
    light: '#FECBA7',
    dark: '#b75c1a',
}
const lightSecondary = {
    main: '#E7E9E9',
    light: '#E7E9E9',
    dark: '#D8DAD8'
}

export const darkTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.dark,
            primary: darkPrimary,
            secondary: darkSecondary,
            navigation: {
                background: '#3A444A',
                indicator: '#898F92',
                color: '#D8DADB',
                selectedColor: '#E7E9E9',
              },
              background: {
                paper: '#3A444A',
                default: '#1C1A1A',
              },

        },
    }),
    // fontFamily: 'Calibri',
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#FD7B23', '#B75C1A'], shape: shapes.wave }),
    }
});

export const lightTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.light,
            primary: lightPrimary,
            secondary: lightSecondary,
            navigation: {
                background: '#3A444A',
                indicator: '#898F92',
                color: '#D8DADB',
                selectedColor: '#E7E9E9',
              },
              background: {
                default: '#d5d6db',
                paper: '#E7E9E9',
              },
        },
    }),
    // fontFamily: 'Calibri',
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#FD7B23', '#FECBA7'], shape: shapes.wave }),
    }
});