import React, { Component } from 'react';
import Counter from "./Counter";

class Max extends Component 
{
   
    constructor(props)
    {
        super(props);
        this.state = {
            values : [...props.count],
        }

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.largest = this.largest.bind(this);
    }

    largest(array)
    {
        let large = (acc, current) => acc > current ? acc: current;

        return array.reduce(large, array[0]);

    }

    handleClickAdd(index, amount)
    {
        const {values} = this.state;
        
        let copy = [...values];

        copy[index] += amount;

        this.setState({values: copy});
    }

    handleClickMinus(index, amount)
    {
        const {values} = this.state;
          
        let copy = [...values];

        copy[index] -= amount;

        this.setState({values: copy});
    }


    render() 
    {
        const {values} = this.state;
        const largest = this.largest(values);
        console.log(largest);

        return (
            <div>
                
               {values.map((value, index) => (
                   <Counter
                        initial={value} 
                        key={index}
                        biggest={value === largest}
                        plus={() => this.handleClickAdd(index, 1)}
                        minus={() => this.handleClickMinus(index, 1)}
                   />
                ))}
            </div>
        )
    }
}

export default Max;