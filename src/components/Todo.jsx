import React,{Component} from 'react'

class Todo extends Component{
    render(){
        return(
            <div>
                <h1>Todo component</h1>
                <h3>{this.props.spcl}</h3>
            </div>
        );
    }
}

export default Todo
