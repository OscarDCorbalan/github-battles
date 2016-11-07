/*var USER_DATA = {
  name: 'Oscar D.Corbalan',
  username: 'OscarDCorbalan',
  image: 'https://avatars3.githubusercontent.com/u/8439728?v=3&s=460'
}
*/

const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);

/*
var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var Link = React.createClass({
  changeUrl: function(){
    window.location.replace(this.props.href);
  },
  render: function(){
    return (
      <span onClick={this.changeUrl}
            style={{color: 'blue', cursor: 'pointer'}}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
});


var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);

*/
