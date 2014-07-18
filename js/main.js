$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "https://docs.google.com/spreadsheet/pub?key=0Am3aL9KWHBI7dEZGZ0lhMlByZHF0dUlyZ2JjWVhKZVE&output=csv",
		dataType: "text",
		success: function(data) {processData(data);}
		});
});

var processData = function(data){
	supportCsvData = $.csv.toArrays(data);
	for(var currentKey = 0; currentKey < supportCsvData.length; currentKey++){
		nextKey = currentKey + 1;
		if(supportCsvData[currentKey][0].match(/^(\d+)\/(\d+)\/(\d+)$/) && supportCsvData[nextKey][0].match(/^(\d+)\/(\d+)\/(\d+)$/)){
			fromDate = supportCsvData[currentKey][0].split("/");
			toDate = supportCsvData[nextKey][0].split("/");
			startDate = new Date(fromDate[2], fromDate[0] - 1, fromDate[1]);
			endDate = new Date(toDate[2], toDate[0] - 1, toDate[1]);
			nowDate = new Date();
			if(nowDate >= startDate && nowDate < endDate){
				for(var titleKey = 0; titleKey < 7; titleKey++){
					if(supportCsvData[currentKey][titleKey] == 1){
						$('#support-man').append(supportCsvData[0][titleKey]);
						break;
					}
				}
				break;
			}
		}
	}
}
