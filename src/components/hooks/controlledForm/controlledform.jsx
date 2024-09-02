import { useState } from "react"




const ControlledForm=()=>{
    const [model,setModel]=useState("")
    const [modelError,setmodelError]=useState("")

    const [mobile, setMobile] = useState("");
    const [mobileError, setmobileError] = useState("");

   const onSubmit=(event)=>{
    event.preventDefault();

       if(modelError||mobileError){
        alert("Please Fill Properly")
       }
       else{
        // hit the server
       }
   }



    const modelHandler=(event)=>{
      const modelName=event.target.value

         const error=modelValidator(modelName);
       

         console.log(error)
          setModel(modelName);

           if(error){
              setmodelError(error);
           }
           else{
            setmodelError("")
           }
          

      console.log(modelName)
    }

    const modelValidator=(modelName)=>{
          let error=""
       const modelRegx=/^samsung/i
         
             if(!modelName){

                error="Please Enter ModelName"

             }
             else if(!modelRegx.test(modelName)){

                error="Please Enter Proper Samsung MOdel"
             }

             return error;
    }


    const mobileHandler=(event)=>{
               const mobileNumber=event.target.value;
        let moberror=mobileValidation(mobileNumber)
               setMobile(mobileNumber);
               if(moberror){
                 setmobileError(moberror)
               }
               else{
                setmobileError("")
               }

    }


    const mobileValidation=(value)=>{

       let  moberror=""
        const modelRegx=/^[6-9][0-9]{9}$/
        if(!value){
            moberror="Please Enter MobileNumber"
        }
        else if(!modelRegx.test(value)){
            moberror="Please Enter Valid MobileNumber"
        }
        return moberror;

    }



    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="modelname" className="form-label">
          Enter ModelName:
        </label>
        <input
          type="text"
          className="form-control"
          id="modelname"
          placeholder="Enter your ModelName "
          value={model}
          onChange={modelHandler}
        />
        {modelError && <span style={{ color: "red" }}>{modelError}</span>}

        <label htmlFor="mobileNumber" className="form-label">
          Enter MobileNumber:
        </label>
        <input
          type="number"
          className="form-control"
          id="mobileNumber"
          placeholder="Enter your MobileNumber"
          value={mobile}
          onChange={mobileHandler}
        />
        {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    );
}

export default ControlledForm