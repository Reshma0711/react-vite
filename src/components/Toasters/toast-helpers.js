

import {  toast } from "react-toastify";

const Successtoast=(message,position)=>{
      toast.success(message, {
        position: position,
      });
}

export default Successtoast




const Errortoast=(message,position)=>{
       toast.error(message, {
       position: position
     });
}

export  {Errortoast}