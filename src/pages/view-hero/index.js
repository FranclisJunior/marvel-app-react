import React, {Component} from "react";
import {CircleToBlockLoading} from "react-loadingg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'
import {Link} from "react-router-dom";

export default class ViewHero extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.actions.getHero(params.heroId)
    }

    render() {
        return (
            <div className="loading">
                {this.props.loading &&
                    <CircleToBlockLoading color={'red'}/>
                }

                {!this.props.loading && !this.props.hero &&
                    <div className='col-sm-12 col-lg-12'>
                        <h1 className='no-result'>Hero not found</h1>
                    </div>
                }

                {!this.props.loading && this.props.hero &&
                    <Row className='row view-hero'>
                        <Col md={4}>
                            <div className="img-event">
                                <img className="img-fluid"
                                     src={this.props.hero.thumbnail.path + '.' + this.props.hero.thumbnail.extension}/>
                                <Link to={'/'} className="d-block" >  Back to list</Link>
                            </div>
                        </Col>
                        <Col md={8}>
                            <h1>{this.props.hero.name}</h1>
                            {this.props.hero.description ?
                                (<p>{this.props.hero.description}</p>)
                                :
                                (<p>No description</p>)
                            }
                        </Col>
                    </Row>
                }
            </div>
        )
    }

}
