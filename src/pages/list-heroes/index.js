import React, {Component} from 'react'
import HeroCard from "../../components/herocard/index";
import {CircleToBlockLoading} from 'react-loadingg'
import './style.css'

export default class ListHeroes extends Component {

    constructor(props) {
        super(props);
        props.actions.loadData();
    }

    render() {
        return (
            <div className="content">
                <div className="heroes row view-group">
                    {this.props.loading &&
                        <div className="loading">
                            <CircleToBlockLoading color={'red'} />
                        </div>
                    }

                    {!this.props.loading && !this.props.data.length &&
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="no-result">No hero found with this name</h1>
                        </div>
                    }

                    {!this.props.loading && this.props.data &&
                        this.props.data.map(item =>
                            <HeroCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
