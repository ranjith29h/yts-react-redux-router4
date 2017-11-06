import React from 'react';

import loader from './loader.svg';

import './loading.css';

const Loading = () => {
    return (
        <div className="loader-container">
        <img src={loader} className="img-responsive loader" alt="loading" />
        </div>
    );
}

export default Loading;