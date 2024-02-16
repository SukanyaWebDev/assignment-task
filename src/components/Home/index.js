import { Component } from "react"
import MenuPage from "../MenuPage"
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import "./index.css"


class Home extends Component {

    render() {
        const userName = localStorage.getItem("userName")

        return (
            <div className="main-home-container">
                <div className="menus-container">
                    <MenuPage />
                </div>
                <div className="dasboard-container">
                    <div className="user-container">
                        <h1>{userName}</h1>
                        <p>Fundariser</p>

                    </div>
                    <div className="bottom-das-container">
                        <div className="head-container">
                            <h1 className="dashboard">Dashboard</h1>
                            <ul className="header-container">
                                <li><AiOutlineHome className="home-image" /></li>
                                <li>/ General</li>
                                <li> / Dashboard</li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <h1>Hello {userName}</h1>
                            <p>Welcome to Our Donation Platform</p>
                        </div>

                        <div className="goal-achieved-conat">
                            <div className="goal-container"><h1>Goal Achived</h1></div>
                            <div className="share-container">
                                <Link to="/share">
                                    <button type="button" className="whats-button"><MdIosShare className="icons" />Share on whatspp</button>
                                </Link>


                            </div>
                            <div className="level-achieved-container">
                                <h1>Level Achieved:<span>Star</span></h1>
                                <hr />
                                <div className="buttons-container">
                                    <button type="button" className="rewards-btn">
                                        <FaRegStar className="icons" />
                                        Rewards
                                    </button>
                                    <button type="button" className="copy-donation-btn">
                                        <LuCopy className="icons" />
                                        Copy Donation Link
                                    </button>
                                </div>
                                <p>Unlock <span>Ninja Level</span>at 5000</p>
                                <p><span>Time Left:</span> Campaign expired</p>
                                <button type="button" className="extend-btn">Extend Now</button>
                                <hr />
                                <p><span>Reference Code : </span>pra&432</p>
                                <Link to="/donationpage">
                                    <button className="start-here-btn" type="button">Start Here</button>
                                </Link>
                            </div>

                        </div>



                    </div>

                </div>
            </div >
        )
    }
}

export default Home