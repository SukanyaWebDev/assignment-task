import React, { Component } from 'react';
import './index.css';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            taxExemption: false,
            referenceCode: '',
            donationAmount: ''
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, phone, taxExemption, referenceCode, donationAmount } = this.state;
        const formData = {
            fullName,
            email,
            phone,
            taxExemption,
            referenceCode,
            donationAmount
        };
        // Retrieve existing data from local storage or initialize an empty array
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        // Add new form data to the existing array
        const updatedData = [...existingData, formData];
        // Store the updated data in local storage
        localStorage.setItem('formData', JSON.stringify(updatedData));
        // Reset form state
        this.setState({
            fullName: '',
            email: '',
            phone: '',
            taxExemption: false,
            referenceCode: '',
            donationAmount: ''
        });
    };
    generateRandomCode = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }



    render() {
        const { fullName, email, phone, taxExemption, referenceCode, donationAmount } = this.state;
        const code = this.generateRandomCode(5)
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Personal Information</h1>
                    <div className="inputs-container">
                        <label htmlFor="nameInput">Full Name</label>
                        <input
                            type="search"
                            id="nameInput"
                            className="full-name-input"
                            name="fullName"
                            value={fullName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="email-phone-container">
                        <div className="inputs-container">
                            <label htmlFor="emailInput">Email Address</label>
                            <input
                                type="text"
                                id="emailInput"
                                className="mail-input"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="inputs-container">
                            <label htmlFor="phoneInput">Phone</label>
                            <input
                                type="text"
                                id="phoneInput"
                                className="phone-input"
                                name="phone"
                                value={phone}
                                onChange={this.handleChange}
                                placeholder="+91"
                            />
                        </div>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="referenceInput">Reference Code (if available)</label>
                        <label htmlFor="referenceInput"> if not use this  <span style={{color:"red"}}> {code}</span></label>
                        <input

                            type="text"
                            id="referenceInput"
                            name="referenceCode"
                            value={referenceCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="inputs-container">
                        <label htmlFor="amountInput">Donation Amount</label>
                        <input
                            type="text"
                            id="amountInput"
                            className="amount-input-container"
                            name="donationAmount"
                            value={donationAmount}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="btn-container">
                        <button className="submit-btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormPage;
