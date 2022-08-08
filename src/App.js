import React, {Component} from 'react';
import Palette from './Palette';
import seedPalette from './seedPalette';

export default class App extends Component{

     render(){
        return (<>
                 <Palette {...seedPalette[2]} />
               </>
            )
     }
}