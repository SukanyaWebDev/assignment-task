import './index.css'
import { BiGridAlt } from "react-icons/bi";
import { LuAirplay } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { SlList } from "react-icons/sl";
import { FaArrowTurnDown } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

const MenuPage = () => (
    <div className='menu-con'>
        <div className='logo-container'>
            <button type="button" className='logo-btn'>Logo</button>
            <BiGridAlt className="logo-icon" />
        </div>
        <div className='general-das-con'>
            <p className='dash-para'><span>General</span> <br />
                Dasboards
            </p>
        </div>
        <div className='dash-conta'>
            <Link to="/">
                <LuAirplay className="dash-image" />
                <p className='dasboard-text'>Dasboard</p>

            </Link>
        </div>

        <ul className='unorder-container'>
            <li>
                <div className='list-container'>
                    <Link to="/transactions">
                        <SlList className="dash-image" />
                        <p>Transactions</p></Link>

                </div>
            </li>
            <li>
                <div className='list-container'>
                    <Link to="/donationpage">
                        <FaArrowTurnDown className="dash-image" />
                        <p>Start Here</p>
                    </Link>

                </div>
            </li>
            <li>
                <div className='list-container'>
                    <Link to="/faq">
                        <CiCircleQuestion className="dash-image" />
                        <p>FAQ</p>
                    </Link>

                </div>
            </li>
            <li>
                <div className='list-container'>
                    <Link to="/learningmodules">
                        <IoMdBook className="dash-image" />
                        <p>Learning Modules</p>
                    </Link>

                </div>
            </li>
            <li>
                <div className='list-container'>
                    <Link to="/rewards">
                        <IoStarOutline className="dash-image" />
                        <p>Rewards</p>

                    </Link>

                </div>
            </li>
            <li>
                <div className='list-container'>
                    <Link to="/feedback">
                        <MdOutlineFeedback className="dash-image" />
                        <p>Feedback</p>
                    </Link>

                </div>
            </li>
        </ul>
    </div>
)

export default MenuPage