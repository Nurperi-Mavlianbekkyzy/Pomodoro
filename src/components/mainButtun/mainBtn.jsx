import React from "react";
import { useDispatch } from "react-redux";
import { change } from "../../store/actions/actions";
import './mainBtn.css'

export const MainBtn = ({color, title}) => {
    const dispatch = useDispatch();
    return (
        <button id="mainBtn"  onClick={() => dispatch(change(color))}>{title}</button>
    )  
}