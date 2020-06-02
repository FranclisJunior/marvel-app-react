import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as HeroActions from '../../actions/ListHeroes'
import './style.css'

class Search extends Component {

    constructor(props) {
        super(props);
    }

    _searchHeroes = (value) => {
        this.props.actions.listHeroes({name: value});
    }

    render() {
        return (
            <div className='content'>
                <input id='search-input' className='form-control search-input' placeholder='Search heroes by name'
                onChange={event => this._searchHeroes(event.target.value)}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        actions: bindActionCreators(HeroActions, dispatch),
    }),
)(Search);
