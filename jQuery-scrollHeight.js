$.extend($.fn, {
	scrollHeight: function() {
		var that = $(this).get(0);
		return Math.max(
			Math.max(that.body.scrollHeight, that.documentElement.scrollHeight),
			Math.max(that.body.offsetHeight, that.documentElement.offsetHeight),
			Math.max(that.body.clientHeight, that.documentElement.clientHeight)
		) || 0;
	}
});