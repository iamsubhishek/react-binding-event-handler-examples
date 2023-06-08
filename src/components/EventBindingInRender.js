import React,{Component} from "react";


class EventBindingInRender extends Component{
//------Constructor Set Message--------
    constructor(){
        super()
        this.state={
            message:'Hello Subhi'
        }
    }
//------Define Method-------
    clickHandler(){
        this.setState({
            message: 'Byeeee Subhi'
        })
    }
    render (){
        return(
            <div>
                    <div>{this.state.message}</div>
                      {/*First approach to binding in render section to the button*/}
                    <button onClick={this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}


export default EventBindingInRender
