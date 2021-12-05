function Clock(){
    var dte= new Date();
    var tme = dte.toLocaleTimeString(); 
}
Clock.prototype.run = function(){
    setInterval(this.update.bind(this),1000);
};
Clock.prototype.update= function(){
    this.updateTime(1);
};
var clock = new Clock();
clock.run();