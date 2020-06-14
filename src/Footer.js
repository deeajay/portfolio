import React, { Component } from 'react';
import configData from './config.json';
import Contact from "./Contact"

class Footer extends Component {
    render() {
        return (
            <>
                <section className="o-section  t-section  o-section--footer">
                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">
                            <header className="o-section__header  t-section__header">
                                <div className="o-content">
                                    <h2 className="o-section__heading">
                                        Contact
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        Call me, maybe.
                                    </div>
                                </div>
                            </header>

                            <div className="o-section__content  t-section__content  ">
                                <div className="c-footer__contact">
                                    <Contact />
                                </div>

                                <hr className="c-footer__contact-divider" />

                                <div className="o-content">

                                    <div className="c-footer__bottom">
                                        <div className="c-footer__brand">

                                            <div className="c-brand">
                                                <h1 className="c-brand__title  t-title">
                                                    <span className="c-brand__sizer">
                                                        <span className="a-footer  c-brand__first-word  t-title__first-word">
                                                            {configData.firstName}
                                                        </span>
                                                        <span className="a-footer  c-brand__second-word  t-title__second-word">
                                                            {configData.lastName}
                                                        </span>
                                                    </span>
                                                </h1>
                                            </div>

                                        </div>

                                        <ul className="c-footer__social-buttons  c-social-buttons">
                                            {
                                                configData.social.map(function (innerData, index) {
                                                    return (
                                                        <li className="a-footer" key={index}>
                                                            <a href={innerData.path} target="_blank" className="c-social-button  t-social-button" rel="noopener noreferrer" >
                                                                <i className={innerData.icon}></i>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
            </>
        )
    }
};

export default Footer;