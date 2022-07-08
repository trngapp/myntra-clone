import React,{createContext, useState} from "react";
export const TickContext=createContext();
export function TickProvider(props){
   const [tickarrow,setTickArrow]=useState(false);
   const [tickvan,setTickVan]=useState(false);
   const [tickpeter,setTickPeter]=useState(false);
   const [ticklouis,setTickLouis]=useState(false);
   const [search,setsearch]=useState(false);
   const [sorte,setsort]=useState();

    return(
        <TickContext.Provider value={{tickvan,tickpeter,tickarrow,ticklouis,setTickArrow,setTickVan,setTickPeter,setTickLouis,setsearch,search,sorte,setsort}}>
            {props.children}
        </TickContext.Provider>
    )


    }
export const FilterContext=createContext();

export function FilterProvider(props){
const [filter,setFilter]=useState([]);

return(
    <FilterContext.Provider value={{filter,setFilter}}>
        {props.children}
    </FilterContext.Provider>
)


}