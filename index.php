<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Project Telemetron</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
    
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/darkstrap.css" rel="stylesheet">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <!--
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
    -->
    <link rel="shortcut icon" href="../assets/ico/favicon.png">
  </head>

  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">Project Telemetron</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              
            </ul>
            <ul class="nav pull-right">
                <li><a name="connectedCount">1 Robots connected.</a></li>
            </ul>    
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">

      <!--<div class="hero-unit">-->
      <div class="row">
          <div class="span12">
            <canvas width="800" height="600" id="map" style="background-color:#fff;width:800px;height:600px;display:block;margin:0px auto;"/>
          </div>
      </div>
      <br />
      <br />
      <!-- Example row of columns -->
      <div class="row">
        <div class="span4">
            <div class="well">
                <iframe width='240' height='150' style='border: 0px solid #333;margin:0 auto;' src='http://bots.myrobots.com/channels/943/charts/2?title=Left+Sensor+Proximity&yaxis=&xaxis=&width=250&height=160&bgcolor=222222&dynamic=true&key=D9269081CF6E4EE3&results=20' scrolling='no'></iframe>
            </div>
        </div>
       <div class="span4">
          <div class="well">
            <iframe width='240' height='150' style='border: 0px solid #333;margin:0 auto;' src='http://bots.myrobots.com/channels/943/charts/5?title=Right+Sensor+Proximity&yaxis=&xaxis=&width=250&height=160&bgcolor=222222&dynamic=true&key=D9269081CF6E4EE3&results=20' scrolling='no'></iframe>
          </div>
       </div>
       <div class="span4">
         <div class="well">
           <iframe width='240' height='150' style='border: 0px solid #333;margin:0 auto;' src='http://bots.myrobots.com/channels/943/charts/7?title=Front+Ultrasonic&yaxis=&xaxis=&width=250&height=160&bgcolor=222222&dynamic=true&key=D9269081CF6E4EE3&results=20' scrolling='no'></iframe>
         </div>
       </div>
      </div>

      <hr>

      <footer>
        <p>Project Telemetron 2013</p>
      </footer>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>

    <!-- Libs. Keep in order with folder. -->
    <script src="assets/js/inc/ActionQueue.js"></script>  
    <script src="assets/js/inc/Ajax.js"></script>  
    <script src="assets/js/inc/Canvas.js"></script>    
    <script src="assets/js/inc/Config.js"></script>
    <script src="assets/js/inc/Event.js"></script>
    <script src="assets/js/inc/Kicker.js"></script>
    <script src="assets/js/inc/Loop.js"></script>
    <script src="assets/js/inc/MyRobots.js"></script>    
    <script src="assets/js/inc/Particle.js"></script>
    <script src="assets/js/inc/Robot.js"></script>    
    <script src="assets/js/inc/RobotState.js"></script>    
  </body>
</html>