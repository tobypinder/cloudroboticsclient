var Ajax={
    init:function(){
        setInterval(function(){Ajax.load()},(Config.AJAX_SECONDS*100))
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
            success: 'Ajax.process',
            method: 'get'
        })
    },
    process:function(data){
        console.log(data);
    }
}