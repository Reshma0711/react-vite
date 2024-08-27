


const CustomList=(prop)=>{
        const {list}=prop
        return(
            <ul>
            {
                list.map((eachItem,index)=>{
                    return(
                        <>
                        <li key={index}> {eachItem} </li>
                        </>
                        
                    )
                })
            }
            </ul>
        )
}

export default CustomList

