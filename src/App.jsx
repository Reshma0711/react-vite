
import './App.css'
import CustomButton from './components/button/button1'
import MainHeading, { SecondaryHeading } from './components/heading/heading1'
import CustomImage from './components/images/image1'
import CustomList from './components/lists/list1'
import receipeData  from './data/receipedata'


const App=()=>{
  const imageListing=[
    {
      name:"flower1",
      source:"https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg",
      width:"400px",
      height:"400px"
    },
         {
      name:"flower2",
      source:"https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg",
      width:"500px",
      height:"500px"
    }
  ]
  return(
    <>
     <CustomImage source="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg" height={200} width={200} alttext="flowers"/><br/>
     <CustomImage source="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg" height={300} width={300} alttext="flowers"/>
     {
      imageListing.map((eachimage,index)=>{
        return(
          <CustomImage key={eachimage.index} source={eachimage.source} height={eachimage.height} width={eachimage.width} alttext={eachimage.name}/>
         
        )
      })
     }
      <br/>
      <CustomButton 
        text="Click Me!" 
        onPress={() => {}} 
        bgcolor="Green" 
      />

      <CustomList list={["pushpa","reshma","nikhi"]}/>

{
  receipeData.map((eachReceipe,index)=>{
    return(
      <div key={eachReceipe.index}>
      <MainHeading heading={eachReceipe.name}/>
      <CustomImage source={eachReceipe.image} height={200} width={200}/>
      <SecondaryHeading heading={"ingredients required"}/>
      <CustomList list={eachReceipe.ingredients}/>
      <SecondaryHeading heading={"instructions required"}/>
      <CustomList list={eachReceipe.instructions}/>
      </div>
    )
  })
}
    </>
   
  )
}
export default App
