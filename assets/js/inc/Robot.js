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
        this.rot= this.rot + (0.4/360 * 2*Math.PI)
        //this.y= this.y-0.3
    },
    drawFOV:function(ctx)
    {
        
    }
}