import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [type,setType]=useState("products")

  useEffect(() => {
    fetchData();
    console.log("useEffect Example");
  }, [type]);

  const fetchData = async () => {
    try {

      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );

      if (status === 200) {
        setData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
 const changeTypeHandler=(each)=>{
    setType(each)
 }
  return (
    <>
      <h3>UseEffect example</h3>
      {
        ["products","carts","users"].map((each)=>{
            return (
              <>
                <Button onClick={()=>changeTypeHandler(each)}>{each}</Button>
              </>
            );
        })
      }
      <h5>{type}</h5>
      {data.map((each) => {
        return(
        <pre key={each.id}>{JSON.stringify(each)}</pre> // Make sure to return the JSX here
      )})}
    </>
  );
};

export default UseEffectExample;
