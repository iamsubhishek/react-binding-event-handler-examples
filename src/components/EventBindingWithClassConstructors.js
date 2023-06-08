import React,{ Component } from "react";

class EventBindingWithClassConstructors extends Component{
//Set the default message 
constructor(props){
    super(props)

    this.state={
        message:'Hello Subhisheks'
    }
    //3rd approach to bind event with class Constructor 
    this.clickHandler=this.clickHandler.bind(this)
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
               {/*3rd approach to bind event with class Constructor ---React official site*/}
             <button onClick={this.clickHandler} >Click </button> 
            </div>
        )
    }
}

export default EventBindingWithClassConstructors