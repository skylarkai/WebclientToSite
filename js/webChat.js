function openWebChat(){
	if(document.getElementById("iframeDiv")){
		document.body.removeChild(document.getElementById("iframeDiv"));
	}
	var svg = "<svg style='display: none;'>"+
		"<symbol id='skylarkClose' viewBox='0 0 1024 1024'>"+
			"<path d='M874.024 149.976C774.072 49.992 643.016 0.016 511.984 0.016c-131.024 0-262.048 49.976-362.024 149.952-199.928 199.928-199.928 524.12 0 724.048 99.984 99.984 231.032 149.96 362.056 149.96 131.04 0 262.064-49.976 362.04-149.928 199.928-199.952 199.928-524.144-0.032-724.072z m-42.536 681.52c-85.344 85.304-198.784 132.28-319.48 132.28-120.672 0-234.152-46.976-319.488-132.312-176.152-176.152-176.152-462.776 0-638.92 85.336-85.312 198.784-132.32 319.464-132.32 120.688 0 234.136 47.008 319.472 132.32 176.144 176.144 176.176 462.768 0.032 638.952z' fill='#384971'/>"+
			"<path d='M684.152 339.88a30.088 30.088 0 0 0-42.568 0L512 469.44 382.424 339.88c-11.76-11.76-30.808-11.76-42.568 0s-11.76 30.808 0 42.568L469.432 512 339.856 641.552a30.08 30.08 0 0 0 0 42.56 30.016 30.016 0 0 0 21.288 8.824c7.696 0 15.4-2.936 21.28-8.824L512 554.56l129.576 129.552c5.872 5.88 13.576 8.824 21.28 8.824s15.408-2.936 21.288-8.824a30.08 30.08 0 0 0 0-42.56L554.568 512l129.576-129.552a30.096 30.096 0 0 0 0.008-42.568z' fill='#384971'/>"+
		"</symbol>"+
	"</svg>";
	var iframe = svg+"<div id='iframeDiv'  style='position: absolute;width: 100%;height: 100%;border: 1px solid #E7E6EA;z-index:10000;'><a onclick='closeIframe()' id='closeIframe' style='position: absolute;width: 25px;height: 25px;border: 1px solid #cd3a40;right: 15px;top: 12px;background: #cd3a40;color: #384971;border-radius: 50%;font-size: 20px;display:flex;align-items: center;text-align: center;'><svg style='width:25px;height:25px'><use xlink:href='#skylarkClose'/></svg></a><iframe  width='100%' height='100%' src=' https://skylarkai.cn/pcweb/Koc8klJp/index.html' id='iframeSky'></iframe></div>"
	window.document.body.innerHTML+= iframe;
	
	document.getElementById("closeIframe").style.display = 'block'
}
function closeIframe(){
	var div = document.getElementById("iframeDiv");
	document.body.removeChild(div);
}
