import React, { useContext, useEffect, useState } from "react"
import Card from "./card.js"
import "./list.css"
//import Json from "./list.json"
import {FilterContext} from "../../context/filter"
import {TickContext} from "../../context/filter"
const List=()=>{
    const {tickarrow,ticklouis,tickpeter,tickvan,search,sorte}=useContext(TickContext);
    const {filter} =useContext(FilterContext);
    const [Json,setJson]=useState({});
    var arr = [];
    //var jsony;
   /* var Json;
    var fetchy=async()=>{
        await fetch('./list1.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            Json=myJson;
          });

        }*/
useEffect(()=>{

 fetch('./list1.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            //console.log(response)
            return response.json();
          })
          .then(function(myJson) {
           setJson(myJson);
          });


})



    var newarr=filter;
    if(search===false)
    {

        newarr=filter.filter((x, i, a) => a.indexOf(x) === i);
    if(tickarrow===false)
    {
        const index = newarr.indexOf('Arrow');
        if(index>-1)
        {
     newarr.splice(index,1);
        }
       // console.log(newarr);
     //console.log("tickarrow");
    }
    if(ticklouis===false)
    {
        const index = newarr.indexOf('Louis Phillipe');
        if(index>-1)
        {
        newarr.splice(index,1);}
        //console.log("tickloui");
    }
    if(tickpeter===false)
    {
        const index = newarr.indexOf('Peter England');
        if(index>-1)
        {
        newarr.splice(index,1);
        }
        //console.log("tickpeter");
    }
    if(tickvan===false)
    {
        const index = newarr.indexOf('Van Heusen');
        if(index>-1)
        {
        newarr.splice(index,1);
        }
       // console.log("tickvan");
    }
    //console.log(newarr);
}



        if(newarr.length>0 && !(newarr.includes(''))){
         Object.keys(Json).forEach(function(key) {
             if(newarr.includes(Json[key].name))
             {
            arr.push(Json[key]);
             }
          });

        }
        else{
            Object.keys(Json).forEach(function(key) {

               arr.push(Json[key]);

             });


           if(sorte!=null)
          {
              if(sorte==='price')
              {
              //console.log(sorte);
              arr.sort((a,b)=>a.price>b.price?1:a.price<b.price?-1:0);
              }
              else if(sorte==='discount'){
                //console.log(sorte);
                arr.sort((a,b)=>a.discount>b.discount?1:a.discount<b.discount?-1:0);
              }

          }



           }




    return(
        <>
<div className="ListContainer">
{arr.map(item => <Card Id={item.id} image={item.image} name={item.name}  type={item.type} price={item.price} lastPrice={item.lastPrice} discount={item.discount} />)}
</div>
        </>
    )
}
export default List;