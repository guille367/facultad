function counter(){
    var ret = 0;
    
    function sumador(){
        //ret ++;    
        //console.log(ret);
        return ++ret;
    }
    
    return sumador;
}


