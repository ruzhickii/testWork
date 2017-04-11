import React, {Component} from "react";

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {card} = this.props;
        let img = require('../../../static/images/img.jpg');
        return (

            <div className="mainCardBlock">
                <div className="cardImgBlock">
                    <img src={img} alt={card.img.alt}/>
                </div>
                <div className="cardContent">
                    {card.name}
                </div>
            </div>
        )
    }
}

export default Card;