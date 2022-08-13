import React, {Component} from 'react';
import Palette from './Palette';
import seedPalette from './seedPalette';
import {generatePalette} from './ColorHelper';
export default class App extends Component{

     render(){
        console.log(generatePalette(seedPalette[4]))
        return (<>
                 <Palette palette={generatePalette(seedPalette[4])} />
               </>
            )
     }
}