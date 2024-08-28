




 const jshelper=()=>{
    const todos=[];
    for(let i=1;i<=10;i++){
        const myObj={
            id:i,
            text:`item ${i}`
        }
        todos.push(myObj)
    }
     return todos; 
}
jshelper();
export default jshelper;



const oddEven=()=>{
    const num=[]
    for(let i=0;i<=100;i++){
           num.push(i)   
    }
    return num;
}
oddEven();
export  {oddEven};