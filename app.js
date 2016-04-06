/* var a = 10;

function f(){
    var a = 12;
    
    function f2(){
        var b = 30;
        var a = 13;
        alert(a);
    }
    
    return f2;
} */

(function(data, wd){

    var body = document.getElementById("bodytable");
    
    /*
    data.users.forEach(function(d)
    {
        body.innerHTML = `<tr>
                    <td>`+ d.name + `</td>
                    <td>`+ d.genre +`</td>
                    <td>`+ d.age + `</td>
                    <td>`+ d.email +`</td>
                </tr>`;
    });*/
    
    //var filas = data.users.filter(filterByGenre,'F').map(getRow).reduce(combineRows);
    var filas = data.users.filter(filterByGenre,'F').map(getRow).reduce(combineRows);
    var tbody = wd.document.getElementById('list');
    //tbody.innerHTML = filas.join(" ");
    tbody.innerHTML = filas;
    
    aplicarFiltro = function(genre){
    
    var filas = data.users.filter(filterByGenre,genre).map(getRow).reduce(combineRows);
    var tbody = wd.document.getElementById('list');
    tbody.innerHTML = filas;
    
}
    
})(DATA, window);

var aplicarFiltro;

function filterByGenre(user){
    return user.genre == this;
}

function getRow(user){

    var row = "";
    
    row += "<tr>";
    row +=      "<td>" + user.name + "</td>";
    row +=      "<td>" + user.genre + "</td>";
    row +=      "<td>" + user.age + "</td>";
    row +=      "<td>" + user.email + "</td>";
    row += "</tr>";
    
    return row;
}

function combineRows(anterior, actual){
    return anterior + actual;
}
