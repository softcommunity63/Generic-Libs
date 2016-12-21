jQuery.extend({

	manageRequest:function(options){
		var request = validateOptions(options)
	    $.ajax({ 
	          type: "POST", 
	          url: "JQAjaxArrayJSon.aspx/ObtenerContactos", 
	          data: "{}", 
	          contentType: "application/json; charset=utf-8", 
	          dataType: "json", 
	          success: function (response) { 
	          	request.onSuccess(response);
	          }, 
	          error: function (result) { 
	          	request.onError(result);
	            //alert('ERROR ' + result.status + ' ' + result.statusText); 
	          } 
        }); 
	},

	validateOptions(options){
		var request;
		var type = "POST";
		var url = "JQAjaxArrayJSon.aspx/ObtenerContactos";
		var data = "{}";
		var error;
		var succes;
	    if(options.Type != undefined){
	    	type = options.Type;
	    }
	    if(options.Url != undefined){
	    	url = options.Url;
	    }
	    if(options.Data != undefined){
	    	data = options.Data;
	    }
	    if(options.onSuccess != undefined){
	    	if($.isFunction(options.onSuccess)){
	    		onSuccess = options.onSucces;
	    	}
	    }
	    if(options.onError != undefined){
	    	if($.isFunction(options.onError)){
	    		onError = options.onError;
	    	}
	    }

	    request= {
	    	type:type,
	    	url:url,
	    	data:data,
	    	onSucces:succes,
	    	onError:error
	    }
	    return request;
	}
});