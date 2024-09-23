import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';


const primary = {
    main: '#FD7B23',
    light: '#FECBA7',
    dark: '#b75c1a',
}
const secondary = {
    main: '#3A444A',
    light: '#D8DADB',
    dark: '#1C1A1A'

}

export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.dark,
            primary: primary,
            secondary: secondary

        },
    }),
    // fontFamily: 'Calibri',
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#FD7B23', '#3A444A'], shape: shapes.wave }),
    }
});