import React from 'react';
import '../custom.scss'

const ThankYou = (props) => {
  return (
    <>
      <div className='thank-you-page'>
      
        <div >
        <div className='thankyou'>Thank You !</div>
      <div className='thank-note'>
      Thanks for being an awesome customer!
      </div>
      <button  className="button_exit" onClick={()=>{
       
        window.open('','_self');
        window.close();
      }} >Exit</button>
      <div className='para'>Take part in future survey </div>
      </div>
      </div>
    </>
  )
}

export default ThankYou
