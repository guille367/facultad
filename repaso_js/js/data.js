var DATA = (function($){

    var getData = function(){
        var promise = $.ajax({
            url : "data/data.json",
            method : "GET",
            dataType : "json"
        });
        
        return promise;
    };

    return {
        fetch : getData
    }
    
})(jQuery);