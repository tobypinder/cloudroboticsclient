function Particle(x,y){
    this.x=x,
    this.y=y,
    this.start=new Date().getTime(),
    this.expiry=this.start+Config.WALL_PARTICLE_EXPIRY,
    this.draw=function(ctx,now)
    {
        ctx.fillStyle = "rgba(0,255,0,"+Math.pow((1-((now-this.start)/(this.expiry-this.start))),2)+")";
        ctx.lineWidth = Config.WALL_PARTICLE_DISPLAY_WIDTH;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, ctx.lineWidth, 0, Math.PI*2, true); 
        ctx.closePath(); 
        ctx.fill();
    }
}

var Particles={
    list:[],
    add:function(x,y)
    {
        this.list.push(new Particle(x,y));
    },
    drawAll:function(ctx)
    {
        var idx = this.list.length
        var now=new Date().getTime();
        while (idx--) 
        {
            var part=this.list[idx];
           
            if(part.expiry<now)
            {
                this.list.splice(idx, 1);
            }
            else
            {
                part.draw(ctx,now);
            }
        }
    }
};
