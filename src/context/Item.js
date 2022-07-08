import React, { createContext, useState } from "react";

export const ItemContext=createContext();

export function ItemProvider(props){
const [item,setitem]=useState([]);

return (
    <ItemContext.Provider value={{item,setitem}}>
        {props.children}
    </ItemContext.Provider>
)
}