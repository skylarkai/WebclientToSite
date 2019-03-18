function openWebChat(){
	if(document.getElementById("iframeDiv")){
		document.body.removeChild(document.getElementById("iframeDiv"));
		clearInterval(timer);
	}
	var iframe = "<div id='iframeDiv'><button onclick='closeIframe()' id='closeIframe' style='position: absolute;width: 25px;height: 25px;border: 1px solid #E7E6EA;right: 15px;top: 12px;background: #f92672;color: white;border-radius: 50%;font-size: 20px;line-height: 23px;text-align: center;display:none;'>&times;</button><iframe  width='100%' height='100%' src=' https://skylarkai.cn/pcweb/xAN2sC2W/index.html' id='iframeSky'></iframe></div>"
	window.document.body.innerHTML+= iframe;
	var dg = 1;
	var timer = setInterval(function(){
		dg++;
		if(dg>3){
			document.getElementById("closeIframe").style.display = 'block'
			clearInterval(timer);
		}
	},1000);	
}
function closeIframe(){
	var div = document.getElementById("iframeDiv");
	document.body.removeChild(div);
}
