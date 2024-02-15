import { TiHomeOutline } from "react-icons/ti";
import './index.css'

const TransactionsPage = () => (
    <div className="transaction-container">
        <div className="trans-header"><h1>Transactions</h1>
            <ul className="list-of-con-trans">
                <li><TiHomeOutline /> /</li>
                <li>General/</li>
                <li>Transactions</li>
            </ul>
        </div>
        
        <div className="disply-trans-containe">
        <hr/>
            <ul className="transctions-list">
                <li>id</li>
                <li>Name</li>
                <li>Amount</li>
                <li>Transaction id</li>
                <li>Date</li>
                <li>Pancard</li>
            </ul>
            <hr/>
        </div>

    </div>
)

export default TransactionsPage