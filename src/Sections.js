import React, { Component } from 'react';
import configData from './config.json';
import "./style.css";

const imgCSS = {
    float: "right",
    width: "70px",
    height: "70px",
    borderRadius: "100%",
    padding: "10px"
}

class Sections extends Component {
    render() {

        let SectionContent = configData.sections.map(function (innerData, index) {

            if (innerData.display === false) {
                return null;
            }

            let actualContent = null;

            switch (innerData.type) {
                case "numbered":
                    actualContent = innerData.content.map(function (contentData, index) {
                        return (
                            <div className="o-grid__col-sm-6">
                                <div className="o-content">
                                    <div className="o-media  o-media--block">
                                        {
                                            contentData.number ?
                                                <div className="o-media__figure">
                                                    <div className="c-number  t-primary-color">
                                                        {contentData.number}{contentData.percentage ? <small>%</small> : null}
                                                    </div>
                                                </div> : null
                                        }
                                        <div className="o-media__body  o-content__body">
                                            <h3>{contentData.header}</h3>
                                            {contentData.content ? <p>{contentData.content}</p> : null}
                                        </div>
                                    </div>
                                    {
                                        contentData.percentage ?
                                            <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                                                <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg" data-percent={contentData.number * 1}></div>
                                            </div> : null
                                    }
                                </div>
                            </div>
                        )
                    })
                    actualContent = <div className="o-section__content  t-section__content  ">
                        <div className="o-grid">
                            {actualContent}
                        </div>
                    </div>;
                    break;
                case "timeline":
                    actualContent = Object.keys(innerData.content).map(function (contentKey, index) {
                        let contentData = innerData.content[contentKey];
                        return (
                            <div className="c-timeline__item" key={`year_${contentData.year}`} id={contentKey ? contentKey : `year_${contentData.year}`}>
                                <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                <div className="o-content">
                                    <div className="o-grid">
                                        <div className="o-grid__col-md-12">
                                            {contentData.logo ? <img src={contentData.logo} alt="" style={{ ...imgCSS, backgroundColor: contentData.backgroundColor ? contentData.backgroundColor : "white"    }} /> : null}
                                            {contentData.year ? <div className="c-work__timeframe">{contentData.year}</div> : null}
                                            {contentData.name ? <h3 className="c-work__heading">{contentData.name}</h3> : null}
                                            {contentData.role ? <h4 className="c-work__title">{contentData.role}</h4> : null}
                                            {contentData.location ? <div className="c-work__location">{contentData.location}</div> : null}
                                            {contentData.description ? <p>{contentData.description}</p> : null}
                                            {contentData.moreButton ? <button className="btn btn-primary">{`Details`}</button> : null}
                                        </div>
                                        {contentData.detailedDescription ? <div className="o-grid__col-md-12">
                                            <h4 className="c-work__subheading">Experience Details</h4>
                                            <ul className="c-work__details">
                                                {contentData.detailedDescription.map(function (contentDescription, index) {
                                                    return <li key={index}>{contentDescription}</li>
                                                })}
                                            </ul>
                                        </div> : null}
                                    </div>
                                </div>
                            </div>)
                    });
                    actualContent = <div className="o-section__content t-section__content">
                        <div className="o-content">
                            <div class="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
                                <div class="c-timeline__end  t-border-color"></div>
                                {actualContent}
                            </div>
                        </div>
                    </div>
                    break;
                case "para":
                    actualContent = innerData.content.map(function (contentData, index) {
                        return (<p>{contentData.content}</p>)
                    });
                    actualContent = <div className="o-section__content t-section__content">
                        <div className="o-content">
                            <div className="c-intro">
                                <div className="o-content__body">
                                    {actualContent}
                                </div>
                            </div>
                        </div>
                    </div>
                    break;
                default:
                    actualContent = "";
                    break;
            }

            return (
                <section className="o-section t-section" key={index}>
                    <div className="o-section__header-bg  t-section__header"></div>
                    <div className="o-section__content-bg  t-section__content"></div>

                    <div className="o-container">
                        <div className="o-section__container">

                            <header className="o-section__header  t-section__header">
                                <div className="o-content">
                                    <h2 className="o-section__heading">
                                        {innerData.header.name}
                                    </h2>
                                    <div className="o-content__body  o-section__description">
                                        {innerData.header.tag}
                                    </div>
                                </div>
                            </header>

                            {actualContent}

                        </div>
                    </div>

                </section>
            )
        });

        return (
            <>
                {SectionContent}
            </>
        );
    }

}

export default Sections;