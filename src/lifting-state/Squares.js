import {Component} from "react";
import Square from "./Square";

class Squares extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selected: 1
        };

    }

    setSelected(value) 
    {
        this.setState({ selected : value});
    }

    render() 
    {
        const {selected} = this.state;
        return (
        <div>
          <Square color="hotpink" handleClick={() => this.setSelected(1)} selected={ selected === 1}/>
          <Square color="hotpink" handleClick={() => this.setSelected(2)} selected={ selected === 2}/>
        </div>
        )
    }
}

export default Squares;
