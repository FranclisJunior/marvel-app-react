import React, {Component} from 'react'
import { connect } from 'react-redux'
import './style.css'
import {bindActionCreators} from "redux";
import * as ListHeroesActions from "../../actions";

class Search extends Component {

    constructor(props) {
        super(props);
    }

    _searchHeroes = (value) => {
        this.props.actions.loadData({name: value});
    }


    render() {
        return (
            <div className="content">
                <input id="search-input" className="form-control search-input" placeholder="Search heroes by name"
                onChange={event => this._searchHeroes(event.target.value)}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        actions: bindActionCreators(ListHeroesActions, dispatch),
    }),
)(Search);
