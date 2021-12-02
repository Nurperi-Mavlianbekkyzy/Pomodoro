import React from 'react';
import './infoPomo.css';

const Block = () => {
    return (
        <>
            <div>
                <h1 class="heroimage__title">
                    An online Pomodoro Timer to boost your productivity
                </h1>
                <h4 class="h41">What is Pomofocus?</h4>
                <hr class="hr1"/>
                <p class="p1">Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to
                     help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro
                      Technique which is a time management method developed by Francesco Cirillo.</p>
                <h4 class="h42">What is Pomodoro Technique?</h4>
                <hr class="hr2"/>
                <p class="p2">The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses
                     a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval 
                     is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a 
                     university student. - Wikipedia</p>
                <h4 class="h43">How to use the Pomodoro Timer?</h4>
                <hr class="hr3"></hr>
                <ol class="p3">
                    <li><b>Add tasks</b> to work on today</li>
                    <li><b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks</li>
                    <li><b>Select a task</b> to work on</li>
                    <li><b>Start timer </b>and focus on the task for 25 minutes</li>
                    <li><b>Take a break</b> for 5 minutes when the alarm ring</li>
                    <li><b>Add tasks</b> to work on today</li>
                </ol>
                <h4 class="h44">Features</h4>
                <hr class="hr4"></hr>
                <ul class="p4">
                    <li><b>Responsive design</b> <i>that works with desktop and mobile</i></li>
                    <li><b>Color transition</b> <i>to switch moods between work time and rest time</i></li>
                    <li><b>Audio notification</b> <i>at the end of a timer period</i></li>
                    <li><b>Customizable timer</b> <i>intervals to suit your preference</i></li>
                </ul>
                <h4 class="h45">Download App</h4>
                <hr class="hr5"/>
                <ul class="p5">
                    <li>For macOS<i> (zip file)</i></li>
                    <li>For Windows<i> (zip file)</i></li>
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default Block;
