var Ajax={
    
    getURL:function(){
        
        var base     = 'staging.sevtelem.com/robot.php';
        var roboFrom = new Date().getTime()/1000;
        var roboDuration = 30;
        return (base+"?roboFrom="+roboFrom+"&roboDuration="+roboDuration);
    },
    load:function()
    {   
        //$.ajax({
        //   url: this.getURL(); 
        //    type: 'csv',
        //    
        //})
    },
    process:function(){
        
    }
}