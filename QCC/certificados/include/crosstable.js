/**
 * @param {string} location 
 * @param {string} pageId (optional)	The host runner page id
 * @param {boolean} dashBased (optional)
 * @param {string} dashTableName (optional)
 */
function refresh_crosstable( location, pageId, dashBased, dashTableName ) {
	var pageIdSuffix, getParams;
	
	pageId = pageId || "";
	pageIdSuffix = pageId === "" ? "" : "_" + pageId;  
	
	if ( !location ) {
		location = window.location.href;
		location = location.substr( 0, location.indexOf("?", 0) );
	}
	
	getParams = {
		id: pageId,
		crosstable_refresh: true,
		rndVal: ( new Date() ).getTime(),
		field: $("#select_data" + pageId).val(), //data field
		axis_x: $("#select_group_x" + pageId).val(), // x field index
		axis_y: $("#select_group_y" + pageId).val(), // y field index
		group_func: $("input[name=group_func" + pageId + "]:checked").val() // group function
	};
		
	if ( dashBased ) {
		getParams.mode = "dashreport";
		getParams.table = dashTableName;
	}	
		
	$.post( location, getParams, function( txt ) {
		var obj = JSON.parse( txt ),
			rowsInfo = obj[0],
			colsSummary = obj[1]["data"];
	
		$.each( rowsInfo, function( idx, rowInfo ) {
			if ( isNaN(idx) ) {
				return;
			}
			
			var record = rowInfo["row_record"]["data"], j;
			
			for (j = 0; j < record.length; j++) {
				$("#" + record[j]["id_data"] + pageIdSuffix).html( record[j]["row_value"] );
			}		
			$("#" + rowInfo["id_row_summary"] + pageIdSuffix ).html( rowInfo["row_summary"] );			
		});
		
		$.each( colsSummary, function( idx, colSummary ) {
			$("#" + colSummary["id_col_summary"] + pageIdSuffix ).html( colSummary["col_summary"] );
		});
		
		$("#id_total_summary" + pageIdSuffix).html( obj[2] );
		$("#totals1" + pageIdSuffix).html( obj[3] );
		$("#totals2" + pageIdSuffix).html( obj[3] );
		$("#group_func").html( obj[4] );
	});
}

/**
 * @param {string} rname
 * @param {string} reportFileName
 * @param {string} pageId (optional)	The host runner page id
 */
function refresh_group( rname, reportFileName, pageId ) {
	var axis_x, axis_y;
		
	pageId = pageId || "";
	rname = rname || "";

	axis_x = $("#select_group_x" + pageId).val();
	axis_y = $("#select_group_y" + pageId).val();
	
	window.location.href = reportFileName + "?rname=" + rname + "&axis_x=" + axis_x + "&axis_y=" + axis_y;
}