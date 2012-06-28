// Display all text in the selector as typewriter.
// example: $("#id").typeWriter({ delay: 10 }, function(){ console.log("done"); });
$.extend($.fn, {
	typeWriter: function(/* settings, callback */) {
		var settings = $.extend({}, { delay: 100, letterWrapper: '<span/>' }, typeof arguments[0] === "object" ? arguments[0] : typeof arguments[1] === "object" ? arguments[1] : {});
		var callback = $.isFunction(arguments[0]) ? arguments[0] : $.isFunction(arguments[1]) ? arguments[1] : function(){} || function(){};
		
		var intervaller;
			
		var childrenIndex = 0;
		var children = this.children();
		if(children.length == 0){
			children = this;
		}
		
		var Write = function($this) {
			var letterIndex = 0;
			var letters = $this.text().split("");
			
			$this.empty().show();
			
			intervaller = window.setInterval(function(){
				$(settings.letterWrapper).text(letters[letterIndex++]).appendTo($this).hide().show(settings.delay - 10);

				if(letterIndex >= letters.length){
					NextLine();
				}
			}, settings.delay);

		};
		
		var Stop = function(){
			if(intervaller){
				window.clearInterval(intervaller);
			}
		}
		
		var NextLine = function(){
			Stop();
			
			if(childrenIndex >= children.length){
				callback();
			} else {
				Write($(children[childrenIndex++]));
			}
		};

		NextLine();
		
		return this;
	}
});