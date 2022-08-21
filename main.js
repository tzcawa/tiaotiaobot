"use strict"
const {segment}=require("oicq");
const {bot,debug}=require("./index");
const {exeCmd}=require("./command");
const groupId=757284566;
// message reply
if(debug) bot.on("message",function(msg){
	if(msg.group_id==groupId) return;
	if(msg.message.length==1&&msg.message[0].type=="face"){
		if(msg.message[0].id==86){
			msg.reply(segment.face(86));
		}else if(msg.message[0].id==129){
			msg.reply(segment.face(129));
		}
	}else if(msg.message.length==2
		&&msg.message[0].type=="face"
		&&msg.message[0].id==43
		&&msg.message[1].type=="text"
		&&msg.message[1].text[0]==">"){
		let s=msg.message[1].text.substr(1,msg.message[1].text.length-1);
		exeCmd(s,msg);
	}
});
else bot.on("message.group",function(msg){
	if(msg.group_id!=groupId) return;
	if(msg.message.length==1&&msg.message[0].type=="face"){
		if(msg.message[0].id==86){
			msg.reply(segment.face(86));
		}else if(msg.message[0].id==129){
			msg.reply(segment.face(129));
		}
	}else if(msg.message.length==2
		&&msg.message[0].type=="face"
		&&msg.message[0].id==43
		&&msg.message[1].type=="text"
		&&msg.message[1].text[0]==">"){
		let s=msg.message[1].text.substr(1,msg.message[1].text.length-1);
		exeCmd(s,msg);
	}
});

// // 接收戳一戳
// bot.on("notice.group.poke", function (e) {
// 	if (e.target_id === this.uin)
// 		e.group.sendMsg("dont poke me")
// })
