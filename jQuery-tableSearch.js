$.extend($.fn, {
	tableSearch: function(){
		return this.each(function(){
			var targetTable = this, text = {before: "Zoeken: ", input: "zoeken in tabel", clear: "zoekveld legen"},
				search = $("<input/>").css({color: "gray", paddingRight: 16}).val(text.input).bind("focus blur", function(){
					if($(this).val()==text.input){
						$(this).css("color", "").val("");
					}else if($(this).val()==""){
						$(this).css("color", "gray").val(text.input);
					}
				}).insertBefore(targetTable).before(text.before).after(
					$("<img/>").attr({
						src: "Images/cross.png",
						width: 16,
						height: 16,
						title: text.clear
					}).css({
						position: "relative",
						left: "-18px",
						top: "2px",
						cursor: "pointer"
					}).click(function(event){
						search.val("").keyup().blur();  // keyup needed for reset search;
					})
				).keyup(function(event){
					event.preventDefault();
					var keycode = event.keyCode;
					if(keycode === 27){  // esc
						$(this).val("").keyup();  // keyup needed for reset search;
					}else if(!(keycode === 9   // tab
							 || keycode === 13  // enter
							  || keycode === 16  // shift
							   || keycode === 17  // ctrl
								|| keycode === 18  // alt
								 || keycode === 38  // arrow up
								  || keycode === 40  // arrow down
					)){
						var keyword = new RegExp($(this).val(), "i");
						$("tbody tr", targetTable).each(function(){
							var $tr = $(this);
							$("td", $tr).filter(function(){
								return keyword.test($(this).text());
							}).length ? $tr.show() : $tr.hide();
						});
					} 
				});
		});
	}
});