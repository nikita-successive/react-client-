import React from 'react';
import { Error} from './style';
import { Label } from './style';
import { TextField } from '@shopify/polaris';


const TextFieldInput = (props)=>{
    const{value,placeholder,disable,onChange,type,onBlur,color,error}=props;
    
return(
    <React.Fragment>
       <Label >{props.label}</Label>   
       <TextField  value={value} placeholder={placeholder} disabled={disable} onChange={onChange} type={type} onBlur={onBlur} color={color} />
      <Error>{error}</Error> 
    </React.Fragment> 
)
}
export default TextFieldInput;
