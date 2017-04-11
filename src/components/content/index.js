import React, {Component} from "react";
import Card from '../card';
import * as cardProps from '../../cardProps';

class Content extends Component {
    render() {
        console.log('card is', cardProps);
        return (
            <section className="content">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="mainTitleTextBlock">
                                    <h1 className="titleTextBlock">What 10 Things Should You DO Every Day<br/> To Improve Your Life ?</h1>
                                </div>
                                <div className="textBlock">
                                    <p>Learning another language can keep your mind sharp. Music lessons increase<br/>
                                        intelligence. Challeging your beliefs strengthens your mind. Increasing<br/>
                                        will power just takes a little effort each day and it's more responsible for your<br/>
                                        success then IQ.
                                    </p>
                                </div>
                                <div className="mainListTextBlock">
                                    <span className="titleListTextBlock">Key features</span>
                                    <ul>
                                        <li>
                                            <span className="liText">It will make you happier.</span>
                                        </li>
                                        <li>
                                            <span className="liText">It will improve your relationships.</span>
                                        </li>
                                        <li>
                                            <span className="liText">It can make you a better person.</span>
                                        </li>
                                        <li>
                                            <span className="liText">It can make life better for everyone around you.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <div className="mainTitleCardsBlock">
                                    <span className="titleCardBlock">RECENT NEWS</span>
                                </div>
                            </div>
                            {cardProps.map((item, index) =>
                                <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                                    <Card card = {item} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="upMainBlock">
                        <a href="#">
                            <i className="fa fa-angle-up"/>
                            <span>top</span>
                        </a>
                    </div>
                </section>
            </section>
        );
    }
}

export default Content
