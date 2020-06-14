import React, { Component } from 'react';
import configData from './config.json';

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

                                    <div className="c-header__contact">

                                        <hr className="a-header  c-header__contact-divider" />

                                        <div className="o-grid">

                                            {
                                                configData.details.map(function (innerData, index) {
                                                    let innerContent = <><h4>{innerData.name}</h4>
                                                        <p>
                                                            {innerData.type === "link" ? <span className="t-link-container__item--blended">{innerData.value}</span> : innerData.value}
                                                        </p></>;
                                                    return (<div className="o-grid__col-md-3  o-grid__col-sm-6" key={index}>
                                                        <div className="o-content">
                                                            <div className="o-content__body">
                                                                {innerData.type === "link" ? <a href={innerData.value} target="_blank" className="t-link-container" rel="noopener noreferrer" >{innerContent}</a> : innerContent}
                                                            </div>
                                                        </div>
                                                    </div>)
                                                })
                                            }

                                        </div>
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