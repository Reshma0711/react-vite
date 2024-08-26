



const CustomButton=(prop)=>{
    const {text="button",onPress=(()=>{}),bgcolor}=prop
     const buttonstyles={backgroundColor:bgcolor}
    return(
         <button onClick={onPress} style={buttonstyles}>{text}</button>
    )
}

export default CustomButton