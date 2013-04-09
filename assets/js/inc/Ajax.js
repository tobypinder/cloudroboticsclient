var Ajax={
    init:function(){
        setInterval(function(){Ajax.load()},(Config.AJAX_SECONDS*1000))
    },
    getURL:function(){
        
        var base     = 'http://staging.sevtelem.com/robot.php';
        var roboFrom = Math.round(new Date().getTime()/1000);
        var roboDuration = 30;
        return (base+"?roboFrom="+roboFrom+"&roboDuration="+roboDuration);
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
            rows[i]=rows[i].split(',');
        }
        
        console.log(rows);
        
    }
}