

$(document).ready(function(){
	$("button")[0].addEventListener("click", function(){
		DB={};
		update_view([]);                    
		redraw_path_bar([["Home","#"]]);

		$.getJSON( '/books/api/search',{"path":"/","query":$("input")[0].value}, function( data ){
			// var DB={};;
		     DBZ=data;
		    $.getJSON( API_URL,{"path":"/",depth:DEPTH}, function( data ){
		        DB=data;	    
				for (var i=0; i< DBZ["result"].length;i++){
			    	var path_prefixer=DBZ["result"][i]
			    	path_prefixer[0].push("#")

			    	var l =  path_prefixer.length
			    	path_prefixer[0].push(l)
			    	if (typeof(get_prefix_dict(path_prefixer))==="string"){
			    		var is_file=true;
			    	}
			    	else{
			    		var is_file=false;
			    	}
			        $(".list-group").append(create_elem_col(path_prefixer.slice(0,l-1),path_prefixer[l-1][0],is_file))
			    }
			});
		});
	})
})