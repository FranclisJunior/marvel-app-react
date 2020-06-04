import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from "react-bootstrap/Button";

let HeroForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="control-label" htmlFor="name">First Name</label>
                <Field className="form-control" name="name" component="input" type="text" />
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="description">Description</label>
                <Field className="form-control" name="description" component="textarea" type="text" />
            </div>
            <Button variant="primary" type="submit" className="float-right">
                Save
            </Button>
        </form>
    )
}

HeroForm = reduxForm({
    form: 'hero'
})(HeroForm)

HeroForm = connect(
    state => ({
        initialValues: state.viewHero.hero
    })
)(HeroForm)

export default HeroForm;
