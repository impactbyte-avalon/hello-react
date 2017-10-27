import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import avatar from "./user.png"
import Form from "./Form"
import { Container, Row, Col, Button } from "reactstrap"
import Person from "./Person"

// class App extends Component {
//   render() {
//     return (
//
//     );
//   }
// }


//       )
//    }
// }
//

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      showControls: false
    }
    this._toggleControls = this._toggleControls.bind(this)
    this._handleSubmitData = this._handleSubmitData.bind(this)
  }

  async componentWillMount() {
    const res = await fetch("http://localhost:3333")
    const data = await res.json()
    this.setState({ people: data })
    console.log(this.state)
  }

  _toggleControls() {
    this.setState(state => ({
      showControls: !state.showControls
    }))
  }

  _handleSubmitData(data) {
    console.log(data)
    this.setState(prevState => ({
      people: prevState.people.concat([data])
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo1" alt="logo" />
          <h1 className="App-title">Welcome to Hotel Habbo</h1>

        </header>

          <div className="Showcase">

            <div className="wrapper">
              <p className="App-intro">
              To get started, Please login fisrt.
              </p>
                <div id="my_canvas" width="1320px" height="700px"><img src={avatar} ></img>
                  <b>

                      <Row>
                        <Col className="m-1">

                          <Form onSubmitData={this._handleSubmitData} />
                        </Col>
                      </Row>

                  </b>
                </div>
                <div>

                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
