//var get_url=$.cookie('urls');

//定义域名池
var mycars=new Array(20);
mycars[0]="szxlpackaging.com,V5QGWyZEVqrXYYiElELLTga-OBzF_6KsNiuT-jcO5gM";
mycars[1]="bljjhs520.com,mGJ6H63mF1qTepxpIX2pKqwiB1YazxrOWhRAiTsnPMg";
mycars[2]="liwushuoshuo.com,gpjcbK7bsNe-p4MxKmin8_Su2c7SsdN1GaJN2UlEigY";
mycars[3]="zjwulun.com,4F4Fa08D4m-0VcMPro-oqdlpGqzqDI_OdTYGFWHeTEg";
mycars[4]="lvmaitian.com,CZ8tDe_EjNpPa3c9sPnJ8dfoOrK-idSmwjKxHSw19cE";
/*
mycars[5]="hnldxhryj.com,bnrmM4Qf8h8lm7kAe4XUTBNhEi7Y2uW08VPnAdcRvzQ";
mycars[6]="ounuoshipi.com,cVVXwmaaoRoD-Nt_9PeTughZ_Iwe-6voILi-jzNSlHA";
mycars[7]="eco-sludge.com,K_nZ-ub9MQkySG5qU6m25UcpQdzBrXDja3BlF13guv0";
mycars[8]="spar-zuqiu.com,NlKDoMZOof5G4jhNvP3vpN7xf2ZCW0gFnJf8tT7a-HY";
mycars[9]="winrivercn.com,mND-HL21dEBq8JyOl2efYli8NdO16enBliiAu7RFchM";

mycars[10]="china-aifeijie.com,Gx7v8M_aJvY8VCkUCPAgwF_Jb_q6rbBf_K2tW3xSRCs";
mycars[11]="xjnongmao.com,gLfZ3TID5IOVMwJuaDjmz6tmPen5Clqj2CkKSn8_KRA";
mycars[12]="zgzhengzhou.com,fsVnruPAixTg5IX0ZYrtbO_8_uj9sbCYte36zg1MUFA";
mycars[13]="gscpn.com,u0BQloW_xg_vQh1SD2jHsIgboD9CliwktOtaXAkGlHQ";
mycars[14]="yzboygd.com,xmHqb4V3HUU4DPlMFBCoRBvz2H5xlm-AvL1ae0h9v7Y";
mycars[15]="csjt9988.com,1PQxBBq7y_eLzF76jlYA14gMVduSXjAZMMQ-f3auIB0";
mycars[16]="usfenxiao.com,RMW69kV0bKyKmRBQN24gDFQYABMQ5rHIKFdm0OqfF3A";
mycars[17]="ythuanggu.com,MIyB-s0H8U_BspUmRki0syAsmDsz2wS-Ql37VCjNuWA";
mycars[18]="yuntaishengwu.com,Q3q7mva6fTk5Oj4o-xdp4Yv2wTY3iPz8DBaDsqIT7wY";
mycars[19]="lelingnad.com,G1yHyvh5M-XkA2y8kSFMvkXM9KrexUWCd12nYcbBTLs";
*/

//采用正则表达式获取地址栏参数
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


function urls(name,num){
	//定义数组，找出相对于的值
	var parameter=mycars[name];
	
   	var m = parameter.split(",");
   	
   	var urls=m[num];
   	
   	return urls;
}

//定义域名ID
var mycarsId = new Array(20);
mycarsId[0] = "szxlpackaging.com,15d1a785e48d414c43e3c7f0eaef0dd8";
mycarsId[1] = "bljjhs520.com,5247438cdd44896310dd6b433a9235eb";
//mycarsId[2] = "liwushuoshuo.com,4c7476df255fe5aa385fa8eff33c284b";
//mycarsId[3] = "zjwulun.com,efc58a94279fbe94f06b882e5a54db5e";
//mycarsId[4] = "lvmaitian.com,8f62de72801f8c92b3f8c6f7fe4ffd6c";

function urlsID(name,num){
	//定义数组，找出相对于的值
	var parameter=mycarsId[name];
	
   	var n = parameter.split(",");
 	
   	var urlsID=n[num];
 	
 	return urlsID;
}





