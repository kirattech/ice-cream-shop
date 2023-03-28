import {createTheme} from '@mui/material/styles';

const colors = {
    navbar:"#EF6351",
    primary:"#F38375",
    secondary: "#850E35",
    info:"#F7A399",
    border:"#000000"
}

const theme = createTheme({
    palette:{
        primary:{
            main:colors.navbar},
        secondary:{
            main:colors.primary}
    },

    components: {
        MuiButton:{
            defaultProps:{
                disableRipple:true,
            }
        }
    }
});

export default theme;