import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {FilterContext} from "../context/filter"
import {TickContext} from "../context/filter"
import Modal from "./BagModal"
 const Header =()=>{
   const {setsearch}=useContext(TickContext);
    const {setFilter}=useContext(FilterContext);
     const [brand,setBrand]=useState([]);
     const change=(event)=>{
         if(event.key==='Enter')
         {
             setBrand([event.target.value]);
            const arr=[event.target.value];
            if(arr[0]==='')
            {
                console.log(arr);
              setsearch(false);
            }
            else
            {
                console.log(arr);

                setsearch(true);

            }



         }

     }
     useEffect(()=>{
       // console.log(brand);
         setFilter(brand);


     },[brand])

     const [show,setShow]=useState(false);
   const Show=()=>{
    setShow(true);
   }



//const [imagesrc,setSrc]=useState(image);



     return (
         <>
          <Modal onClose={()=>setShow(false)} show={show} />
          <div className="nav-container">
             <a href="/"> <img style={{width:"70px",marginLeft:50}} src="https://avatars.githubusercontent.com/u/3213662?s=280&v=4" alt="logo"/></a>
              <div className='navigation'>
                        <ul>
                        <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}> MEN </li>
                            <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}> WOMEN</li>
                            <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}> KIDS</li>
                            <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}>  HOME LIVING</li>
                            <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}>  BEAUTY</li>
                            <li style={{display:"inline-block",fontSize:"15px",fontWeight:"bold"}}>  STUDIO</li>

                        </ul>
                    </div>
               <div>
                        <div className="SearchContainer">

                        <input type="text"  onKeyDown={change} className="SearchBar form-control" placeholder="Search for products , brands and more"/>
                        </div>
                    </div>
                    <div className='Icons'>
                        <button  style={{border:"none",backgroundColor:"white"}} className="IconButton"><PermIdentityIcon/></button>
                        <button  style={{border:"none",backgroundColor:"white"}} className="IconButton" ><FavoriteBorderIcon/></button>
                        <button  onClick={Show} style={{border:"none",backgroundColor:"white"}} className="IconButton"> <ShoppingBagOutlinedIcon /> </button>

                    </div>
          </div>
         </>
     )
 }
 export default Header;