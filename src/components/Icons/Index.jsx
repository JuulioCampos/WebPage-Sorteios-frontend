export const Icon = (props) => {
    return (
        <i style={{ color: props.color, fontSize: props.size ?? 'inherit'}} className={props.iconName +' '+ props.className ?? ''}></i> 
    )
}