var Robot={
    x:null,
    y:null,
    width:null,
    height:null,
    rot:null,
    lastActionTime:null,    //last action actually processed
    lastQueuedTime:null,    //latest queued items
    internalTime:null,      //for display.
    lastState:null,         //TYPE: RobotState
    init:function(){
        this.x=0;
        this.y=0;
        this.width=Config.ROBOT_WIDTH;
        this.height=Config.ROBOT_HEIGHT;
        this.rot=0;
    },
    draw:function(ctx)
    {
        ctx.strokeStyle = "#009900";
        ctx.lineWidth = 3;
        
        //BEGIN DRAWING 
        ctx.translate(Robot.x, Robot.y);
        ctx.rotate(this.rot);
            
            //ctx.strokeRect(Robot.x-(Robot.width/2),Robot.y-(Robot.height/2),Robot.width,Robot.height);
            ctx.strokeRect(-(Robot.width/2),-(Robot.height/2), Robot.width, Robot.height);
            
            ctx.lineWidth = 2;
            //GRAD
            var grad=ctx.createLinearGradient(0,0,0,-Config.ROBOT_SENSOR_L_MAXRANGE);
            grad.addColorStop(0,'#009900');
            grad.addColorStop(1,'#002200');
           
            //LEFT SENSOR
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.moveTo(Config.ROBOT_SENSOR_L_CENTEROFFSET_X,Config.ROBOT_SENSOR_L_CENTEROFFSET_Y);
            ctx.lineTo(
                Config.ROBOT_SENSOR_L_CENTEROFFSET_X - Config.ROBOT_SENSOR_L_MAXRANGE*Math.sin(-Config.ROBOT_SENSOR_L_ANGLE), //45 deg.
                Config.ROBOT_SENSOR_L_CENTEROFFSET_Y - Config.ROBOT_SENSOR_L_MAXRANGE*Math.cos(Config.ROBOT_SENSOR_L_ANGLE)
            );
            //console.log("["+Config.ROBOT_SENSOR_1_CENTEROFFSET_X+","+Config.ROBOT_SENSOR_1_CENTEROFFSET_Y+"] => ["+(Config.ROBOT_SENSOR_L_CENTEROFFSET_X - Config.ROBOT_SENSOR_L_MAXRANGE*Math.sin(Config.ROBOT_SENSOR_L_ANGLE))+","+(Config.ROBOT_SENSOR_L_CENTEROFFSET_Y - Config.ROBOT_SENSOR_L_MAXRANGE*Math.cos(Config.ROBOT_SENSOR_L_ANGLE))+"]")
            ctx.stroke();
            ctx.closePath();
            
            //RIGHT SENSOR
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.moveTo(Config.ROBOT_SENSOR_R_CENTEROFFSET_X,Config.ROBOT_SENSOR_R_CENTEROFFSET_Y);
            ctx.lineTo(
                Config.ROBOT_SENSOR_R_CENTEROFFSET_X - Config.ROBOT_SENSOR_R_MAXRANGE*Math.sin(-Config.ROBOT_SENSOR_R_ANGLE), //45 deg.
                Config.ROBOT_SENSOR_R_CENTEROFFSET_Y - Config.ROBOT_SENSOR_R_MAXRANGE*Math.cos(Config.ROBOT_SENSOR_R_ANGLE)
            );
            //console.log("["+Config.ROBOT_SENSOR_1_CENTEROFFSET_X+","+Config.ROBOT_SENSOR_1_CENTEROFFSET_Y+"] => ["+(Config.ROBOT_SENSOR_L_CENTEROFFSET_X - Config.ROBOT_SENSOR_L_MAXRANGE*Math.sin(Config.ROBOT_SENSOR_L_ANGLE))+","+(Config.ROBOT_SENSOR_L_CENTEROFFSET_Y - Config.ROBOT_SENSOR_L_MAXRANGE*Math.cos(Config.ROBOT_SENSOR_L_ANGLE))+"]")
            ctx.stroke();
            ctx.closePath();
            
            
        //END DRAWING
        ctx.rotate(-this.rot);
        ctx.translate(-Robot.x, -Robot.y);
    },
    moveToState:function(state)
    {
        if(state.wheelLeft)
        {
            this.stepLeft(state.wheelLeft-this.lastState.wheelLeft);
        }
        if(state.wheelRight)
        {
            this.stepRight(state.wheelRight-this.lastState.wheelRight);
        }
        if(state.sensorLeft && (state.sensorLeft <= Config.ROBOT_SENSOR_L_MAXRANGE))
        {
            this.addSensedLeft(state.sensorLeft);
        }
        if(state.sensorRight && (state.sensorRight <= Config.ROBOT_SENSOR_R_MAXRANGE))
        {
            this.addSensedRight(state.sensorRight);
        }
    },
    stepLeft:function(mag)
    {
        this.rot=this.rot + (Config.ROBOT_ENCODER_STEP_RADIANS * mag);
        this.x = this.x + ( Math.sin(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        this.y = this.y - ( Math.cos(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
    },
    stepRight:function(mag)
    {
        this.rot=this.rot - (Config.ROBOT_ENCODER_STEP_RADIANS * mag);
        
        this.x = this.x + ( Math.sin(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        this.y = this.y - ( Math.cos(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
    },
    addSensedLeft:function(distance)
    {
        this.addSensed(distance, Config.ROBOT_SENSOR_L_CENTEROFFSET_X,Config.ROBOT_SENSOR_L_CENTEROFFSET_Y,Config.ROBOT_SENSOR_L_ANGLE)
        
    },
    addSensedRight:function(distance)
    {
        this.addSensed(distance, Config.ROBOT_SENSOR_R_CENTEROFFSET_X,Config.ROBOT_SENSOR_R_CENTEROFFSET_Y,Config.ROBOT_SENSOR_R_ANGLE)
    },
    addSensed:function(distance, centreoffset_x, centreoffset_y, sensor_angle)
    {
        var offsetX=centreoffset_x*Math.cos(this.rot)+centreoffset_y*-Math.sin(this.rot);//this.x
        var offsetY=centreoffset_x*Math.sin(this.rot)+centreoffset_y*+Math.cos(this.rot);//this.y
        
        offsetX+=(distance * Math.sin(this.rot+sensor_angle));
        offsetY+=(distance * -Math.cos(this.rot+sensor_angle));
        
        offsetX+=this.x;
        offsetY+=this.y;
        
        Particles.add(offsetX,offsetY);
    }
};