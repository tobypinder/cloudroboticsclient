var Canvas={
    TOP:0,
    BOTTOM:0,
    LEFT:0,
    RIGHT:0,
    WIDTH:0,
    HEIGHT:0,
    obj:null,
    ctx:null,
    init:function(){
        Canvas.obj=document.getElementById("map");
        Canvas.ctx=Canvas.obj.getContext("2d");
        Canvas.ctx.translate((Config.WINDOW_WIDTH/2), (Config.WINDOW_HEIGHT/2));
        Canvas.load(); 
        
    },
    load:function(){
        //the load function contains stuff that needs to be redone when the scale changes.
        Canvas.ctx.scale(1/Config.WORLD_SCALE,1/Config.WORLD_SCALE);
        Canvas.TOP      =   -Config.WINDOW_HEIGHT * Config.WORLD_SCALE/2
        Canvas.BOTTOM   =    Config.WINDOW_HEIGHT * Config.WORLD_SCALE/2
        Canvas.LEFT     =   -Config.WINDOW_WIDTH  * Config.WORLD_SCALE/2
        Canvas.RIGHT    =    Config.WINDOW_WIDTH  * Config.WORLD_SCALE/2
        Canvas.WIDTH    =    Config.WINDOW_WIDTH  * Config.WORLD_SCALE
        Canvas.HEIGHT   =    Config.WINDOW_HEIGHT * Config.WORLD_SCALE
    },
    rescale:function(newScale)
    {
        //reset
        Canvas.ctx.scale(Config.WORLD_SCALE,Config.WORLD_SCALE);
        //define new
        Config.WORLD_SCALE = newScale;
        Canvas.load();
        
    },
    redraw:function()
    {
        var ctx=Canvas.ctx;
        
        ctx.clearRect(Canvas.TOP, Canvas.LEFT, Canvas.WIDTH, Canvas.HEIGHT);
        ctx.fillStyle = "#001100";
        ctx.fillRect(Canvas.LEFT, Canvas.TOP, Canvas.WIDTH, Canvas.HEIGHT)
        ctx.font = (12*Config.WORLD_SCALE)+"pt Verdana, serif";
        ctx.fillStyle = "#fff";
        ctx.fillText("FPS: "+Math.round(Loop.currentFPS),  (Canvas.WIDTH/2) - (80*Config.WORLD_SCALE),  (Canvas.HEIGHT/2) - (20*Config.WORLD_SCALE) );
        ctx.fillText("ActionQueue: "+(ActionQueue.list.length) +"  Time: "+this.getTimeAsString(),  -(Canvas.WIDTH/2) + (20*Config.WORLD_SCALE),  (Canvas.HEIGHT/2) - (20*Config.WORLD_SCALE) );
        Robot.draw(ctx);
        Particles.drawAll(ctx);
    },
    getTimeAsString:function()
    {
        var t = new Date(Robot.internalTime*1000);
        
        var hour = t.getUTCHours();
        var min =  t.getUTCMinutes();
        var sec =  t.getUTCSeconds();
        
        return hour+':'+min+':'+sec ;
        
    }
}