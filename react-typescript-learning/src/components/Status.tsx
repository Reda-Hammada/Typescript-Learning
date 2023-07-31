import React, {useState,useEffect} from 'react';

type statusProps = {
    status:String,

}
const Status = (props: statusProps) => {
    const {status} = props;
    const [statusState, setStatus] = useState<String >()

    useEffect( ()=>{
        switch(status){

            case'Loading':
              setStatus('Loading');
              break;
      
            case'Success':
               setStatus('Success');
               break;
      
            case'Error':
              setStatus('Error');
              break;
      
           default:
              setStatus('Loading');
              break;
        }
    },[status])
        
        
        

  return (
    <div>
        <h2>Status :</h2>
        {statusState}
    </div>
  )
}

export default Status