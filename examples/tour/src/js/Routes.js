// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var TourLogin = require('./TourLogin');
var TBD = require('grommet/components/TBD');
var IndexActivity = require('grommet/index/components/Activity');
var IndexDashboardEdit = require('grommet/index/components/DashboardEdit');
var IndexDashboardPanelAdd = require('grommet/index/components/DashboardPanelAdd');
var IndexDashboardPanelEdit = require('grommet/index/components/DashboardPanelEdit');
var Tour = require('./Tour');
var TourDashboard = require('./TourDashboard');

var rootPath = "/"; // "/tour/";

var routes = (
  <Route name="tour" path={rootPath} handler={Tour}>
    <Route name="login" handler={TourLogin}/>
    <Route name="tbd" handler={TBD}/>
    <Route name="settings" handler={TBD}/>
    <Route name="activity" handler={IndexActivity} />
    <Route name="reports" handler={TBD} />
    <Route name="dashboard-edit" path="dashboard/edit"
      handler={IndexDashboardEdit}>
      <Route name="dashboard-panel-add" path="panel/add"
        handler={IndexDashboardPanelAdd}/>
      <Route name="dashboard-panel-edit" path="panel/edit/:index"
        handler={IndexDashboardPanelEdit}/>
    </Route>
    <DefaultRoute name="dashboard" handler={TourDashboard}/>
  </Route>
);

module.exports = routes;
