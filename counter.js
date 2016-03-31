function counter(){
    var ret = 0;
    
    function sumador(){
        //ret ++;    
        //console.log(ret);
        return ++ret;
    }
    
    return sumador;
}
var q = require("data");

alert(q.users.name["user1"]);
