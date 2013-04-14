//
var ActionQueue={
    queueInitialised:false,
    list:[],
    pump:function()
    {
        var now=Robot.internalTime;
        //TODO PROCESS EVENTS
        if(ActionQueue.list.length>0 && now >= ActionQueue.list[0].time)
        {
            
            var state= ActionQueue.list[0].robotState
            //console.log("Processing", state);
            //TODO: INTERMEDIATE EVENT PROCESSING USING INTERPOLATION
            ActionQueue.list.splice(0,1);
            state.warpTo();
        }
    },
    add:function(time,robotState)
    {
        if(this.list.length == 0 && ActionQueue.queueInitialised == false)
        {
            ActionQueue.queueInitialised = true;
            Robot.lastQueuedTime = time-1;
            Robot.lastActionTime = time-1;
            Robot.internalTime = time;
        }
        
        if(ActionQueue.queueInitialised == false || time > Robot.lastQueuedTime)
        {
            //console.log("RoboTime:\t"+Robot.lastQueuedTime+"\tTime:\t"+time);
            //Robot.lastQueuedTime = robotState.time;
            this.list.push(new ActionQueueItem(time, robotState)) 
            Robot.lastQueuedTime = time;
        } else {
            //console.log("Not logging Event:");
            //console.log(Robot);
        }
        
        
    }
}
function ActionQueueItem(time, robotState)
{
    this.time = time;
    this.robotState = robotState;
    
}