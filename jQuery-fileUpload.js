$.extend($.fn, {
	fileUpload: function(){
		return this.each(function(){
			var txt = $("<input/>").attr("type", "text"), 
				btn = $("<input/>").attr("type", "button").val("Bladeren").addClass("ui-state-default ui-corner-all").css("cursor", "pointer"),
				that = $(this).hide().css({position: "absolute", opacity: 0, zIndex: 9999}).before(txt, btn).change(function(){
					txt.val(that.val());
				});
			
			//var red1 = $("<div/>").css({position: "absolute", border: "1px solid red"}).appendTo(document.body),
			//	red2 = red1.clone().appendTo(document.body);
			
			$(that.parent()).mousemove(function(event){
				var matchTxt = {
					x: txt.offset().left,
					y: txt.offset().top,
					width: txt.outerWidth(),
					height: txt.outerHeight()
				}, matchBtn = {
					x: btn.offset().left,
					y: btn.offset().top,
					width: btn.outerWidth(),
					height: btn.outerHeight()
				}, mouse = {
					x: event.pageX,
					y: event.pageY
				}, uploader = {
					x: (($("#klantenUpload").width()/6)*5),
					y: ($("#klantenUpload").height()/2)
				};
				
				/*
				red1.css({
					left: matchTxt.x,
					top: matchTxt.y,
					width: matchTxt.width,
					height: matchTxt.height
				});
				red2.css({
					left: matchBtn.x,
					top: matchBtn.y,
					width: matchBtn.width,
					height: matchBtn.height
				});
				//*/
				
				if(between(matchTxt, mouse) || between(matchBtn, mouse)){
					that.show().css({
						left: mouse.x - uploader.x,
						top: mouse.y - uploader.y
					});
				}else{
					that.hide();
				}
				txt.val(that.val());
			});
		});
	}
});

function between(surface, vector){
	return vector.x > surface.x && vector.x < (surface.x + surface.width)
		&& vector.y > surface.y && vector.y < (surface.y + surface.height);
}