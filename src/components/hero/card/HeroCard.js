import React from 'react';
import {Link} from "react-router-dom";
import './style.css'


const HeroCard = ({ id, name, thumbnail }) => (
    <div id={id} className="hero col-xs-12 col-md-3" key={id}>
        <Link to={`/hero/${id}`}>
            <div className="thumbnail card">
                <div className="img-event">
                    <img data-testid="thumbnail" className="group list-group-image img-fluid"
                         src={thumbnail} alt={thumbnail}/>
                </div>
                <div className="caption card-body">
                    <h4 data-testid="name" className="group card-title inner list-group-item-heading">
                        {name}
                    </h4>
                </div>
                <div className="card-overflow">
                    <h4>View Hero</h4>
                </div>
            </div>
        </Link>
    </div>
);

export default HeroCard;
