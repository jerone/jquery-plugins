$.extend($.fn, {
	fire: function(evttype) {
		return this.each(function() {
			if (document.createEvent) {
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent(evttype, false, false);
				this.dispatchEvent(evt);
			} else if (document.createEventObject) {
				this.fireEvent("on" + evttype);
			}
		});
	}
});