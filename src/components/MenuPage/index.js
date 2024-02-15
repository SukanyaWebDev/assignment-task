import './index.css'
import { BiGridAlt } from "react-icons/bi";
import { LuAirplay } from "react-icons/lu";
import { SlList } from "react-icons/sl";
import { FaArrowTurnDown } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

const MenuPage = () => (
    <div className='menu-con'>
        <div className='logo-container'>
        <button type = "button" className='logo-btn'>Logo</button>
        <BiGridAlt className = "logo-icon"/>
        </div>
        <div className='general-das-con'>
            <p className='dash-para'><span>General</span> <br/>
             Dasboards
            </p>
        </div>
        <div className='dash-conta'>
            <LuAirplay className = "dash-image" />
            <p className='dasboard-text'>Dasboard</p>
        </div>
        
        <ul className='unorder-container'>
            <li>
                <div className='list-container'>
                    <SlList className = "dash-image" />
                    <p>Transactions</p>
                </div>
            </li>
            <li>
                <div className='list-container'>
                    <FaArrowTurnDown className = "dash-image"/>
                    <p>Start Here</p>
                </div>
            </li>
            <li>
                <div className='list-container'>
                <CiCircleQuestion className = "dash-image"/>
                    <p>FAQ</p>
                </div>
            </li>
            <li>
                <div className='list-container'>
                    <IoMdBook  className = "dash-image" />
                    <p>Learning Modules</p>
                </div>
            </li>
            <li>
                <div className='list-container'>
                <IoStarOutline  className = "dash-image" />
                    <p>Rewards</p>
                </div>
            </li>
            <li>
                <div className='list-container'>
                    <MdOutlineFeedback className = "dash-image" />
                    <p>Feedback</p>
                </div>
            </li>
        </ul>
    </div>
)

export default MenuPage