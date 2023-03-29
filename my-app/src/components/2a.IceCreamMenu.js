import IceCreamList from './2b. IceCreamList'
import {Container, Button} from '@mui/material'

export default function FoodMenu() {
    return(
        <div>
        <Container maxWidth="xl" maxHeight="xl" sx={{ bgcolor: '#FFBEB7', height: '225vh'}}>
            <br />
            <h1 className="header"> Our Menu </h1>
            <p className="text"> 
                <i> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet scelerisque 
                    mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est lorem, 
                    blandit a ornare vel, hendrerit elementum lacus. Proin hendrerit ligula nisi, quis varius 
                    neque blandit a. Morbi faucibus est nisl, sed euismod turpis sodales ut. Interdum et 
                    malesuada fames ac ante ipsum primis in faucibus. 
                </i> 
            </p>

            <IceCreamList />
            
            <Button 
                variant = "contained" 
                disableRipple={true} 
                style={{backgroundColor:'#EF6351', marginLeft:"590px"}}> 
                    <b> Place order </b> 
            </Button>
        </Container>
     </div>
    )
}