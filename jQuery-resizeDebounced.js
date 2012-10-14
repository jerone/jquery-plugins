/// http://jsfiddle.net/jerone/Px7he/
$.extend($.fn, {
    resizeDebounced: function(width, callback) {
        var keyWidth = "resizeDebounced-width-" + width;

        return this.resize($.proxy(function(event) {
            if (!isNaN(width) && this.width() >= width && this.data(keyWidth) !== true) { // even & bigger;
                this.data(keyWidth, true);
                callback.call(this, event, 1);
            }
            else if (!isNaN(width) && this.width() < width && this.data(keyWidth) !== false) { // smaller;
                this.data(keyWidth, false);
                callback.call(this, event, -1);
            }
        }, this));
    }
});