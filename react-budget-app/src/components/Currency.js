import React,{useContext} from "react";
import {AppContext} from "../context/AppContext"


const Currency_dropdown = ()=>{
    const {currency,dispatch} = useContext(AppContext);
    const Currency_list = [
        ["$","Dollar"],
        ["£","Pound"],
        ["€","Euro"],
        ["₹","Ruppee"]
    ];
    const ChangeCurrency = (event)=>{
        const chg = {
            type:"CHG_CURRENCY",
            payload:event.target.value
        }
        dispatch(chg)
    }
    return (
        <div className="alert alert-secondary bg-transparent">
            <select className="custom-select text-light bg-primary" onChange={ChangeCurrency}>
                <option defaultValue>Currency ({currency})</option>
                {Currency_list.map((cur,index)=>(<option key = {index}value={cur[0]}>{cur[0]} {cur[1]}</option>))}
            </select>
        </div>
    )
}

export default Currency_dropdown;