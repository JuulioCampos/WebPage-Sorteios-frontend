import { SButton } from "./Style"

export const Button = (props) => {
 return (
    <SButton onClick={props.onClick}>{ props.label }</SButton>
 )   
}