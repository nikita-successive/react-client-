import React from 'react';
import { Button } from '@shopify/polaris';

const button = (props) => {
    const { color = '', disable = 'false' , onclick = () => {}, style = {} } = props;

    return(
        <Button disabled = {disable} style = {style} color = {color}  onClick = {onclick}> Submit</Button>
    )
}
export default button;
