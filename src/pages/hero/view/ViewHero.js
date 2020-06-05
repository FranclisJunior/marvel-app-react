import React, {Component} from "react";
import {CircleToBlockLoading} from "react-loadingg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import * as Icon from 'react-feather';
import Modal from "react-bootstrap/Modal"
import HeroForm from "../../../components/hero/form/HeroForm"
import './style.css'

export default class ViewHero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.actions.getHero(params.heroId)
    }

    submit = (hero) => {
        this.props.actions.saveHero(hero);
        this.setState({showEdit: false});
    }

    render() {
        const handleClose = () => this.setState({showEdit: false});
        const handleShow = () => this.setState({showEdit: true});

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
                        <Col md={7}>
                            <h1>{this.props.hero.name}</h1>
                            {this.props.hero.description ?
                                (<p>{this.props.hero.description}</p>)
                                :
                                (<p>No description</p>)
                            }
                        </Col>

                        <Col md={1}>
                            <Icon.Edit2 color="white" onClick={handleShow}/>
                        </Col>
                        <Modal show={this.state.showEdit}
                               onHide={handleClose}
                               size="md"
                               aria-labelledby="contained-modal-title-vcenter"
                               centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Hero</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <HeroForm onSubmit={this.submit}/>
                            </Modal.Body>
                        </Modal>
                    </Row>
                }
            </div>
        )
    }

}
