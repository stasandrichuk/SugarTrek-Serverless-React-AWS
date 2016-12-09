import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import logo from '../images/sugartrek_logo.png';
import '../styles/index.css';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.aboutButtonTapped = this.aboutButtonTapped.bind(this);
        this.businessLoginTapped = this.businessLoginTapped.bind(this);
    }

    aboutButtonTapped(e) {
        console.log("about button tapped");
    }

    businessLoginTapped(e) {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <div className="div-right">
                    <FlatButton primary label="About" onTouchTap={this.aboutButtonTapped} />
                    <FlatButton primary label="Business Login" onTouchTap={this.businessLoginTapped} />
                </div>
                <div className="div-main">
                    <div className="div-logo"><img alt="sugartrek logo" src={logo} /></div>
                    <h2>SugarTrek Game</h2>
                  <div className="div-Game">
                  <iframe src="http://www.kunal-dixit.com/sugartrek-unity/index.html" width="1150" height="650" frameborder="0" scrolling="no"></iframe>
                  </div>
                </div>
            </div>
        );
    }
}

export default MainPage
