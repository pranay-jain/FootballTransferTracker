var React = require('react'),
	Header = require('./header.react'),
	Layout = require('./layout.react');

module.exports = React.createClass({
	addTweet: function(tweet){

    var updated = this.state.tweets;

    var count = this.state.count + 1;

    // Add tweet to the beginning of the tweets array
    updated.unshift(tweet);

    this.setState({tweets: updated, count: count});

  },

  getInitialState: function(props){

    props = props || this.props;

    return {
      tweets: props.tweets,
      count: 0
    };

  },

  componentWillReceiveProps: function(newProps){
    this.setState(this.getInitialState(newProps));
  },

  componentDidMount: function(){
    // Preserve self reference
    var self = this;

    var socket = io();

    socket.on('tweet', function (data) {
      var string = data.text.toLowerCase();
      var substr = self.props.team.toLowerCase();
      if(string.search(substr) >= 0 && data.followers >= 1000) {
        data.active = true;
        self.addTweet(data);
      }
        
    });

  },

  render: function () {
		return (
			<div className="content">
				<Header />
				<Layout team={this.props.team} tweets={this.state.tweets} />
			</div>
		)
	}
});

