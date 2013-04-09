//
var ActionQueue={
    list:[],
    pump:function()
    {
        var now=new Date().getTime();
        //TODO PROCESS EVENTS
    },
    add:function(timestamp,data)
    {
        list.push(new ActionQueueItem(timestamp, data)) 
    }
}
function ActionQueueItem(timestamp,data)
{
    this.timestamp = timestamp;
    this.data = data;
    
    
}