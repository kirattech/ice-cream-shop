import {AppBar, Toolbar, Typography, Stack, Button} from "@mui/material"
import CustomBtn from './CustomBtn'

export default function NavBar() {
    const elements = ["About", "Order", "Reservation", "Contact"];
    
    return(
        <AppBar style={{backgroundColor:"#EF6351"}}> 
            <Stack direction = "row">
                <Toolbar>     
                    <Typography sx = {{flexGrow: 1}}>
                        <h2 style = {{fontFamily:'Brush Script MT'}}> Ice Cream Shop </h2>
                    </Typography>
                </Toolbar>

                {elements.map(
                    (element) => {
                        return <Button color="inherit"> {element} </Button>
                    }
                )}
            </Stack>
        </AppBar>
    )
}