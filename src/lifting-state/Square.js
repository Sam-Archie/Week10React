

const divStyle = {
    height: "200px",
    width: "200px"
}

const Square = ({color, selected, handleClick}) => (
    <div
        onClick= {handleClick}
        style={{...divStyle, border: selected ?  `solid 5px ${color}` : "solid 5px green" }}>
    </div>
)


export default Square;