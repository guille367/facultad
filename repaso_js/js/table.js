var TABLE = (function($){

    var $table = $("#data-table tbody");

    var fillTable = function(data){
        $table.html("");
        
        data.forEach(function(user){
            var html = '<tr class="info">';
            html += '<th>'+user.age+'</th>';
            html += '<th>'+user.name+'</th>';
            html += '<th>'+user.company+'</th>';
            html += '<th>'+user.email+'</th>';
            html += '</tr>';
            $table.append(html);
        });
    };
    
    return {
        fill : fillTable
    };

})(jQuery);