import React, { Component } from 'react';
import configData from './config.json';

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
                    actualContent = innerData.content.map(function (contentData, index) {
                        return (
                            <div className="c-timeline__item" key={`year_${contentData.year}`}>
                                <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                <div className="o-content">
                                    <div className="o-grid">
                                        <div className="o-grid__col-md-12">
                                            {contentData.year ? <div className="c-work__timeframe">{contentData.year}</div> : null}
                                            {contentData.name ? <h3 className="c-work__heading">{contentData.name}</h3> : null}
                                            {contentData.role ? <h4 className="c-work__title">{contentData.role}</h4> : null}
                                            {contentData.location ? <div className="c-work__location">{contentData.location}</div> : null}
                                        </div>
                                        {/* {contentData.description ? <div className="o-grid__col-md-7">
                                            {contentData.description.map(function(contentDescription){
                                                return <p>{contentDescription}</p>
                                            })}
                                            </div> : null} */}
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