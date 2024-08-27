import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Successtoast, { Errortoast } from './toast-helpers';






const CustomToastify = ({message}) => {
  

  const ClickMe = () => {
  
      toast.success(message, {
        position: 'top-left',
      });
  

  //  Successtoast("I am a card","top-right")

    // Errortoast("I am Error","top-right")
// try{
//    
// }
// catch(err){
//     Errortoast(err)
// }
    
    // Displaying the passed message
    // toast(message);

    // // Various toast types
    // toast.success("Success Notification !", {
    //   position: "top-center"
    // });

    // toast.error("Error Notification !", {
    //   position: "top-left"
    // });

    // toast.warn("Warning Notification !", {
    //   position: "bottom-left"
    // });

    // toast.info("Info Notification !", {
    //   position: "bottom-center"
    // });

    // toast("Custom Style Notification with css class!", {
    //   position: "bottom-right",
    //   className: 'foo-bar'
    // });
  };

  return (
    <div>
      <button onClick={ClickMe}>Notify!</button>
      <ToastContainer/>
    </div>
  );
};

export default CustomToastify;
