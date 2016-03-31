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
    
    var filas = data.users.map(getRow);
    var tbody = wd.document.getElementById('list');
    tbody.innerHTML = filas.join(" ");
    
})(DATA, window);

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
