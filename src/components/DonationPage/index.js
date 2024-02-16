import React, { Component } from 'react';
import FormPage from '../FormPage';
import MenuPage from '../MenuPage';
import './index.css'

class DonationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    }

    handleOptionClick = () => {
        this.setState({ showForm: true });
    };

    render() {
        const { showForm } = this.state;

        return (
            <div className='mainPage'>
                <MenuPage />
                <div className="donation-page">
                    {showForm ? (
                        <div className="donation-form">
                            <FormPage />
                        </div>
                    ) : (
                        <div className='cardsDiv'>
                            <div className="donation-option" onClick={this.handleOptionClick}>
                                <h2>30000</h2>
                                <p>Thank you for your generosity!</p>
                            </div>
                            <div className="donation-option" onClick={this.handleOptionClick}>
                                <h2>5000</h2>
                                <p>Your contribution means a lot to us!</p>
                            </div>
                            <div className="donation-option" onClick={this.handleOptionClick}>
                                <h2>6000</h2>
                                <p>We appreciate your support!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}

export default DonationPage;
