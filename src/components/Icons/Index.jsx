export const Icon = (props) => {
    return (
        <i width={props.width} style={{width: props.width+" !important", color: props.color}} className={props.iconName}></i> 
    )
}