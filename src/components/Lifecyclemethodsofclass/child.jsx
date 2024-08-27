import { Component } from "react";



export default class Child  extends Component {

   componentDidMount(){
    console.log("Child  componentdidmount executed...")
   }
    constructor(){
        console.log("child constructor executed...")
        super()
        this.state={
            message:"child"
        }
    }
render(){
    console.log("child render executed...")
    return(
        <div>
     <h3>I am a child</h3>
            </div>
    )
}




} 




