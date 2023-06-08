import React,{ Component } from "react";

class EventBindingInRenderWithArrowFunction extends Component{
//Set the default message 
constructor(props){
    super(props)

    this.state={
        message:'Hello Subhishek'
    }
}

 //Define Method
 clickHandler() 
    {
    this.setState({
        message:'good bye Subhishek!!!'
    })   
    }

    render (){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*2nd approach to binding in render with arrow function*/}
                <button onClick={()=>this.clickHandler()}>click</button>
            </div>
        )
    }
}

export default EventBindingInRenderWithArrowFunction