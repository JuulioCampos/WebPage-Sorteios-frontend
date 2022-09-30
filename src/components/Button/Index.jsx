import { SButton } from "./Style"

export const Button = (props) => {
 return (
    <SButton style={{width: props.tamanho + "!important"}} className={props.className} onClick={props.onClick}>{ props.children }</SButton>
 )   
}