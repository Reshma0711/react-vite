
import React from "react"


const MainHeading=(prop)=>{
    const{heading}=prop
    console.log(heading)
    return(
        <>
        <h1>{heading}</h1>
        </>
    )
}

export default React.memo(MainHeading)

const SecondaryHeading=(prop)=>{
    const{heading}=prop
    return(
     <h2>{heading}</h2>
    )
}
export {SecondaryHeading}