import React, { useState } from "react"
import './setting.css'
import Remove from '../../Assets/Icons/remove.png'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { timesFunc } from "../../store/actions/actions"


export const Setting = ({show,onClose}) => {
    const state=useSelector(state=>state.times)
    console.log(state);
    const [pomo, setPomo]=useState(0)
    const [short, setShort]=useState(0)
    const [long, setLong]=useState(0)
    const [autoPomo, setAutoPomo]=useState(false)
    const [autoBreak, setAutoBreak]=useState(false)
    const [interval, setInterval]=useState(0)
    

    useEffect(()=>{
        setPomo(state.pomofocus)
        setShort(state.shortBreak)
        setLong(state.longBreak)
        setInterval(state.Interval)
    },[state])
        
    
        const handleOnChange=(e)=>{
            e.target.value = Number(e.target.value)
            if(e.target.name === 'pomofocus'){
                setPomo(e.target.value)
            }else if(e.target.name === 'shortBreak'){
                setShort(e.target.value)
            }else{
                setLong(e.target.value)
            }
        }
    
        const autoStartPomo=(e)=>{
            setAutoPomo(e)
        }
    
        const autoStartBreak=(e)=>{
            setAutoBreak(e)
        }

        const handleInterval=(e)=>{
            setInterval(e.target.value)
        }

    const dispatch=useDispatch()
    const handleSubmit=()=>{
        dispatch(timesFunc({pomofocus: pomo, shortBreak: short, longBreak:long, auto: autoPomo, autoBreak: autoBreak, Interval: interval}))
        onClose(false)

    }

    const handleCheck=(e)=>{
        if(e){
            autoStartPomo(!autoPomo)
        }else{
        }
    }
    const handleChecked=(e)=>{
        if(e){
            autoStartBreak(!autoBreak)
        }else{
        }
    }
    return (
      <div>{show && (<div className="mainWin">
                  <div className="modalWindow">
                <div className="inModal">
                    <div className="with-img-flex">
                        <div className="div-img1"><h3 className="h3">Timer Settig</h3></div>
                        <div className="div-img2"><img src={Remove} className="img-s" onClick={() => onClose(false)}></img></div>
                    </div>
                    <hr></hr>
                    <div className="timer-m"><b>Timer (minutes)</b></div>
                    <div className="div-3-btn">
                        <div className="number-div1">
                            <p>Pomodoro</p>
                            <input  type="number" name='pomofocus' value={pomo} onChange={handleOnChange}></input>
                        </div>
                        <div className="number-div2">
                            <p>Short Break</p>
                            <input  type="number" name='shortBreak' value={short} onChange={handleOnChange}></input>
                        </div>
                        <div className="number-div3">
                            <p>Long Break</p>
                            <input type='number'name='longBreak' value={long} onChange={handleOnChange}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="text-div-1">
                        <div><b>Auto start Breaks?</b></div>
                        <div >
                            <input className="btn-s" type="checkbox" onChange={handleChecked}/>
                                <span  className="btn-r"></span>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="text-div-1">
                       <div> <b>Auto start Pomodoros?</b></div>
                        <div>
                            <input className="btn-s" type="checkbox" onChange={handleCheck}/>
                                <span className="btn-r"></span>
                        </div>
                    </div>
                    <hr/>
                    <div className="text-div-1">
                        <div><b>Long Break interval</b></div>
                        <div>
                            <input value={interval} type='text' onChange={handleInterval} />
                        </div>
                    </div>
                    <hr className="hr55"></hr>
                    <button className="main-btn" onClick={handleSubmit}>OK</button>
                </div>
            </div>
              </div>
            )}
      </div>
    )
}