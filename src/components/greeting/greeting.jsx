



const Greeting=(prop)=>{
    const {text="GoodMorning",children}=prop
    return(
      <h2>{text} {children}</h2>
    )
}

export default Greeting