import React from "react";
import "./homeStyles.css"
import Filter from "./filter"
import List from "./List/list.js"
import SortBar from "./homeSortBar"


const Home=()=>{



    return (

        <>


<div className="Container">
      <div class="Box">
      <h2 style={{fontSize:"0.9rem",fontFamily:"sans-serif",color:"grey",display:"inline-block",fontWeight:5}}>Home&nbsp; / &nbsp; Clothing &nbsp; / &nbsp; Shirts &nbsp; / &nbsp;</h2> <h2 style={{fontSize:"0.9rem",fontFamily:"sans-serif",color:"black",display:"inline-block",fontWeight:10}}>Formal Shirts For Men</h2>
      <br/>
      <h2 style={{fontSize:"1rem",fontFamily:"sans-serif",color:"black",display:"inline-block",fontWeight:12}}>Formal Shirts For Men</h2>
 <h2 style={{fontSize:"0.9rem",fontFamily:"sans-serif",color:"grey",display:"inline-block",fontWeight:5}}> - 10889 items</h2>
 <SortBar/>
          </div>

          <div class="Box">
<Filter />
              </div>


              <div class="Box">
<List />
              </div>


      </div>
        </>
    )
}
export default Home;