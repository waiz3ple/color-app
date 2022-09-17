import React, {Component} from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.scss';
import Slider from 'rc-slider';



export default class Palette extends Component{
    constructor(props) {
      super(props);
    
      this.state = {level:550};
      this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
      this.setState({level})
      console.log(level)
    }
    render(){
        const {colors} = this.props.palette;
        const {level}  = this.state;
        const colorBoxes = colors[level].map((color,id)=>(
             <ColorBox background={color.hex} name={color.name} key={id}/>
            ))
        return(
            <div className="Palette">
            <div className="slider">
                <Slider defaultValue={this.state.level} min={50} max={950} step={100} onAfterChange={this.changeLevel}/>
            </div>
              <div className="Palette-colors">
               {colorBoxes}
          {/*buch of color box*/}
              </div> 
             {/* FOOTERR */}
            </div>
        )
    }
}