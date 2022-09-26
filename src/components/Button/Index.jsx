import { SButton } from "./Style"

export const Button = (props) => {
   console.log(props.clickModal)
 return (
    <SButton onClick={props.onClick}>{ props.label }</SButton>
 )   
}