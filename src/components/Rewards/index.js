// Rewards.js

import React from 'react';

import MenuPage from '../MenuPage';
import './index.css';

const Rewards = () => {

    const rewardsData = [
        { id: 1, name: 'Free Coffee', description: 'Get a free coffee at our cafe.', points: 100 },
        { id: 2, name: 'Movie Ticket', description: 'Redeem for a movie ticket at any theater.', points: 200 },
        { id: 3, name: 'Amazon Gift Card', description: 'Get a $10 Amazon gift card.', points: 500 },
        { id: 4, name: 'Dinner Voucher', description: 'Enjoy a free dinner at our partner restaurant.', points: 1000 }
    ];

    return (
        <div className="rewards-container">
            <div><MenuPage /></div>
            <div>
                <h2>Rewards Catalog</h2>
                <div className="rewards-list">
                    {rewardsData.map(reward => (
                        <div key={reward.id} className="reward-item">
                            <h3>{reward.name}</h3>
                            <p>{reward.description}</p>
                            <p>Points: {reward.points}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Rewards;
