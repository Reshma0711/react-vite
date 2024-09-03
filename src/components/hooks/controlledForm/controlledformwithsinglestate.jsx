import { useState } from "react";




const Uncontrolled=()=>{
          const [formData,setFormData]=useState({
            model:"",
            mobileNumber:""
          });

           const [formErrors,setFormErrors]=useState({
            modelError:"",
            mobileError:""
           })
          const onSubmit=(event)=>{
                    event.preventDefault();


                    const modelError=modelValidator(formData.model)
                    const mobileError=mobileValidator(formData.mobileNumber)

                    if(modelError|| mobileError){
                        setFormErrors({
                            modelError,mobileError
                        });;
                        return  formErrors;
                    }
                    console.log(formData)

          }




          const onChangeHandler=(event)=>{

            // we can write as below lines without using destructuring
            //     const enteredValue=event.target.value
            //    const targetedName = event.target.name;

                 const{name,value}=event.target

                console.log(name,value,"userinput")
                setFormData({...formData,[name]:value})

               
                switch(name){
                    case "model":
                        modelValidator(name)
                        break;
                    case  "mobileNumber":
                        mobileValidator(name)
                        break;
                }
          }
   const modelValidator=()=>{

   }

    return (
      <>
        <form onSubmit={onSubmit}>
          <label htmlFor="modelname" className="form-label">
            Enter ModelName:
          </label>
          <input
            type="text"
            className="form-control"
            id="modelname"
            placeholder="Enter your ModelName "
            name="model"
            value={formData.model}
            onChange={onChangeHandler}
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
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={onChangeHandler}
          />
          {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}


          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </>
    );
}




export default Uncontrolled