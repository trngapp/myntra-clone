import React from "react";
const BagItem=({name,price,size,lastPrice})=>{
    return (
        <>
        <div style={{width:"auto",height:"50px",backgroundColor:"#f5f5f5",padding:"1px",margin:"12px",border:"2px solid black",display:"flex",justifyContent:"space-between",borderRadius:"5px"}}>

          <h1 style={{fontSize:"20px",marginTop:"8px",marginLeft:"10px"}}>Brand:&nbsp;&nbsp;{name}</h1>
          <h1 style={{fontSize:"20px",marginTop:"8px"}}>Price:&nbsp;&nbsp;{price}</h1>
          <h1 style={{fontSize:"20px",marginTop:"8px",marginRight:"10px"}}>Size:&nbsp;&nbsp;{size}</h1>



        </div>

        </>
    )
}
export default BagItem;