import React, { Component } from 'react';
import MenuPage from '../MenuPage';
import './index.css';

class FAQPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqItems: [
                {
                    question: 'How can I donate to a cause?',
                    answer:
                        'To donate to a cause, simply click on the "Donate Now" button on the cause\'s page and follow the instructions to complete your donation.'
                },
                {
                    question: 'Is my donation tax deductible?',
                    answer:
                        'In most cases, donations made to registered non-profit organizations are tax deductible. However, it is recommended to consult with a tax advisor for specific information about your donation.'
                },
                {
                    question: 'How do I know my donation is secure?',
                    answer:
                        'We take the security of your donation seriously. Our platform uses industry-standard encryption to protect your payment information.'
                }
            ],
            activeItemIndex: -1
        };
    }

    toggleItem = (index) => {
        this.setState((prevState) => ({
            activeItemIndex: prevState.activeItemIndex === index ? -1 : index
        }));
    };

    render() {
        const { faqItems, activeItemIndex } = this.state;

        return (
            <div className="faq-page">
                <MenuPage />
                <div>
                    <h1>Frequently Asked Questions</h1>
                    <div className="faq-list">
                        {faqItems.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className={`question ${activeItemIndex === index ? 'active' : ''}`}
                                    onClick={() => this.toggleItem(index)}
                                >
                                    {item.question}
                                </div>
                                {activeItemIndex === index && (
                                    <div className="answer">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        );
    }
}

export default FAQPage;
