var Ajax={
    init:function(){
        setInterval(function(){Ajax.load()},(Config.AJAX_SECONDS*1000))
        this.load();
    },
    getURL:function(){
        
        var base     = 'http://staging.sevtelem.com/robot.php';
        var roboFrom = Math.round(new Date().getTime()/1000);
        var roboDuration = 90;
//        return (base+"?roboFrom="+roboFrom+"&roboDuration="+roboDuration);
        return 'SAMPLE.csv'; 
    },
    load:function()
    {   
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
                sensorLeft:     rows[i][Config.AJAX_INDEX_SENSOR_LEFT],
                sensorRight:    rows[i][Config.AJAX_INDEX_SENSOR_RIGHT],
                sensorUV:       rows[i][Config.AJAX_INDEX_SENSOR_UV],
                wheelLeft:      rows[i][Config.AJAX_INDEX_MOTOR_LEFT],
                wheelRight:     rows[i][Config.AJAX_INDEX_MOTOR_RIGHT]
            });
            
            ActionQueue.add(time,state);
            
        }        
    }
}