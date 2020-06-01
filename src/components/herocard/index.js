import React from 'react';
import './style.css'


const Index = ({ id, name, thumbnail }) => (
    <div id={id} className="hero col-xs-12 col-md-3" key={id}>
        <div className="thumbnail card">
            <div className="img-event">
                <img className="group list-group-image img-fluid"
                     src={thumbnail} alt={thumbnail}/>
            </div>
            <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                    {name}
                </h4>
            </div>
            <div className="card-overflow">
                <h4>View Hero</h4>
            </div>
        </div>
    </div>
);

export default Index;
