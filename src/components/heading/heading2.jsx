



const MainHeading=(prop)=>{
    const{heading,children}=prop
    return (
        <div>
            <h1> {heading}</h1>
             {children}
        </div>
    )
}

export default MainHeading