import React, { useContext } from "react"
import "./homeSort.css"
//import { flexbox } from "@mui/system";
import {TickContext} from "../context/filter"
const Sort=()=>{
    const {setsort}=useContext(TickContext);
const change=(event)=>{
    //console.log(event.target.value);
    setsort(event.target.value);
}
    return(
        <>
        <div style={{display: "flex",justifyContent:"space-between",alignItems:"center"}}>
            <h2 style={{display:"inline-block",fontSize:"15px"}}>FILTERS</h2>


               <div> <div className="Drop"><label  style={{fontSize:"0.9rem",fontFamily:"sans-serif",display:"inline-block",fontWeight:5,marginTop:"10px"}}>Add Ons</label></div></div>

               <div  className="Drop" > <label  style={{fontSize:"0.9rem",fontFamily:"sans-serif",display:"inline-block",fontWeight:5,marginTop:"10px"}}>Character</label> </div>
               <div  className="Drop" > <label style={{fontSize:"0.9rem",fontFamily:"sans-serif",display:"inline-block",fontWeight:5,marginTop:"10px"}}>Collor</label> </div>
               <div  className="Drop" > <label  style={{fontSize:"0.9rem",fontFamily:"sans-serif",display:"inline-block",fontWeight:5,marginTop:"10px"}}>Fabric</label> </div>


<div>
    <center>
<select onChange={change}  style={{marginTop:"10px",width:"300px",border:"none",backgroundColor:"#f5f5f5",height:"30px",cursor:"pointer"}} name="cars" id="cars">
  <option value="price">Price</option>
  <option  value="discount">discount</option>
  <option  value="none">none</option>
</select>
</center>
</div>

        </div>
        </>
    )
}
export default Sort;