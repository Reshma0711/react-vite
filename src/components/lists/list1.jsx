



// const CustomList=()=>{
//      return(
//         <div>
//          <h1>List of Fruits1</h1>
//     <ul>
//      <li>Mango</li>
//      <li>Apple</li>
//      <li>Grapes</li>
//      <li>Guava</li>
//      <li>Pineapple</li>
//     </ul>   
//         </div>
 
// )
// }
// export default CustomList



// const CustomOrderList=()=>{
//      return(
//         <div>
//          <h1>List of Fruits2</h1>
//     <ol>
//      <li>Mango</li>
//      <li>Apple</li>
//      <li>Grapes</li>
//      <li>Guava</li>
//      <li>Pineapple</li>
//     </ol>   
//         </div>
 
// )
// }
// export  {CustomOrderList}


// const CustomList1=()=>{
//     return(
//         <>
//         <h1>List of Fruits3</h1>
//         <ListItems/>
//         </>
        
//     )
// }

// export {CustomList1}


// const ListItems=()=>{
//        return(
//         <>
//          <li>Mango</li>
//        <li>Apple</li>
//        <li>Grapes</li>
//        <li>Guava</li>
//        <li>Pineapple</li>
//         </>
//        )
// }
 
// const CustomList2=()=>{
//     return(
//         <>
//         <h1>List of Fruits4</h1>
//         <ListItems1/>
//         </>
        
//     )
// }

// export {CustomList2}


// const ListItems1=()=>{
//     const fruits=["apple","mango","guava","pineapple","custardapple"]
//     return (
//         <>
//         {
//             fruits.map((eachFruit,index)=>{
//                 return (
//                     <li key={index}>{eachFruit}</li>
//                 )
                   
//             })
//         }
//         </>
//     )
// }



const CustomList=(prop)=>{
        const {list}=prop
        return(
            <ul>
            {
                list.map((eachItem,index)=>{
                    return(
                        <li key={index}> {eachItem} </li>
                    )
                })
            }
            </ul>
        )
}

export default CustomList

