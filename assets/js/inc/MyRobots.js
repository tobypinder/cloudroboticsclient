/* 
 * This is a proof-of-concept "server" for Project Telemetron. In a "real" application
 * This would be replaced by a persistent process on a server/cloud, presumably as an
 * additional translation step in the AMQP block processing translation and storage
 * queue that is currently being handled by Smith Electric Vehicles' telematics system. 
 * 
 * Obviously though for the scope of this hackathon it's not really viable to completely
 * reengineer message processing for our telematics day job :) 
 *  
 */
var MyRobots= {
    /**
     * Yes, the key is clientside. Yes, you could publish dodgy info to MyRobots. No
     * we won't do it this way in any real info, but given the time constraints of this
     * hackathon we're going to have to rely on trust. Please be nice :)
     */
    API_KEY:                        "D9269081CF6E4EE3",
    ENDPOINT_URL:                   "http://bots.myrobots.com",
    PATH_UPDATE:                    "/update",
    PATH_UPDATE_JSONP_CALLBACK:     "MyRobots.processUpdate",
    init:function()
    {
        setInterval( function(){MyRobots.sendUpdate(Robot.lastState)}, Config.MYROBOTS_SECONDS*1000);
    },  
    getURL:function(currentState)
    {
        return this.ENDPOINT_URL+this.PATH_UPDATE+"?key="+this.API_KEY+"&field2="+currentState.sensorLeft+"&field5="+currentState.sensorRight+"&field7="+currentState.sensorUV+"&callback="+this.PATH_UPDATE_JSONP_CALLBACK
    },
    sendUpdate:function(currentState)
    {
        console.log("Sending MyRobots Updates...");
        $.ajax({
            url: this.getURL(currentState), 
            dataType: "jsonp", //bypass Same-Origin nonsense.
            success: function(data){MyRobots.onUpdate(data)},
            method: 'get'
        });
    },
    processUpdate:function(data)
    {
        alert("Processed!"+data);
    },
    onUpdate:function()
    {
        console.log("Successfully sent data to the MyRobots API!");
    }
}