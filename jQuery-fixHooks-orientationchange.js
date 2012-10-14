/*\
Fix orientation for event orientationchange & resize;
\*/
/// http://jsfiddle.net/jerone/5Ygr6/
jQuery.event.fixHooks.orientationchange = jQuery.event.fixHooks.resize = {
    props: ["orientation"],
    filter: function normalizeOrientation(event, original) {
        if (typeof event.orientation !== "undefined") {
            switch (event.orientation) {
            case 0:
            case "0":
            case 180:
            case "180":
            case "portrait":
                {
                    event.orientation = "portrait";
                    break;
                }
            case 90:
            case "90":
            case -90:
            case "-90":
            case "landscape":
                {
                    event.orientation = "landscape";
                    break;
                }
            }
        }

        if (!event.orientation) {
            // if width is greater then height, it's landscape.
            // if width is lower then height, it's portrait.
            // if both are equal, default to portrait.
            var win = jQuery(window);
            event.orientation = win.width() > win.height() ? "landscape" : "portrait";
        }

        return event;
    }
}