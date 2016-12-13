jQuery.fn.extend({

	validateInput:function(){
		$(this).bind('cut copy paste', function(event) {
			console.log(event);
			var expression = /^[0-9]{0,4}$/;
			if(expression.test($(this).val())){
				console.log('true');
			}
			else{
				event.preventDefault();
				console.log('false');
			}
		});
	},

	inputNumeric:function(){
		$(this).keypress(function(event) {
			var keynum = window.event ? window.event.keyCode : e.which;
			if ( keynum == 8 ) return true;
			return /\d/.test(String.fromCharCode(keynum));
		});
	},

	inputWord:function(maxLetters){
		$(this).keypress(function(event) {
			var word = $(this).val();
			var pattern = "^[a-zA-Z]{0,"+(maxLetters-1)+"}$";
			var expression = new RegExp(pattern);
			var keynum = window.event ? window.event.keyCode : e.which;
			if ( keynum == 8 )
				return true; 
			if(maxLetters === undefined)
				return /[a-z]|[A-Z]/.test(String.fromCharCode(keynum));
			else
				return expression.test(word);
		});
	},

	inputZipCode:function(){
		$(this).keypress(function(event) {
			var keynum = window.event ? window.event.keyCode : e.which;
			var expression = /^[0-9]{0,4}$/;
			var zipCode = $(this).val();
			if(zipCode === ""){
				zipCode = String.fromCharCode(keynum);
			}
			return expression.test(zipCode);
		});
		
	},

	inputDecimal:function(maxInt, maxDecimal){
		var pattern = /((\d+)((\.\d{0,2})?))$/;
		console.log(pattern);
		var expression = new RegExp(pattern);
		$(this).keypress(function(event){
			var keynum = window.event ? window.event.keyCode : e.which;
			var decimal = $(this).val();
			if(decimal === ""){
				decimal = String.fromCharCode(keynum);
			}
			console.log(expression.test(decimal));
			return expression.test(decimal);
		});
	}	
    
});