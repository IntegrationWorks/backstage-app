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
                selectedColor: '#FD7B23',
              },
              background: {
                paper: '#898F92',
                default: '#3A444A',
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
                selectedColor: '#FD7B23',
              },
              background: {
                default: '#D8DADB',
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