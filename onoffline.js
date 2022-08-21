"use strict"
const {bot,debug}=require("./index")

const groupId=0;/* your QQ group */
let target={};
if(!debug) bot.on("system.online",function(){
	target=bot.pickGroup(groupId);
	target.sendMsg("caibot上线力！");
})

process.on("SIGINT",async function(){
	console.log("即将退出");
	if(!debug) target.sendMsg("caibot下线力！");
	setTimeout(function(){
		process.exit();
	},500);
});