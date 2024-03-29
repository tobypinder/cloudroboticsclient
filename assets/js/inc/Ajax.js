var Ajax={
    today:null,
    init:function(){
        setInterval(function(){Ajax.load()},(Config.AJAX_SECONDS*1000))
        this.load();
        var now=new Date();
        Ajax.today=(new Date(now.getFullYear(), now.getMonth(), now.getDate()))/1000;
        
    },
    getURL:function(){
        
        var base     = 'http://staging.sevtelem.com/robot.php';
        var roboDuration = Config.AJAX_DURATION;
        
        console.log("Last: "+Robot.lastActionTime+"\tToday: "+Ajax.today+"\tTotal: "+(Robot.lastActionTime+Ajax.today*1000))
        //if(Robot.lastActionTime == null) {
            return (base+"?roboDuration="+roboDuration); 
       // } else{
       //     var roboFrom = Math.round(Robot.lastActionTime)+Ajax.today;
       //     return (base+"?roboFrom="+roboFrom+"&roboDuration="+roboDuration);
       // }
        
        
        
//        return 'SAMPLE.csv'; 
    },
    load:function()
    {   
        console.log("Loading new telemetry from "+this.getURL());
        $.ajax({
            url: this.getURL(), 
            type: 'csv',
            success: function(data){Ajax.process(data)},
            method: 'get'
        });
    },
    process:function(data){
        var rows=data.split("\n");
        rows.splice(0,1);
        
        var rowcount=rows.length;

        for(var i=0;i<rowcount;i++)
        {
            rows[i] =  rows[i].split(',');
            var timeArr = rows[i][Config.AJAX_INDEX_TIMESTAMP].split(':');
            var time = parseInt(timeArr[0]*24*60)+parseInt(timeArr[1]*60)+parseInt(timeArr[2]);
            rows[i][0] = time;
            var state = new RobotState({
                time:           time,
                sensorLeft:     parseFloat(rows[i][Config.AJAX_INDEX_SENSOR_LEFT]),
                sensorRight:    parseFloat(rows[i][Config.AJAX_INDEX_SENSOR_RIGHT]),
                sensorUV:       parseFloat(rows[i][Config.AJAX_INDEX_SENSOR_UV]),
                wheelLeft:      parseFloat(rows[i][Config.AJAX_INDEX_MOTOR_LEFT]),
                wheelRight:     parseFloat(rows[i][Config.AJAX_INDEX_MOTOR_RIGHT])
            });
            
            ActionQueue.add(time,state);
            
        }        
    }
}