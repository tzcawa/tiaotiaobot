"use strict";
const {createClient}=require("oicq");

const account=0;/* bot's QQ account */
const bot=createClient(account);
const debug=0;

bot.on("system.login.qrcode",function(e){
	this.logger.mark("扫码后按Enter完成登录");
	process.stdin.once("data",()=>{
		this.login();
	});
}).login();

exports.bot=bot;
exports.debug=debug;

require("./onoffline"); //监听上下线
require("./main"); //main

process.on("unhandledRejection",(reason, promise)=>{
	console.log('Unhandled Rejection at:',promise,'reason:',reason);
});
