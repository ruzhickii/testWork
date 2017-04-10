import React, {Component} from "react";
import {Header, Content} from '../../components'


class Application extends Component {

    render() {
        return (
            <section className="animated fadeIn">
                <Header  {...this.props}/>
                <Content {...this.props}/>
            </section>

        )
    }

}

export default Application
