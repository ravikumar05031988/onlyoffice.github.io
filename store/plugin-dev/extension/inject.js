(function(window, undefined) {
	var URL_TO_PLUGIN = "https://github.com/ravikumar05031988/onlyoffice.github.io/tree/master/sdkjs-plugins/content/helloworld";
	
	var xhrObj = new XMLHttpRequest();
 	xhrObj.open('GET', URL_TO_PLUGIN + "config.json", true);
	xhrObj.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhrObj.send('');

	var configObj = JSON.parse(xhrObj.responseText);
	configObj.baseUrl = URL_TO_PLUGIN;

	window.Asc = window.Asc ? window.Asc : {};
	window.Asc.extensionPlugins = window.Asc.extensionPlugins ? window.Asc.extensionPlugins : [];
	window.Asc.extensionPlugins.push(configObj);
	if (window.Asc.g_asc_plugins && window.Asc.g_asc_plugins.loadExtensionPlugins)
	{
		window.Asc.g_asc_plugins.loadExtensionPlugins(window.Asc.extensionPlugins);
		window.Asc.extensionPlugins = [];
	}	
})(window, undefined);