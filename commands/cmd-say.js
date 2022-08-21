const info="说一句话。\n\
/tiao>say [str]\n\
str: 要说的字符串。若为空，则补全为 'btdsc AK IOI'。";
function exec(str,msg){
    str=str.substr(4,str.length-4);
    if(!str) str="btdsc AK IOI";
    msg.reply(str);
};
exports.exec=exec;
exports.info=info;