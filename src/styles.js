import { createTheme } from '@mui/system';
const theme = createTheme()

export const SIZES = {
    content: {
        height: `calc(100vh - 5vh - ${theme.spacing(2)} - ${theme.spacing(4)})`,
    },
    tablist: {
        height: '5vh',
    },
    messageForm: {
        height: `calc(5vh + ${theme.spacing(2)} + ${theme.spacing(2)})`,
    },
    messages: {
        height: `calc(100vh - 5vh - ${theme.spacing(2)} - ${theme.spacing(4)} - ${theme.spacing(2)} - ${theme.spacing(2)} - 7.5vh)`,
    },
}
