import { Component } from "react";
import Child from "./child";

class Mounting extends Component {

    clickhandler=()=>{
            this.setState({
                count:this.state.count +1
            }) 
    }
  constructor(props) {
    super(props); // pass props to the parent class
    
    console.log("Constructor executed.....");
    
    this.state = {
      products: [],
      message: "Hello Reshma!",
      favouritecolor: "Green",
      count:100,
      childisvisible:true
    };
  }

  // Lifecycle method: runs after the component is mounted
  componentDidMount() {
    console.log("componentDidMount Executed...");
    document.title=`React counter ${this.state.count}`
  }

  // Lifecycle method: runs before the render method, to update state from props
  static getDerivedStateFromProps(props, state) {
    console.log("Static getDerivedStateFromProps");
    
    // If the prop has changed, return a new state
    if (props.color !== state.favouritecolor) {
      return { favouritecolor: props.color };
    }
    return null; // No state change
  }

  childhide=()=>{
    this.setState({
        childisvisible:!this.state.childisvisible
    })
  }
  componentWillUnmount(){
    alert("unmounted")
  }
  componentDidUpdate(){
    document.title=`react counter ${this.state.count}`
     console.log("componentDidUpdate executed")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate executed..")
    return true;
  }
  getSnapshotBeforeUpdate(props,state){
   console.log("getSnapshotBeforeUpdate executed...");
   console.log(props,state)

  }

  render() {
    console.log("Render executed.....");
    
    return (
      <>
        <h4>Mounting Phase</h4>
        <h1>{this.state.message}{this.state.count}</h1>
        <h4>{this.state.favouritecolor}</h4>
        <button onClick={this.clickhandler}>Make a change</button>
        {
            this.state.childisvisible &&  <Child/>
        }

        <button onClick={this.childhide}>childhide</button>
      </>
    );
  }
}

export default Mounting;
