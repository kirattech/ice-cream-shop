import {Grid} from "@mui/material";
import IceCream from "./2c. IceCream";
import {useState} from 'react';

import Vanilla from '../ice_cream_pics/vanilla.png';
import Chocolate from '../ice_cream_pics/chocolate.png';
import Mixed from '../ice_cream_pics/mixed.png';
import Mango from '../ice_cream_pics/mango.png';
import Chocchip from '../ice_cream_pics/chocchip.png';
import Strawberry from '../ice_cream_pics/strawberry.png';


export default function IceCreamList (props) {
    /* var [vanillaQuant, setVanillaQuant] = useState();
    var [strawberryQuant, setStrawberryQuant] = useState();
    var [chocolateQuant, setChocolateQuant] = useState();
    var [mangoQuant, setMangoQuant] = useState();
    var [chocChipQuant, setChocChipQuant] = useState();
    var [mixedQuant, setMixedQuant] = useState(); */

    var Flavours = [
        {name:'Vanilla',
         desc:'Sweet dessert made from milk, cream, sugar, and a source of vanilla',
         image: Vanilla /*,
         quantity: vanillaQuant,
        quantityChanger: setVanillaQuant*/},
        {name:'Strawberry',
         desc:'A sweet-tart burst of ripe, juicy strawberries stirred into sweet, frozen cream',
         image: Strawberry /* ,
         quantity: strawberryQuant,
        quantityChanger:setStrawberryQuant */}, 
        {name:'Chocolate', 
         desc: 'A frozen dessert made from milk, cream, chocolate, and sugar flavored cocoa powder',
         image: Chocolate /*,
        quantity: chocolateQuant,
        quantityChanger: setChocolateQuant */},  
        {name:'Mango',
         desc: 'Custard based ice cream made with cream, sugar, milk, eggs and mangoes',
         image: Mango /* ,
         quantity: mangoQuant,
         quantityChanger: setMangoQuant */}, 
        {name: 'Choc-Chip',
         desc: 'Double-flavour ice cream made from vanilla ice cream and rich chocolate flakes',
         image: Chocchip /* , 
         quantity: chocChipQuant,
         quantityChanger: setChocChipQuant */ }, 
        {name: 'Mixed',
         desc: 'A mixed dessert of all the ice-creams offered at the Ice Cream Shop!',
         image: Mixed /*,
         quantity: mixedQuant,
        quantityChanger: setMixedQuant */}
    ];

    return(
        <Grid container sx={{margin: '25px 5px 20px -9px'}} rowSpacing="10px" columnSpacing="15px">
            {
                Flavours.map(
                    (flavour) => {
                        return <IceCream
                            flavour = {flavour.name} 
                            desc = {flavour.desc} 
                            image = {flavour.image}
                        />;   
                    }
                )
            }
        </Grid>
    )
}