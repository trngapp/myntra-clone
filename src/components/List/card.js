import React, { useContext } from "react"

import "./Card.css"
import {IdContext} from "../../context/Navigate"


import {useNavigate} from "react-router-dom"
const Card=({image,name,type,price,lastPrice,discount,Id})=>{
    //const {id}=useContext(IdContext);
    //const [idi, setId] = useState();
    /*const history = useNavigate();


  useEffect(()=>{
    id && history.push(generatePath("/products/:id", { id }));
  },[])*/




    const {setid}=useContext(IdContext);



    let navigate=useNavigate();
    const navi=()=>{
        setid(Id);
        navigate("./product");
        //navigate(generatePath("/products/:id", { id }))
    }
    return (
        <>
<div style={{cursor:"pointer"}} onClick={navi}  className="CardContainer">

<img style={{width:"100%",
                height:"auto",
                objectFit:"cover"}} src={image} alt="img" />
               <div class="slide"></div>
               <div class="wishlist"></div>
<div>
    <h2 style={{fontSize:"0.9rem",fontWidth:"10px"}}>{name}</h2>
    <h2 style={{fontSize:"0.9rem",fontFamily:"sans-serif",color:"grey",fontWeight:5}}>{type}</h2>
    <h2 style={{fontSize:"0.9rem",display:"inline-block"}}>Rs.{price}</h2> &nbsp; <h3 style={{display:"inline-block",textDecoration:"line-through",fontSize:"0.9rem",fontFamily:"sans-serif",color:"grey"}}>{lastPrice}</h3> &nbsp; <h3 style={{display:"inline-block",fontSize:"0.9rem",fontFamily:"sans-serif",fontWeight:"1px", color:"#FD913C"}}>({discount}%)</h3>
</div>
</div>
        </>
    )
}
export default Card;