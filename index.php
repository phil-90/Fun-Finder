<!DOCTYPE html>
<html ng-app="App" ng-strict-di ng-controller="MainCtrl">
<head>
	<meta charset="utf-8" />
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<title></title>
	<meta name="keywords" content="" />
	<meta name="description" content="When in doubt, whip this app out." />
        <title>Fun Finder</title>
        <link href='http://fonts.googleapis.com/css?family=Francois+One' rel='stylesheet' type='text/css'>
        <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
                <a class="" href="#/"><span class="">Fun Finder</span></a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav pull-right">
                  <li><a href="">Current: {{ place.item.condition.text }} | {{ place.item.condition.temp }}&deg; <img src="http://l.yimg.com/a/i/us/we/52/{{place.item.condition.code}}.gif"/></a></li>
              </ul>
            </div>
        </div>
    </header>
    <div class="viewWrapper">
        <div ng-view class="slide"></div>
    </div>
    <footer class="footer">
        <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
                <a class="" href="#/"><img class="logoImage" src=""><span class="small-text">© 2014 Fun Finder, Inc.</span></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav pull-right">
                  <li><a href="#/terms">Terms</a></li>
                  <li><a href="#/privacy">Privacy</a></li>
              </ul>
            </div>
        </div>
    </footer>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="js/app.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARJlgjEOEbdgqDyOxs8a1dH4UtnlFcQAU&&libraries=geometry,places&sensor=true&language=en"></script>
</body>
</html>
