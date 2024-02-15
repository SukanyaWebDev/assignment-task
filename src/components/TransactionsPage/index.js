import { TiHomeOutline } from "react-icons/ti";
import './index.css'

const TransactionsPage = () => (
    <div className="transaction-container">
        <div className="trans-header"><h1>Transactions</h1>
        <ul className="list-of-con-trans">
            <li><TiHomeOutline /></li>
            <li> / General /</li>
            <li>/ Transactions</li>
            </ul>
        </div>
        <div className="disply-trans-containe"></div>

    </div>
)

export default TransactionsPage