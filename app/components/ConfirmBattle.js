const React = require('react');
const PropTypes = React.PropTypes;
const transparentBg = require('../styles').transparentBg;


const ConfirmBattle = props => (
  props.isLoading? <p>Loading</p> :
                   <p>Confirm Battle</p>
)

module.exports = ConfirmBattle;