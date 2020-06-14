import React from 'react';
import ReactDOM from 'react-dom';
import Container from "./Container";

ReactDOM.render(
    <>
        <div className="c-preloader  js-preloader">
            <div className="c-preloader__spinner  t-preloader__spinner"></div>
        </div>
        <Container />
    </>
    , document.getElementById('root'));