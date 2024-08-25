



const MainHeading=(prop)=>{
    const{heading,children}=prop
    return (
        <div>
            <h1> {heading}{children}</h1>
             <h1>{children}</h1>
        </div>
    )
}

export default MainHeading