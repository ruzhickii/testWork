import React, {Component} from "react";

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input placeholder="SEARCH"/>
                <i className="fa fa-search"/>
            </div>
        )
    }
}

export default Search;