import React,{Component} from "react";

class Counter extends Component{
    state={counter:0}
   increment = () => {
  this.setState({
    counter: this.state.counter + 1
  });
};
    log(){
        console.log("halo")
    }
    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.log}>click</button>
            </div>
        )
    }
}
export default Counter