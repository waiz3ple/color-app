import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.scss';

export default class Palette extends Component{
    render(){
        const colorBoxes = this.props.colors.map((color,id)=>(
             <ColorBox background={color.color} name={color.name} key={id}/>
            ))
        return(
            <div className="Palette">
              <div className="Palette-colors">
               {colorBoxes}
          {/*buch of color box*/}
              </div> 
             {/* FOOTERR */}
            </div>
        )
    }
}