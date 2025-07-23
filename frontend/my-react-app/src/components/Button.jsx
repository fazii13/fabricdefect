import React, { useState } from 'react';
import axios from 'axios';
import '../css/Button.css';

const Button = ({ onClick, isStreaming }) => {
    const [backendResult, setBackendResult] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/run-backend-code/');
            setBackendResult(response.data.message);
            onClick(); // Toggle streaming state
        } catch (error) {
            console.error('Error executing backend code:', error);
            setBackendResult('Error executing backend code');
        }
    };

    return (
        <div className="button-container">
            <h1>Live Fabric <span>Inspection</span></h1>
            <button className="stream-button" onClick={handleClick}>
                {isStreaming ? 'Stop Streaming' : 'Start Streaming'}
            </button>
            <p>Backend Result: {backendResult}</p>
        </div>
    );
};

export default Button;
