import React from 'react'
import { useState } from 'react'
import Config from '../../Assets/Icons/set.png'
import { Setting } from '../Setting/setting'
import './settingBtn.css'


export const SettingBtn = () => {
	const [showModal, setShowModal] = useState(false)
	const handleClick = (value) => {
		setShowModal(value)
	}
	return (
		<div>
			<button onClick={handleClick} className='btn'>
				<img src={Config} className='img' />
				<div className='textBtn'>Setting</div>
			</button>
			<Setting show={showModal} onClose={handleClick} />
		</div>
	)
}
