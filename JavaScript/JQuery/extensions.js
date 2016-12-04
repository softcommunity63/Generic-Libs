jQuery.fn.extend({
	inputNumeric:function(e){
		$(this).keypress(function(event) {
			var keynum = window.event ? window.event.keyCode : e.which;
			if ( keynum == 8 ) return true;
			return /\d/.test(String.fromCharCode(keynum));
		});
	},

	inputWord:function(maxLetters){
		$(this).keypress(function(event) {
			var word = $(this).val();
			var fc = "^[a-zA-Z]{0,"+(maxLetters-1)+"}$";
			var expression = new RegExp(fc);
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
			var expression = /^[0-9]{0,3}$/;
			var zipCode = $(this).val();
			if(zipCode === ""){
				zipCode = String.fromCharCode(keynum);
			}
			return expression.test(zipCode);
		});
		
	},

	inputDecimal:function(negative, maxInt, minInt, maxDecimal, minDecimal){
		if(negative == true){

		}
	}	
    
});