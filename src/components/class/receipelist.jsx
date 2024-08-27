import { Component } from "react";
import Linerloader from "../loader/linerloader";
import CustomImage from "../images/image1";
import {SecondaryHeading} from "../heading/heading1"
import CustomList from "../lists/list1";



class ReceipeList extends Component {
   state={
    recipes:[],
    loading:true,
    error:false
   }
    componentDidMount(){
     console.log("I am executed");
     this.fetchData()
  }
 fetchData=async()=>{
  try{
    const data=await fetch("https://dummyjson.com/recipes")
    const {recipes}=await data.json();
    this.setState({
        recipes:recipes,
        loading:false
    },()=>{})
    }
  catch(err){
    console.error(err)
    this.setState({
        error:true
    })
  }
 }
   

   
    render(){
        return(
            <div>
               <h2>ReceipeList</h2>
            {
               this.state.loading? <Linerloader/>:
                <>
                <h2>recipes...</h2>
               {
                this.state.recipes.map((eachrecipe,index)=>{
                    return (
                        <div key={index}>
                         <h2>{eachrecipe.name}</h2>
                         <CustomImage source={eachrecipe.image} height={250} width={250}/>
                         <SecondaryHeading heading="Ingredients required"/>
                         <CustomList list={eachrecipe.ingredients}/>
                         <SecondaryHeading heading="Instructions"/>
                         <CustomList list={eachrecipe.instructions}/>
                        </div> 
                     )
                })
               }
               
               </>
            }
            </div>
           
          )
    }
}

export default ReceipeList