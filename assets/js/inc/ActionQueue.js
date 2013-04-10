//
var ActionQueue={
    list:[],
    pump:function()
    {
        var now=Robot.internalTime;
        //TODO PROCESS EVENTS
        if(ActionQueue.list.length>0 && now >= ActionQueue.list[0].time)
        {
            
            var state= ActionQueue.list[0].robotState
            console.log("Processing", state);
            //TODO: INTERMEDIATE EVENT PROCESSING USING INTERPOLATION
            ActionQueue.list.splice(0,1);
            state.warpTo();
        }
    },
    add:function(time,robotState)
    {
        if(this.list.length == 0)
        {
            Robot.lastQueuedTime = time-1;
            Robot.lastActionTime = time-1;
            Robot.internalTime = time;
        }
        
        
        
        if(ActionQueue.list.length == 0 || time > ActionQueue.list[ActionQueue.list.length-1].time)
        {
            this.list.push(new ActionQueueItem(time, robotState)) 
        }
        
        Robot.lastQueuedTime = time;
    }
}
function ActionQueueItem(time, robotState)
{
    this.time = time;
    this.robotState = robotState;
    
}