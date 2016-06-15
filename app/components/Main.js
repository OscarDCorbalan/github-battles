const React = require('react');

module.exports = class Main extends React.Component {
  render(){
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}; 