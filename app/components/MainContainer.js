const React = require('react');
const styles = require('../styles');


function MainContainer(props) {
  return (
    <div className="text-center jumbotron col-sm-12" style={styles.transparentBg}>
      {props.children}
    </div>
  );
}


module.exports = MainContainer;