jQuery.extend({
	isValidEmail:function(email){
		var regex = /\w+@\w+\.+\w/;
		if(!regex.test(email.trim())){
			return false;
		}
		return true;
	},

	getServerPath:function(){
		return window.location.pathname;
	},

	getAbsoluteServerPath:function(){
		return window.location.hostname;
	},

	currencyFormat:function(number, places, symbol, thousand, decimal){
 		places = !isNaN(places = Math.abs(places)) ? places : 2;
		symbol = symbol !== undefined ? symbol : "$";
		thousand = thousand || ",";
		decimal = decimal || ".";
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
		return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
	},

	convertToDate:function(date){
		newDate = new Date();
		newDate.setTime(Date.parse(strFecha));
		return newDate;
	},

	isValidPhone:function(number, type){
		if(type === 'cellular'){
			var test = /^[89]\d{8}$/;
			var telReg = new RegExp(test);
			return telReg.test(tel);
		}
		else{
			var test = /^[6]\d{8}$/;
			var telReg = new RegExp(test);
			return telReg.test(tel);
		}
	},

	showAlert:function(title, message){
		PNotify.prototype.options.styling = "bootstrap3";
		new PNotify({
			title:title,
			text:message,
			type:'notice'
		});
	},

	showSuccesAlert:function(title, message){
		PNotify.prototype.options.styling = "bootstrap3";
		new PNotify({
			title:title,
			text:message,
			type:'success'
		});
	},

	showErrorAlert:function(title, message){
		PNotify.prototype.options.styling = "bootstrap3";
		new PNotify({
			title:title,
			text:message,
			type:'error'
		});
	},

	popOverLoad:function(url){
		
	},

	deletePopOverLoad:function(){

	},

});