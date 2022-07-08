import React, { createContext, useState } from "react";

export const IdContext=createContext();

export function IdProvider(props){
const [id,setid]=useState(1);

return (
    <IdContext.Provider value={{id,setid}}>
        {props.children}
    </IdContext.Provider>
)
}