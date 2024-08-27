import { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class CustomCounter extends Component{
       state={
          count:0,

       }
     incrementHandler=()=>{
        this.setState({
         count:this.state.count +1
        },()=>{
           toast.success(`The current count is ${this.state.count}`,{position:"top-right"})
        })
       }
     decrecrementHandler=()=>{
        this.setState({
            count:this.state.count -1
        },()=>{
            
     toast.error(`The current count is ${this.state.count}`, {
       position: "top-right"
     });
        })
       }
     resetHandler=()=>{
        this.setState({
           count:0
        },()=>{
             toast.warn("Counter has been reset to 0", {
          position: "top-right",
        });
        })
       }
     


    render(){
        return(
            <>
            <h2>Counter:{this.state.count}</h2>
                    <div className="d-flex gap-3">

            <button onClick={this.incrementHandler} className="btn btn-success px-4">Increment</button>
            <button onClick={this.decrecrementHandler} className="btn btn-danger px-4" >Decrement</button>
            <button onClick={this.resetHandler}  className="btn btn-warning px-4">Reset</button>
            </div>
            </>
        )
    }
}


export default CustomCounter