const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');


module.exports = class Main extends React.Component {
  render(){
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup transitionName="appear"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}; 