



const CustomButton=(prop)=>{
    const {text,bgcolor,clickHandler}=prop
    return(
         <button onClick={clickHandler} style={{backgroundColor:bgcolor}}>{text}</button>
    )
}

export default CustomButton