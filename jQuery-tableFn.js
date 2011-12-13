$.extend($.fn, {
	addRow : function(value){
		value = value || [];
        var trs = [];
		$(this).each(function(){
			var tr = $(this), tds = 0, i = 0;
			switch(tr.context.nodeName.toLowerCase()){
				case "table":
					tr = tr.children("tbody");
				break;
				case "tbody":
					tr = tr;
				break;
				case "tr":
				case "td":
					tr = tr.parents("tbody");
				break;
			}
			tr.parent().find("tr").each(function(){
				tds = Math.max(tds, $(this).find("td, th").length);
			});
			tr = $("<tr/>").appendTo(tr);
			while(i<tds){
				tr.append($("<td/>").html(value[i] || ""));
				i++;
			}
			trs.push(tr);
		});
		return $(trs);
	},
	updateRow : function(value){
		value = value || [];
		return $(this).each(function(){
			var tr = $(this), tds = tr.find("td");
			tds.each(function(i){
				$(this).html(value[i] || "");
			});
		});
	},
	deleteRow : function(){
		return $(this).remove();
	},
	addCol : function(value){
		value = value || [];
		return $(this).each(function(){
			var table = $(this);
			switch(table.context.nodeName.toLowerCase()){
				case "table":
					table = table;
				break;
				case "thead":
				case "tbody":
				case "tfoot":
					table = table.parent();
				break;
				case "tr":
				case "th":
				case "td":
					table = table.parents("table");
				break;
			}
			table.find("tr").each(function(i){
				$(this).append($($(this).parent().is("thead") ? "<th/>" : "<td/>").html(value[i] || ""));
			});
		});
	}
});

//console.log($("#table").addRow(["1","<b>2</b>",$("<em>3</em>"),"4"]));
//console.log($("#table").addCol(["1","<b>2</b>",$("<em>3</em>"),"4"]));