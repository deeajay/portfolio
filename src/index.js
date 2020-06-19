import React from 'react';
import ReactDOM from 'react-dom';
import Container from "./Container";
import Footer from "./Footer";
import Sections from "./Sections";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <>
        <Container />
        <Sections />
        <Footer />
    </>
    , document.getElementById('root'));

serviceWorker.register();