import { useEffect, useState } from "react";
import  './partition.css';

const Partition=({Lname,Itype,onChange},)=>{  
    return(
    <div className="part">
        <label>{Lname}</label>
        <input type={Itype} onChange={onChange}/>
    </div>
    );
}
export default Partition;
