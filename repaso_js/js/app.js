(function($, DATA, TABLE){
    
    
    DATA.fetch().then(function(data){
        TABLE.fill(data);
    });
    
    
})(jQuery, DATA);