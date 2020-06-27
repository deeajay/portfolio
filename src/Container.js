import React, { Component } from 'react';
import configData from './config.json';
import Contact from './Contact';

class Container extends Component {
    render() {
        return (
            <div className="o-section o-section--header  t-section  t-section--header">
                <div className="c-header">

                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">

                            <header className="o-section__header  c-header__header  t-section__header">
                                <div className="c-header__inner-header">

                                    <div className="c-header__avatar">
                                        <div className="a-header  c-avatar">
                                            <img className="c-avatar__img" src={configData.profilePic} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </header>

                            <div className="o-section__content  c-header__content  t-section__content">
                                <div className="c-header__inner-content">

                                    <div className="c-header__top">

                                        <div className="c-header__brand">

                                            <div className="c-brand">
                                                <h1 className="c-brand__title  t-title">
                                                    <span className="c-brand__sizer">
                                                        <span className="a-header  c-brand__first-word  t-title__first-word">
                                                            {configData.firstName}
                                                        </span>
                                                        <span className="a-header  c-brand__second-word  t-title__second-word">
                                                            {configData.lastName}
                                                        </span>
                                                    </span>
                                                </h1>
                                                <h2 className="a-header  c-brand__sub-title  t-sub-title">
                                                    <span className="c-brand__sizer">
                                                        {configData.tagLine}
                                                    </span>
                                                </h2>
                                            </div>

                                        </div>

                                        <ul className="c-header__social-buttons  c-social-buttons">
                                            {
                                                configData.social.map(function (innerData, index) {
                                                    return (
                                                        <li className="a-header" key={index}>
                                                            <a href={innerData.path} target="_blank" className="c-social-button  t-social-button" rel="noopener noreferrer" >
                                                                <i className={innerData.icon}></i>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </div>


                                    {configData.introContent ?
                                        <div className="c-header__contact c-intro" style={{ position: "relative" }}>
                                            <hr className="a-header  c-header__contact-divider" />
                                            {configData.introContent.map(function (contentData) {
                                                return <p>{contentData}</p>
                                            })}
                                        </div>
                                        : null}

                                    <div className="c-header__contact" style={{ position: "relative" }}>

                                        <hr className="a-header  c-header__contact-divider" />
                                        <Contact />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default Container;