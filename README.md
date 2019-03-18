# WebclientToSite
租户客服web访问地址集成样例

首先，二旗客服将为您提供样例程序，以便客户进行参照集成。提供的文件如下：
 
各文件说明：
js—webChat.js 引入js文件
|
|--index.html 样例文件
|--使用说明.txt readme.txt

客户需要在index.html或者其他需要调用web客服的页面，添加代码，引入weChat.js文件，代码如下：
	<head>
……
		<script type="text/javascript" src="js/webChat.js"></script>
<style type="text/css">
			#iframeDiv{
				width: 550px;   ---宽度
				height: 550px;  ---高度
				position: fixed;  ---根据窗口定位
				right: 80px;   
				bottom: 55px;
			}
		</style>
	</head>
，然后，客户需要在引入页面通过事件调用打开客服页面，如下代码：
1：<body onload="openWebChat()">

    
2：绑定按钮等控件的相应事件上，打开客服页面，代码如下:
<button onclick="openWebChat()" style="position: fixed;left: 330px;bottom: 330px;padding: 20px;color: yellow;background: #006834;font-size: 22px;">点我查看样例展示</button>
效果如下：
 
以上为集成方式的具体操作步骤。
