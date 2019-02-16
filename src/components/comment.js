import React, { Component } from 'react';
import './comment.css'

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            list:[]
        }
    }
    changeUserInput(value){
          this.setState({
              userInput:value
          });
    }
    addToList(list){
        let listArray =this.state.list;
        listArray.push(list);

        this.setState({
            list:listArray,
            userInput:''
        })
        // console.log(this.state.userInput);
    }
    render(){
        return(
            <div className="input-group">
            <input className="form-control" onChange={(e)=>this.changeUserInput(e.target.value)}
            value={this.state.userInput}
            type="text" style={{width:"520"}}/>
            <button className="btn1" onClick={()=> this.addToList(this.state.userInput)}>Send</button>
            <ul>
                {this.state.list.map((val)=><li>{val}</li>)}
            </ul>
            </div>
        );
    }
}
export default CommentBox ;