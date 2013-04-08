var Robot={
    x:null,
    y:null,
    width:null,
    height:null,
    rot:null,
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
        
        //TODO: Remove
        //this.rot= this.rot + (0.4/360 * 2*Math.PI)
        this.stepRight(0.3);
        var randDir=Math.random()-0.5;
        
        if(randDir>0) {
            this.stepLeft(1);
        } else {
            this.stepRight(1);
        }
        
        if(Loop.frameNumber % 60 == 0)
        {
            this.addSensedLeft(10);
        }
        
        //this.y= this.y-0.3
    },
    stepLeft:function(mag)
    {
        this.rot=this.rot + (Config.ROBOT_ENCODER_STEP_RADIANS * mag);
        this.y = this.y - ( Math.cos(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        this.x = this.x + ( Math.sin(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        //console.log("[x:"+(Math.round(this.x*10)/10)+", y:"+(Math.round(this.y*10)/10)+"] @"+Math.round(this.rot*10)/10);
    },
    stepRight:function(mag)
    {
        this.rot=this.rot - (Config.ROBOT_ENCODER_STEP_RADIANS * mag);
        this.y = this.y - ( Math.cos(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        this.x = this.x + ( Math.sin(this.rot) * Config.ROBOT_ENCODER_STEP_CM * mag)
        //console.log("[x:"+Math.round(this.x*10)/10+", y:"+Math.round(this.y*10)/10+"] @"+this.rot);
    },
    addSensedLeft:function(distance)
    {
        //add angular offset from centre of robot
        //add additional angular offset on the line of the sensor.
        var offsetX=this.x
        var offsetY=this.y
        
        Particles.add(offsetX,offsetY);
    },
    addSensedRight:function(distance)
    {
        
    }
}