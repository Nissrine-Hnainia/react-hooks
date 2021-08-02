// import React, { Component } from 'react'

// export default class Counter extends Component {
//     constructor(props) {
//         super(props)
//         //state is a JS object
//         this.state = {
//             count: 0,
            //name: "jane doe",
            //age: 20
//         }
//     }

//     increment = () => {
//         this.setState({count: this.state.count+1})
//     }
//     decrement = () => {
//         this.setState({count: this.state.count >0 ? this.state.count-1 : this.state.count})
//     }

//handlename = () {
  //  this.setState({name: })
//}
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}> + </button>
//                 <span > {this.state.count} </span>
//                 <button onClick={this.decrement}> - </button>
//             </div>
//         )
//     }
// }

import React,{useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Jane doe")
    //useState is a js function that takes the initial state as an argument and 
    //returns an array that contains two elements: the current state and the method 
    //that we use to update the state
    const increment = () => {
        setCount(count => count+1) 
    }
    const decrement = () => {
        setCount(count => count-1) 
    }
    const handleName = () => {
        setName(name => name ==="Jane doe" ? "John doe" : "Jane doe")
    }
    useEffect(() => {
        setName(name => name ==="Jane doe" ? "John doe" : "Jane doe") //effect
    }, [count]) 
    //[] ==> componentDidMount(), 
    //[name] ==> componentDidMount() componentDidUpdate
    return (
        <div>
            <button onClick={() => increment()}> + </button>
            <span> {count} </span>
            <button onClick={()=> decrement()}> - </button>
            <h2> {name} </h2>
            <button onClick={() => handleName()}>change my name</button>
        </div>
    )
}

export default Counter


