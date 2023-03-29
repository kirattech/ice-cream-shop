import { Grid, Box, Typography } from '@mui/material';
import {useState} from 'react';
import QuantityCount from './2d. QuantityCount';

export default function Product (props) {
    var [quantity, setQuantity] = useState(0);

    return( 
        <Grid item xs={4}> 
            <Box bgcolor="#F38375" color="white" m="10px" borderRadius="50px"> 
                <br />

                <Grid display="flex" justifyContent = "center" >
                    <img src={props.image} height="300" width="215" />
                </Grid>

                <Grid display="flex" justifyContent = "center">
                    <Typography variant="h5"> <b> {props.flavour} </b> | $10.00 </Typography>
                </Grid>

                <Grid display="flex" justifyContent="center">
                    <Typography align="center" variant="body2" m="13px"> {props.desc} </Typography>
                </Grid>

                <QuantityCount setQuantity = {setQuantity} />
                <br />
            </Box>
        </Grid> 
    );
}