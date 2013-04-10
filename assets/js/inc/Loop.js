//Main Loop stuff.
var Loop=
{
    lastFrame:new Date().getTime(),
    thisFrame:new Date().getTime(),
    frameNumber:0,
    init:function(){
        setInterval( function(){Loop.step()}, (1000/Config.CANVAS_TARGET_FPS));
    },
    /**
     * Main loop
     */
    step:function()
    {
        Loop.thisFrame = new Date().getTime();
        Loop.currentFPS = 1000/(Loop.thisFrame-Loop.lastFrame)
        Loop.frameNumber++;
        
        //Do stuff.
        ActionQueue.pump();
        Canvas.redraw();
        
        if(ActionQueue.list.length>0)
        {
            ActionQueue.list[0].robotState.interpolateTo();
        }
        Robot.internalTime+=(((Loop.thisFrame - Loop.lastFrame)/1000))*Config.DEBUG_PLAYBACK_SPEED
        Loop.lastFrame = Loop.thisFrame;
    }
}