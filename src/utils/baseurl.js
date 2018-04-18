var baseUrl = 'http://192.168.0.114/static/';
export default {
	fliterUrl:function(url){
	    if(url.startsWith('http')){
	        return url;
	    }
	    return baseUrl + url;
	}
}