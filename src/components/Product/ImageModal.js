import React,{useEffect} from "react";
import "./ImageModal.css"
const Modal=(props)=>{
if(!props.show )
{
    return null
}

    return (
        <>
<div className="modal" onClick={props.onClose}>
    <div className="modal-content" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
         <h2 className="modal-title"></h2>
        </div>
        <div className="modal-body">
      <img src={props.src} className="ImageModal" alt="img"/>
        </div>
        <div className="modal-footer">
       <button onClick={props.onClose} className="button" style={{width:"100px",marginTop:"30px"}}>Close</button>
        </div>
    </div>
</div>
        </>
    )
}
export default Modal;