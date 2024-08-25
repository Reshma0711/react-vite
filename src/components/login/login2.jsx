



const CustomLogin=({isAdmin})=>{
    
        
    
    if(isAdmin){
        return(
            <h3>Welcome Admin</h3>
        )
    }
    else{
        return(
            <h3>Welcome User</h3>
        )
    }
}

export default CustomLogin


const CustomLogin2=(prop)=>{
    const {isAdmin=false}=prop
    return(
        <>
         {
            isAdmin?<h3>welcome admin</h3>:<h3>welcome user</h3>
        }
        </>
       
    )
}

export {CustomLogin2}



const CustomLogin3=({isAdmin=true})=>{
       if(isAdmin){
        return <h3>Welcome random User</h3>
       }
       return(
        <>
        <h3>Welcome</h3>
        </>
       )
}
export {CustomLogin3}