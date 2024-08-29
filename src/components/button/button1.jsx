



const CustomButton=(prop)=>{
    const {text="Button",onPress=(()=>{}),bgcolor}=prop
     const buttonstyles={backgroundColor:bgcolor}
    return(
         <button onClick={onPress} style={buttonstyles}>{text}</button>
    )
}

export default CustomButton



const CustomButton1=(prop)=>{
    const {text="Button",onPress=()=>{},bgcolor}=prop
     const buttonstyles={backgroundColor:bgcolor}
    
     const myPress=()=>{
       
          onPress({name:"Reshma",designation:"FrontEnd Dev"}) 
        
     }
    
    return(

            <button style={buttonstyles} onClick={myPress}>{text}</button>
     
        )
}

export {CustomButton1}