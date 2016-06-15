const React = require('react');
const PropTypes = React.PropTypes;
const transparentBg = require('../styles').transparentBg;


function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
};

const ConfirmBattle = props => (
  props.isLoading? <p>Loading</p> :
                   <p>Confirm Battle: {puke(props)}</p>
)

module.exports = ConfirmBattle;