import React, { Component } from 'react';
import configData from './config.json';

class Contact extends Component {
    render() {
        return (<div className="o-grid">

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

        </div>)
    }
};

export default Contact;