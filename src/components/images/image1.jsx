
const CustomImage=(prop)=>{
    const {source,height,width,text}=prop
    return (
        <img src={source} height={height} width={width} alttext={text}/>
    )
}
export default CustomImage


