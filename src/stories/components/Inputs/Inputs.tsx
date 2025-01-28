import React from 'react'
import { Background } from 'storybook/internal/theming'

type InputProps = {
    label : string,
    placeholder: string,
    backgroundColor : string,
}
function Inputs( props : InputProps) {
  return (
    <div style={{ backgroundColor: props.backgroundColor , padding:"20px",  }}>
        <label style={{marginRight:"20px"}} htmlFor={props.label}> {props.label}</label>
        <input  style={{width:"400px", textAlign:"center" , }} type="text" id={props.label} placeholder={props.placeholder}/>

    </div>
  )
}

export default Inputs