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
        Canvas.redraw();
        
        Loop.lastFrame = Loop.thisFrame;
    }
}