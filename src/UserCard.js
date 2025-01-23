import React, { useContext, useEffect } from 'react';
import { userStatusContext } from './userContextStatus';

function UserCard(props) {
    const { userStatuses, toggleUserStatus } = useContext(userStatusContext);

    const isOnline = userStatuses[props.name];

    useEffect(() => {
        console.log(`User status updated: ${userStatuses[props.name]}`);

        const timer = setInterval(() => {
            if(Math.random() > 0.5)
            toggleUserStatus(props.name);
        }, 2000);

        return () => clearInterval(timer);
    }, [props.name, toggleUserStatus]);

    const buttonStyle = {
        backgroundColor: isOnline ? 'green' : 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={cardStyle}>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
            <button style={buttonStyle} onClick={() => toggleUserStatus(props.name)}>
                {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
        </div>
    );
}

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '80px',
    padding: '10px',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
};

export default UserCard;
