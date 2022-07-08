import React, { useState, useEffect,useContext } from "react";
import "./filter.css"

import {FilterContext} from "../context/filter"
import {TickContext} from "../context/filter"
const Filter =(props)=>{
const {setTickArrow,setTickVan,setTickPeter,setTickLouis}=useContext(TickContext);
const {filter,setFilter}=useContext(FilterContext);

const [tickVan,setTickedVan]=useState(false);
const [tickArrow,setTickedArrow]=useState(false);
const [tickLouis,setTickedLouis]=useState(false);
const [tickPeter,setTickedPeter]=useState(false);
const [brand,setBrand]=useState([]);



const change=(event)=>{
    //console.log(event.target.value);
    ///




    if(event.target.value==='Van Heusen')
    {
        if(tickVan===false)
        {
            setBrand(brand=>[...brand,event.target.value]);
            setTickedVan(true);
        }
        else{
            setTickedVan(false);
        }
    }
    else if(event.target.value==='Louis Phillipe')
    {
        if(tickLouis===false)
        {
            setBrand(brand=>[...brand,event.target.value]);
            setTickedLouis(true);
        }
        else{
            setTickedLouis(false);
        }
    }
    else if(event.target.value==='Arrow')
    {
        if(tickArrow===false)
        {
            setBrand(brand=>[...brand,event.target.value]);
            setTickedArrow(true);
        }
        else{
            setTickedArrow(false);
        }
    }
    else if(event.target.value==='Peter England')
    {
        if(tickPeter===false)
        {
            setBrand(brand=>[...brand,event.target.value]);
            //console.log(brand);
            setTickedPeter(true);
        }
        else{
            setTickedPeter(false);
        }
    }

}

///
if(tickPeter===true)
{
    setTickPeter(true);
}
else{
    setTickPeter(false);
}
if(tickArrow===true)
{
    setTickArrow(true);
}
else{
    setTickArrow(false);
}
if(tickVan===true)
{
    setTickVan(true);
}
else{
    setTickVan(false);
}
if(tickLouis===true)
{
    setTickLouis(true);
}
else{
    setTickLouis(false);
}














////




useEffect(()=>{





    if(tickVan===true || tickArrow===true || tickLouis===true || tickPeter===true)
    {
        console.log(filter);
        console.log(tickVan,tickArrow,tickLouis,tickPeter);
    setFilter(brand);

    }
    else
    {

    setFilter(filter=>[]);
    //console.log(filter);
    }





},[tickVan,tickArrow,tickLouis,tickPeter]);




    return (
        <>

        <div className="Contain">
         <div style={{borderBottom:"1px solid #dcdcdc",width:"100%",padding:"5px"}}>
         <h2 style={{display:"inline-block",fontSize:"15px"}}>BRAND</h2>
             <br/>

  <input type="checkbox" onClick={change} id="brand1" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} name="brand1" value="Louis Phillipe"/>
  <label for="vehicle1"   style={{fontFamily:"Roboto",fontSize:"13px"}}>&nbsp;&nbsp;Louis Philipe</label><br/>
  <input type="checkbox" onClick={change} style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand2" name="brand2"  value="Arrow"/>
  <label for="vehicle2"   style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Arrow </label><br/>
  <input type="checkbox" onClick={change}  style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand3" name="brand3"   value="Peter England"/>
  <label for="vehicle3"   style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Peter England </label><br/>
  <input type="checkbox" onClick={change} style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand4" name="brand4"   value="Van Heusen"/>
  <label for="vehicle3"   style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Van Heusen </label><br/>


             </div>

             <div style={{borderBottom:"1px solid #dcdcdc",width:"100%",padding:"5px"}}>
             <h2 style={{display:"inline-block",fontSize:"15px"}}>PRICE</h2>
             <br/>
             <input type="checkbox" id="brand1" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} name="brand1" value="Bike"/>

  <label for="vehicle1"  style={{fontFamily:"Roboto",fontSize:"13px"}}>&nbsp;&nbsp;Rs. 399 to Rs. 1808</label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand2" name="brand2"  value="Car"/>
  <label for="vehicle2"  style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Rs. 1809 to Rs. 1900</label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand3" name="brand3"   value="Boat"/>
  <label for="vehicle3"  style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Rs. 1900 to Rs. 3000</label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand4" name="brand4"   value="Boat"/>
  <label for="vehicle3"  style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Rs. 3000 to Rs. 4626 </label><br/>
             </div>

             <div style={{borderBottom:"1px solid #dcdcdc",width:"100%",padding:"5px"}}>
             <h2 style={{display:"inline-block",fontSize:"15px"}}>COLOR</h2>
             <br/>
             <input type="checkbox" id="brand1" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} name="brand1" value="Bike"/>
  <label for="vehicle1" style={{fontFamily:"Roboto",fontSize:"13px"}}>&nbsp;&nbsp;Red</label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand2" name="brand2"  value="Car"/>
  <label for="vehicle2" style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Pink</label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand3" name="brand3"   value="Boat"/>
  <label for="vehicle3" style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Blue </label><br/>
  <input type="checkbox" style={{accentColor:"#F13AB1",height:"15px",width:"15px",cursor:"pointer"}} id="brand4" name="brand4"   value="Boat"/>
  <label for="vehicle3" style={{fontFamily:"Roboto",fontSize:"13px"}}> &nbsp;&nbsp;Yellow </label><br/>
             </div>
             </div>
        </>
    )
}
export default Filter;