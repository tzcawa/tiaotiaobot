const cmds=["help","mod","say","say1"];
function exeCmd(s,msg){
    let ps=s,res=s[0];
    for(let i=1;i<s.length;++i){
        if(s[i]!=' '||s[i]!=s[i-1]){
            res+=s[i];
        }
    }
    s=res;
    s=s.split(" ");
    let cmdName=s.shift(),args=s,worker=()=>{};
    if(cmds.indexOf(cmdName)==-1){
        msg.reply("没有"+cmdName+"这个命令捏。");
        return -1;
    }else{
        const {exec}=require("./commands/cmd-"+cmdName);
        worker=exec;
    }
    try{
        if(cmdName=="say"||cmdName=="say1") worker(ps,msg);
        else worker(args,msg);
    }catch(err){
        msg.reply(err);
        return -1;
    }
}
exports.cmds=cmds;
exports.exeCmd=exeCmd;