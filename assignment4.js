
(function() {
	$.ajax({ type:'GET', dataType:'json', url:"http://www.mattbowytz.com/simple_api.json?data=all", success:function(searchData){
		$(".flexsearch-input").keyup(function(){
			var searchTerm = $(".flexsearch-input").val();				
			$(".autocomplete").empty();
			$.each(searchData.data, function(i1,v1){
				$.each(v1, function(i2,v2){	
					if(searchTerm.toLowerCase() == v2.substring(0,searchTerm.length).toLowerCase()){
						if(searchTerm.length > 0){
							$('<div class="autocomplete"><br>'+ v2 +'<br></div>').appendTo("#mainForm");
						}	
					}	
				});
			});
		});	
	}});
})();