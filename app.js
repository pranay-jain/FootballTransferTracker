var React = require('react'),
	ReactDOM = require('react-dom');

var Interface = require('./react-components/interface.react');

var initialTweets = JSON.parse(document.getElementById('initialTweets').innerHTML);
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var team = getQueryVariable("team");


ReactDOM.render(
	<Interface team={team} tweets={initialTweets} />,
	document.getElementById('content')
);