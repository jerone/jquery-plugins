$.extend($.fn, {
	cond: function(){
		var undefined,
			args = arguments,
			i = 0,
			test,
			callback,
			result;
		while(!test && i<args.length){
			test = args[i++];
			callback = args[i++];
			test = $.isFunction(test) ? test.call(this) : test;
			result = !callback ? test : test ? callback.call(this, test) : undefined;
		}
		return result !== undefined ? result : this;
	}
});