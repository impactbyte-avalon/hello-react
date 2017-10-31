import React from "react"
import PropTypes from "prop-types"

import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: "",
      email: "",
      age: 0
    }
    this._handleChange = this._handleChange.bind(this)
    this._submitData = this._submitData.bind(this)
  }

  _handleChange(event) {
    const target = event.target
    const type = target.type
    const value = type === "checkbox" ? target.checked : target.value
    const name = target.name

    if (type === "number") {
      this.setState({
        [name]: parseInt(value)
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  _submitData(event) {
    event.preventDefault()
    this.props.onSubmitData(this.state)
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="inputId" sm={2}>
            Comment :
          </Label>
          <Col sm={10}>
            <Input
              type="string"
              name="id"
              id="inputId"
              placeholder="text"
              onChange={this._handleChange}
            />
          </Col>
        </FormGroup>

        <Button onClick={this._submitData}>Submit Data</Button>
      </Form>
    )
  }
}

SubmissionForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired
}

export default SubmissionForm
