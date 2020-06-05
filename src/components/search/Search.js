import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as HeroActions from '../../actions/HeroActions'
import './style.css'

export class Search extends Component {

    constructor(props) {
        super(props);
    }

    _searchHeroes = (value) => {
        if (this.props.actions) {
            this.props.actions.listHeroes({name: value});
        }
    }

    render() {
        return (
            <div className='content'>
                <input data-testid='search-input' className='form-control search-input' placeholder='Search heroes by name'
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
