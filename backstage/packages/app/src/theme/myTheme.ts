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
    light: '#D8DADB',
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
    dark: '#1C1A1A'
}

export const darkTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.dark,
            primary: darkPrimary,
            secondary: darkSecondary

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
            secondary: lightSecondary

        },
    }),
    // fontFamily: 'Calibri',
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#FD7B23', '#FECBA7'], shape: shapes.wave }),
    }
});