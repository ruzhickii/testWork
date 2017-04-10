import '../assets'

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Application} from './containers'

class Root extends Component {
    render() {
        return (
            <Application />
        )
    }
}

render(<Root/>, document.getElementById('app'));