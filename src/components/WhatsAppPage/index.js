import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import './index.css'


const WhatsAppPage = () => (
    <div>
        <div className='header-container'>
            <div className='whats-app-logo'>
            <FaWhatsapp  className="whats-icon"/> 
                <p>WhatsApp</p>
            </div>
            <nav>
                <ul className='list-of-features'>
                    <li>features</li>
                    <li>Privacy</li>
                    <li>Help Center</li>
                    <li>Blog</li>
                    <li>For Business</li>
                    <li>Whatsapp web</li>
                    <li>Download</li>
                </ul>
            </nav>
            <div>
                <button type = "button" className="down-btn">
                Download
                <FaDownload /></button>
            </div>
            <hr/>
          
        </div>
        <div>
                <h1>Send the following on WhatsApp</h1>
                <button type=  "button" className="continue-btn">Continue to Chat</button>
                <p>Iam Voulunteering NayePankh Foundation.</p>
            </div>
            <div>
                <p>Don't have a WhatsApp yet?</p>
                <a>Download</a>

            </div>

    </div>
)

export default WhatsAppPage