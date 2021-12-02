import './main.css'
import CountTimer from "./countTime";
import { MainBtn } from '../mainButtun/mainBtn';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { change } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
// import { StartBtn } from '../StartBtn/startBtn';

const Content = () => {
    const dispatch = useDispatch();
    const times = useSelector(state=>state.times); 
    const theme = useSelector(state=>state.change)
    let [minute , setMinute] = useState(25)
    let [second , setSecond] = useState(0)
    let [myinterval , setMyInterval] = useState(0); 
  
    const start = () => {
        if(myinterval) {
            clearInterval(myinterval);
            setMyInterval(0);
            return;
        }

       const newMyInterval = setInterval(() => {
           setSecond(second => second -1)
       }, 1000)
       setMyInterval(newMyInterval)
    }

    useEffect(() => {
       if(theme === "caral"){
           setMinute(times.pomofocus > 1 ? times.pomofocus : 0);
           setSecond(times.pomofocus < 1 ? times.pomofocus * 60 : 0)
           if(times.auto) {
               start()
           }
       }
       else if (theme === "short-break"){
        setMinute(times.shortBreak > 1 ? times.shortBreak : 0);
        setSecond(times.shortBreak < 1 ? times.shortBreak * 60 : 0)
        if(times.autoBreak) {
            start()
         }
      }
       else if (theme === "long-break"){
        setMinute(times.longBreak > 1 ? times.longBreak : 0);
        setSecond(times.longBreak < 1 ? times.longBreak * 60 : 0)
        if(times.autoBreak) {
            start()
         }
      }
    }, [times, theme]);

    useEffect(()=>{
        if(second < 0){
            setSecond(59)
            setMinute(minute=>minute-1)
        }
        if(minute === 0 & second === 0){
            if(theme === 'pomodoro'){
                dispatch(change('short-break'))
                start()
            }else if(theme ==='short-break'){
                dispatch(change('long-break'))
                start()
            }else{
                dispatch(change('pomodoro'))
                start()
            }
        }
    },[second])

    return (
        <div>
            <CountTimer/>
            <div className="content">
                <div className="mini-content">
                    <div className="change-pomodoro">
                    <MainBtn color='caral' title='Pomodoro'/>
                    <MainBtn color='short-break' title='Short Break'/>
                    <MainBtn color='long-break' title='Long Break'/>
                    </div>
                    <div className="timer">{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</div>
                    <div className="next">
                        {/* <StartBtn onClick={() => start()}>{myinterval ? 'STOP' : 'START'}</StartBtn> */}
                    <button onClick={() => start()} className="start-btn">{myinterval ? 'STOP' : 'START'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;