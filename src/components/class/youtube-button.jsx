

import {Component} from 'react'
import CustomCard from '../bootstrap/first-component'
import './youtube-button.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Youtubebutton extends Component{
      state={
        isSubscribe: false,
        text1: "subscibe",
        text2: "unsubscribe",
      }

      clickHandler=()=>{
            this.setState({
                isSubscribe:!this.state.isSubscribe
            },()=>{
               
                // console.log("I am clicked")
                
                       toast.success("Thanks for Subscribing!", {
                       position: "top-right",
          });

                
            })
        }
         render(){
            return(
                <>
                 <button className={this.state.isSubscribe?"class1":"class2"} onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
                 {
                    this.state.isSubscribe?<div>
                        <CustomCard/>
                    </div>:<div>
                        <h2>Please subscibe to access the content</h2>
                    </div>
                 }
                </>
               
            )
         }
}






export default Youtubebutton