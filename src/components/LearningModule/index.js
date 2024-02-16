// LearningModules.js

import React from 'react';
import './index.css';
import MenuPage from '../MenuPage';

const LearningModules = () => {
    // Dummy learning modules data
    const userName=localStorage.getItem("userName")
    const modulesData = [
        { id: 1, title: 'Module 1: Introduction to React', description: 'Learn the basics of React.js.', duration: '2 hours' },
        { id: 2, title: 'Module 2: State and Props', description: 'Understand how to manage state and props in React.', duration: '3 hours' },
        { id: 3, title: 'Module 3: Component Lifecycle', description: 'Learn about the lifecycle methods of React components.', duration: '1.5 hours' }
    ];

    return (
        <div className="learning-modules">
            <div>
                <MenuPage />
            </div>
            <div>
                <div className="user-container">
                    <h1>{userName}</h1>
                    <p>Fundariser</p>

                </div>
                <h2>Learning Modules</h2>
                <div className="modules-list">
                    {modulesData.map(module => (
                        <div key={module.id} className="module-item">
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>
                            <p>Duration: {module.duration}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default LearningModules;
