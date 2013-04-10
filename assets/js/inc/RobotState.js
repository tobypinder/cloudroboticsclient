function RobotState(data){
    this.time        = ('time' in data)        ? parseFloat(data.time)          : null;
    this.sensorLeft  = ('sensorLeft' in data)  ? parseFloat(data.sensorLeft)  : null;
    this.sensorRight = ('sensorRight' in data) ? parseFloat(data.sensorRight) : null;
    this.sensorUV    = ('sensorUV' in data)    ? parseFloat(data.sensorUV)    : null;
    this.wheelLeft   = ('wheelLeft' in data)   ? parseFloat(data.wheelLeft)   : null;
    this.wheelRight  = ('wheelRight' in data)  ? parseFloat(data.wheelRight)  : null;    
    this.warpTo      = function() {
        if(!Robot.lastState)
        {
            console.log("Setting Initial State!")
        }
        else
        {
            Robot.moveToState(this)
        }
        
        Robot.lastActionTime=this.time;
        Robot.lastState=this;
    };
    this.interpolateTo  = function() {
        if(!Robot.lastState)
        {
            console.log("Initial!");
            this.warpTo();
        }
        else if(Robot.internalTime > this.time)
        {
            console.log("Warp Override!");
            this.warpTo();
        } else
        {
            
            
            var sharenew=(Robot.internalTime - Robot.lastState.time)/(this.time - Robot.lastState.time);
            
            //console.log("Drawing "+Math.round(sharenew*100)+"% interpolated state.");
            var interpolatedState = new RobotState({
                time:           parseFloat(Robot.lastState.time)*(1-sharenew)   +  parseFloat(this.time)*(sharenew),
                sensorLeft:     Robot.lastState.sensorLeft  *(1-sharenew)     +    this.sensorLeft  *(sharenew),
                sensorRight:    Robot.lastState.sensorRight *(1-sharenew)     +    this.sensorRight *(sharenew),
                sensorUV:       Robot.lastState.sensorUV    *(1-sharenew)     +    this.sensorUV    *(sharenew),
                wheelLeft:      Robot.lastState.wheelLeft   *(1-sharenew)     +    this.wheelLeft   *(sharenew),
                wheelRight:     Robot.lastState.wheelRight  *(1-sharenew)     +    this.wheelRight  *(sharenew)
            });
            //console.log("T"+Robot.internalTime+"\tS:"+Robot.lastState.time+"\tI:"+interpolatedState.time)
            Robot.moveToState(interpolatedState);
            Robot.lastState=interpolatedState;
            //Robot.lastState=interpolatedState;
            
        }
        
    }
    
}