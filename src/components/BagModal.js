import React from "react";
import "./BagModal.css"
import Json from "./List/list.json";
import Item from "./BagItem"
const Modal=(props)=>{
if(!props.show )
{
    return null
}

let arrId=JSON.parse(localStorage.getItem('ids'));
let  arrSize=JSON.parse(localStorage.getItem('size'));

  let arr=[];
    arrId.forEach(element => {
        Object.keys(Json).forEach(function(key) {
            if(Json[key].id===element)
            {
           arr.push(Json[key]);
            }
         });
    });






    return (
        <>
<div className="Bmodal" onClick={props.onClose}>
    <div className="Bmodal-content" onClick={e=>e.stopPropagation()}>
        <div className="Bmodal-header">
         {/*<h2 className="Bmodal-title"></h2>*/}
        </div>
        <div className="Bmodal-body">
      {/*<img src={props.src} className="BagModal" alt="img"/>*/}
 {arr.map((item,index)=>{
     var ind=index;
     var si=arrSize[ind];
     console.log(item,si);
     return <Item name={item.name} price={item.price} size={si} lastPrice={item.lastPrice}  />
 })}
 {/*arr.map((item)=><Item></Item>)*/}
        </div>
        <div className="Bmodal-footer">
       <button onClick={props.onClose} className="button" style={{width:"100px",marginTop:"30px"}}>Close</button>
        </div>
    </div>
</div>
        </>
    )
}
export default Modal;