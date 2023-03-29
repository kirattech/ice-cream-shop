import {AppBar, Toolbar, Typography, Stack, Button} from "@mui/material"

export default function NavBar() {
    const elements = [
        {name:"About"},
        {name:"Order",
         link:"../App.js"}, 
        {name:"Reservation"}, 
        {name:"Contact"}];
    
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
                        return <Button disableRipple={true} color="inherit" href={element.link}> {element.name} </Button>
                    }
                )}
            </Stack>
        </AppBar>
    )
}