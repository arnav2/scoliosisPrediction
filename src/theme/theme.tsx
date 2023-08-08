import { createTheme } from '@mui/material/styles';
import { globalColors, globalSize, globalWidth } from './global';

const theme = createTheme({
    palette: {
        primary: {
            main: '#523aa6',
            light: '#cabcff',
            dark: '#240e72',
            contrastText: '#ffc8bc',
        },
        secondary: {
            main: '#98a1ff',
            light: '#e3e6ff',
            dark: '#6774ff',
            contrastText: '#ffc8bc',
            
        },
        error: {
            main: '#9c0038',
            light: '#ff9ba1',
            dark: '#62001d',
            contrastText: '#ffffff'
        },
        success: {
            main: '#357763',
            dark: '#1d4a42',
            light: '#73ebb1',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#eab653',
            dark: '#d07d00',
            light: '#ffea95',
            contrastText: '#000000'
        },
        background: {
            default: '#f2f4ff', // Default background color for the entire application
            paper: '#ffffff', // Background color for paper surfaces (e.g., cards, dialogs)
        },
    },
    typography: {
        fontFamily: 'Helvetica, sans-serif', // Default font family
        
        body1: {
            textAlign: 'center',
            fontSize: '1 rem',
        },
        h1: {
            // color: ''
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h3: {
            textAlign: 'center',
            fontSize: '1 rem',
            fontWeight: 500,
        },
        // Define your typography styles here
    },
    // ... other theme configurations
    components: {
        // Define styles for specific components here
        MuiCssBaseline: {
            styleOverrides: {
                ':root': {
                    ...globalColors,
                    ...globalSize,
                    ...globalWidth
                    // ... continue defining your variables
                },
            }
        },
        
        // MuiPaper: {
        //     styleOverrides: {
        //     root: {
        //         boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Set the desired boxShadow value
        //     },
        //     },
        // },
    }
});

export default theme;