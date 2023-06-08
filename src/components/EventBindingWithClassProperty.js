import React,{ Component } from "react";

class EventBindingWithClassProperty extends Component{
//Set the default message 
constructor(props){
    super(props)

    this.state={
        message:'Hello Subhishek'
    }
}

 //Define Method
 clickHandler=() => {
    this.setState({
        message:'good byee shukla!!!'
    })
}

    render (){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*4th approach to bind event class property as arrow function*/}
                <button onClick={this.clickHandler} >Click </button> 
            </div>
        )
    }
}

export default EventBindingWithClassProperty