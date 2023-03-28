import { Stack, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'; 
import { useState } from "react";

export default function QuantityCount(props) {
    var [quantity, setQuantity] = useState(0);

    const addQuantity = () => setQuantity((quantity) => quantity + 1);
    const subtractQuantity = () => {setQuantity(
        (quantity) => {
            if (quantity===0) {
                return quantity;
            } else {
                return quantity - 1;
            }
        }  
    )}

    props.setQuantity(quantity);
    
    return(
        <Stack direction = "row" justifyContent={"center"}>
            <IconButton>
                <RemoveCircleIcon onClick={subtractQuantity} />
            </IconButton>

            <p> {quantity} </p>

            <IconButton onClick={addQuantity}>
                <AddCircleIcon />
            </IconButton>
        </Stack>
    )
}