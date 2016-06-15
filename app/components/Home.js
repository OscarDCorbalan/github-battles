const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const transparentBg = require('../styles').transparentBg


module.exports = class Home extends React.Component {
  render(){
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>GitHub Battle</h1>
        <p className="lead">bla bla</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    )
  }
}
