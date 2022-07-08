import React,{useState,useContext, useEffect} from "react"
import * as ReactDOM from 'react-dom';

import "./product.css"
import styled from 'styled-components';
import Modal from "./ImageModal.js"
import BagModal from "../BagModal"
import "./ImageModal.css"
import {IdContext} from "../../context/Navigate";
//import {ItemContext} from "../../context/Item";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import Json from "../List/list.json"

//import { left } from "@popperjs/core";
const getIds=()=>{

let ids=localStorage.getItem('ids');
if(ids)
{
return JSON.parse(localStorage.getItem('ids'));
}
else{
return [];
}
}
const getSize=()=>{
  let size=localStorage.getItem('size');
  if(size)
  {
  return JSON.parse(localStorage.getItem('size'));
  }
  else{
  return [];
  }
}
const Product =()=>{

  const {id}=useContext(IdContext);
  //const {id}=useParams();
   const [ids,setids]=useState(getIds);
   const [sizes,setsizes]=useState(getSize);

  const [circleclick1,setcircle1]=useState(false);
  const [circleclick2,setcircle2]=useState(false);
  const [circleclick3,setcircle3]=useState(false);
  const [size,setSize]=useState(0);
  //const  [butclick,setbut]=useState(true);

  const onbutClick=()=>{
  if(size>0)
  {
    console.log(ids,sizes);

    setsizes([...sizes,size]);
    setids([...ids,id]);

Show();

  }
  }

  useEffect(()=>{


   localStorage.setItem('ids',JSON.stringify(ids));
       localStorage.setItem('size',JSON.stringify(sizes));




  },[ids,sizes])



console.log(id);
///
const changeCss1=()=>{
  let element1 = document.getElementById('button1')


  if(circleclick1===false && circleclick3===false && circleclick2===false)

  {    ReactDOM.findDOMNode(element1).style.backgroundColor = '#C81132';
  ReactDOM.findDOMNode(element1).style.color = 'white';
  setSize(29);
  setcircle1(true);

  }

else
{
  ReactDOM.findDOMNode(element1).style.backgroundColor = 'white';
  ReactDOM.findDOMNode(element1).style.color = 'black';
  setcircle1(false);
}
}
const changeCss2=()=>{
  let element2 = document.getElementById('button2')


  if(circleclick2===false && circleclick3===false && circleclick1===false)

  {    ReactDOM.findDOMNode(element2).style.backgroundColor = '#C81132';
  ReactDOM.findDOMNode(element2).style.color = 'white';
  setSize(30);
  setcircle2(true);

  }

else
{
  ReactDOM.findDOMNode(element2).style.backgroundColor = 'white';
  ReactDOM.findDOMNode(element2).style.color = 'black';
  setcircle2(false);
}
}
const changeCss3=()=>{
  let element3 = document.getElementById('button3')


  if(circleclick1===false && circleclick3===false && circleclick2===false)

  {    ReactDOM.findDOMNode(element3).style.backgroundColor = '#C81132';
  ReactDOM.findDOMNode(element3).style.color = 'white';
  setSize(36);
  setcircle3(true);

  }

else
{
  ReactDOM.findDOMNode(element3).style.backgroundColor = 'white';
  ReactDOM.findDOMNode(element3).style.color = 'black';
  setcircle3(false);
}
}
//
/*const changeCss1=(event)=>{

  if(circleclick1===false)
  {
    setcircle1(true);


     event.currentTarget.style.backgroundColor='#C81132';
     event.currentTarget.style.color='white';
  }
  else
  {

    setcircle1(false);

    event.currentTarget.style.backgroundColor='white';
    event.currentTarget.style.color='black';
  }

   }
   const changeCss2=(event)=>{

    if(circleclick2===false )
    {
      setcircle2(true);
       event.currentTarget.style.backgroundColor='#C81132';
       event.currentTarget.style.color='white';

    }
    else
    {
      setcircle2(false);
      event.currentTarget.style.backgroundColor='white';
      event.currentTarget.style.color='black';
    }


  }
  const changeCss3=(event)=>{


    if( circleclick3===false )

    {
      setcircle3(true);
       event.currentTarget.style.backgroundColor='#C81132';
       event.currentTarget.style.color='white';
    }
    else
    {
      setcircle3(false);
      event.currentTarget.style.backgroundColor='white';
      event.currentTarget.style.color='black';
    }
  }
*/



      var arr=[];
      Object.keys(Json).forEach(function(key) {
      if(Json[key].id===id)
      {
        arr.push(Json[key]);
      }

      });
      const {name,image,price,lastPrice,type,discount}=arr[0];
      console.log(name,image,price,lastPrice,type,discount);

const [show,setShow]=useState(false);
//const [imagesrc,setSrc]=useState(image);
let imagesrc=image;
   let open1=()=>{
       setShow(true);
//setSrc({image});
   }
   const [sho,setSho]=useState(false);
   const Show=()=>{
    setSho(true);
   }
    return (
        <>
        <BagModal onClose={()=>setSho(false)} show={sho} />
        <Modal onClose={()=>setShow(false)} show={show} src={imagesrc}/>
<div className="ProductContainer">
<div className="ProductBox">
<h2 style={{fontSize:"1rem",fontFamily:"sans-serif",color:"grey",display:"inline-block",fontWeight:5,marginLeft:"40px"}}>Home &nbsp; / &nbsp; Clothing &nbsp;/ &nbsp; Shirts &nbsp; / &nbsp; </h2> <h2 style={{fontSize:"1rem",fontFamily:"sans-serif",color:"black",display:"inline-block",fontWeight:10}}>Louis Phillipe Shirts</h2>
</div>

<div className="ProductBox">
<div className="ImageContainer">
<img  onClick={open1} className="ImageBox" style={{width:"100%",
                height:"auto",
                objectFit:"cover"}}  src={image} alt="pic" />

 <img  onClick={open1} className="ImageBox" style={{width:"100%",
                height:"auto",
                objectFit:"cover"}}  src={image} alt="pic" />
<img onClick={open1} className="ImageBox" style={{width:"100%",
                height:"auto",
                objectFit:"cover"}}  src={image} alt="pic" />
<img onClick={open1} className="ImageBox" style={{width:"100%",
                height:"auto",
                objectFit:"cover"}}  src={image} alt="pic" />
</div>
</div>
<div className="ProductBox">
<div className="description">
<h1>{name}</h1>
<h1 style={{fontSize:"1.2rem",fontFamily:"sans-serif",color:"grey",display:"inline-block",fontWeight:5,marginTop:"-3%"}}>{type}</h1>

<hr/>

<h2 style={{fontSize:"1.4rem",display:"inline-block"}}>{price}</h2> &nbsp; <label style={{display:"inline-block",textDecoration:"line-through",fontSize:"1.4rem",color:"black"}}>{lastPrice}</label> &nbsp; <h3 style={{display:"inline-block",fontSize:"1.4rem",fontFamily:"sans-serif",fontWeight:"1px", color:"#FD913C"}}>({discount}% OFF)</h3>
<h2 style={{fontSize:"0.9rem",color:"#7fffd4",marginTop:"-2%"}}>inclusive of all taxes</h2>
<h2 style={{display:"inline-block",fontSize:"1rem"}}>SELECT</h2> &nbsp;&nbsp; <h2 style={{cursor:"pointer",color:"#E72744",display:"inline-block",fontSize:"1rem"}}>SIZE CHART ></h2> <br/><br/>
<div  className="SizeBox" id="button1"onClick={changeCss1}><h4>29</h4></div> &nbsp; &nbsp; <div  className="SizeBox"id="button2" onClick={changeCss2}><h4>30</h4></div> &nbsp; &nbsp; <div  className="SizeBox" id="button3" onClick={changeCss3}><h4>36</h4></div>
<br/>
<br/>
<div onClick={onbutClick} className="AddBox"><ShoppingBagOutlinedIcon className="Add" style={{marginTop:"9px"}}/>&nbsp;&nbsp; <h1 className="Add" style={{display:"inline-block"}}>ADD TO BAG</h1></div>
<br/>
<br/>
<h2 style={{display:"inline",fontSize:"1rem"}}>DELIVERY OPTIONS</h2>
<br/>
<br/>
<div onClick={()=>console.log("shopped")} className="PinCode">
    <h4 style={{fontSize:"0.8rem",fontFamily:"sans-serif",color:"grey",display:"inline-block",fontWeight:5,marginLeft:"20px"}}>Enter Pincode</h4> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  <h2 style={{cursor:"pointer",color:"#E72744",display:"inline-block",fontSize:"15px"}}>Check</h2>
    <br/>
    <h2 style={{fontSize:"0.7rem",color:"#ccc",marginTop:"2%"}}>Please enter PIN code to check delivery time & Pay on Delivery Availability</h2>
    <br/>
    <br/>
   <p style={{display:"inline",fontSize:"1.1rem"}} > 100% Original Products <br/><br/>
Pay on delivery might be available <br/><br/>
Easy 30 days returns and exchanges <br/><br/>
Try & Buy might be available</p> <br/><br/>
<br/><br/>
<h2 style={{display:"inline",fontSize:"1rem"}}>BEST OFFERS</h2>

</div>
</div>
</div>

</div>
        </>
    )
}
export default Product;


export const CircularDiv = styled.div`
height: 50px;
  width: 50px;
  border-radius: 50%;
border:1px solid #ccc;
  display: inline-block;
cursor:pointer;



`;
