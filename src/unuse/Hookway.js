import React from 'react';
import useToggle from './Toggle';

export default function Hookway(){
   const [face, toggleFace] = useToggle(true);
   return (<div onClick={toggleFace}>{face?"👩🏿‍❤️‍👨🏾":"🍊"}</div>)

}