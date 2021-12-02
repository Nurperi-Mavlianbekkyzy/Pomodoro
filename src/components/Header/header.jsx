import  './header.css'

import Icon from '../../Assets/Icons/icon-white.png'
import Graph from '../../Assets/Icons/Vector.png'
import { SettingBtn } from '../SettintBtn/settingBtn'
// import { Setting } from '../Setting/setting'

const Head = () => {
    return (
        <header className="container">
          <div className="inCont">
                <h1 className="pomo">
                    <a href="#">
                        <img src={Icon} className="iconPomo" />
                        Pomofocus
                    </a>
                </h1>
                <div className="allBtn">
                    <button className="btn">
                        <img src={Graph} className="img" />
                        <div className="textBtn">Report</div>
                    </button>
                {/* <Setting /> */}
                <SettingBtn />
             </div>
          </div>
        </header>
    )
}

export default Head;