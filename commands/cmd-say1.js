const info="说一句话。\n\
/tiao>say1 [str]\n\
str: 要说的字符串，会进行转义。若为空，则补全为 'btdsc AK IOI'。";
function exec(str,msg){
    str=str.substr(4,str.length-4);
    if(!str) str="btdsc AK IOI";
    let res=str[0]=='\\'?"":str[0];
    for(let i=1;i<str.length;++i){
        if(str[i]=='\\') continue;
        if(str[i-1]=='\\'){
            res+=eval("\"\\"+str[i]+"\"");
        }else res+=str[i];
    }
    msg.reply(res);
};
exports.exec=exec;
exports.info=info;