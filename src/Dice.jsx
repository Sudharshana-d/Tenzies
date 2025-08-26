function Dice(props)
{
    return(
        <button className={props.isHeld ? "dice1" : "dice"} onClick={()=> props.hold(props.id)}> {props.value} </button>
    )
}
export default Dice;