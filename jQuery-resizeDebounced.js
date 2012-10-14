/// http://jsfiddle.net/jerone/Px7he/
$.extend($.fn, {
    resizeDebounced: function(width, callback) {
        width = parseInt(width);
        var keyWidth = "resizeDebounced-width-" + width;

        return this.resize($.proxy(function(event) {
            var currentWidth = this.width();
            if (currentWidth >= width && this.data(keyWidth) !== true) {  // even & bigger;
                this.data(keyWidth, true);
                callback.call(this, event, 1);
            }
            else if (currentWidth < width && this.data(keyWidth) !== false) {  // smaller;
                this.data(keyWidth, false);
                callback.call(this, event, -1);
            }
        }, this));
    }
});