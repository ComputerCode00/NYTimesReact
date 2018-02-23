var React = require('react');

var main = require('../components/main');
var search = require('../components/search.js');
// var Saved = require('../components/Saved');


var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;


module.exports = (
	<Route path="/" component={Main}>
		<Route path="/search" component={Search} />
        {/* <Route path="/saved" component={Saved} /> */}
        
		<IndexRoute component={Search} />
	</Route>
);