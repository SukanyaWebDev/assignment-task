import { TiHomeOutline } from "react-icons/ti";
import { Component } from 'react'
import MenuPage from "../MenuPage";
import './index.css'

class TransactionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: []
        };
    }

    componentDidMount() {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            this.setState({ formData: storedFormData });
        }
    }

    render() {
        const { formData } = this.state;
        return (
            <div className="transaction-container">
                <div>
                    <MenuPage />
                </div>
                <div>
                    <div className="trans-header"><h1>Transactions</h1>
                        <ul className="list-of-con-trans">
                            <li><TiHomeOutline /> /</li>
                            <li>General/</li>
                            <li>Transactions</li>
                        </ul>
                    </div>

                    <div className="disply-trans-containe">
                        <hr />
                        <ul className="transctions-list">

                            <li>Name</li>
                            <li>Email</li>
                            <li>Phone</li>
                            <li>Tax Exemption</li>
                            <li>Reference Code</li>
                            <li>Donation Amount</li>
                        </ul>
                        <hr />
                        <div className="form-data-display">

                        {formData.map((data, index) => (
                            <div key={index} className="form-data-card">
                                <h3>Name: {data.fullName}</h3>
                                <p>Email: {data.email}</p>
                                <p>Phone: {data.phone}</p>
                                <p>Tax Exemption: {data.taxExemption ? 'Yes' : 'No'}</p>
                                <p>Reference Code: {data.referenceCode}</p>
                                <p>Donation Amount: ${data.donationAmount}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }


}

export default TransactionsPage