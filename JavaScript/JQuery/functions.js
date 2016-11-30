jQuery.fn.extend({
	isValidEmail:function(email){
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	    if (regex.test(email.trim())) 
	        return true;
	    else 
	       return false;
	}
});