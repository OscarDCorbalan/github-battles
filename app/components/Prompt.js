const React = require('react');
const PropTypes = React.PropTypes;
const transparentBg = require('../styles').transparentBg;


const Prompt = props => (
  <div className="text-center jumbotron col-sm-6 col-sm-offset-3" style={transparentBg}>
    <h1>{props.header}</h1>
    <div className="col-sm-12">
      <form onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <input className="form-control"
                 placeholder="GitHub Username"
                 onChange={props.onUpdateUser}
                 value={props.username}
                 type="text"/>
        </div>
        <div className="form-group col-sm-4 coo-sm-offset-4">
          <button className="form-control btn-success"
                  type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>
)

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
};


module.exports = Prompt;