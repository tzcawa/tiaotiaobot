const {cmds}=require("../command");
const info="查看帮助。\n\
/tiao>help [cmdName]\n\
cmdName: 要查看的命令名。若为空，则列出所有命令。";
function exec(args,msg){
    let name=args[0];
    if(!name){
        let s="";
        for(let i=0;i<cmds.length;++i){
            if(i) s+=",";
            s+=cmds[i];
        }
        msg.reply("可用的命令：\n"+s+"\n以任意一个作为参数来查看其信息。");
    }else{
        if(cmds.indexOf(name)==-1){
            msg.reply("没有"+name+"这个命令捏。");
            return -1;
        }
        const {info}=require("./cmd-"+name);
        msg.reply(info);
    }
};
exports.exec=exec;
exports.info=info;