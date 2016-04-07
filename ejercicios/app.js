var MAIN = (function (DATA) {

  var lib = {};

  /*
    realizar las operaciones usando los metosos map,  reduce y filter y combinaciones entre ellos
  */

  // Retornar una array de strings (el nombre de los usarios de sexo femenino)
  lib.femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .map(function (user) {
        return user.name;
      });
  };

  // Retornar una array de strings (el email de los usarios de sexo masculino)
  lib.maleUsersEmails = function () {
      return DATA.filter(function(user){
            return user.gender === 'male';
      }).map(function(user){
            return user.email;  
      });
      
  };

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
      return DATA
            .filter(function(user){
            return user.age > age;
        })
      .map(function(user){
                return { nombre: user.name , mail: user.email , edad: user.age };
      });

  };

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function (age) {
      return DATA.reduce(function(ant,act,indice,arr){
          if(act.age >= ant.age)
              return { name: act.name , age: act.age }; 
          
          return { name: ant.name , age: ant.age };
      },DATA[0]);
  };

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function (age) {
      var arr = DATA
            .reduce(function(act,ant,indice){
             return { age: (ant.age += act.age) , total: indice + 1};
      },DATA[0]);
       
      return arr.age / arr.total;
  };

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function (age) {
      
      var arr = DATA.filter(function(user){
          return user.gender === 'male';
      })
      
      arr = arr.reduce(function(ant,act,indice){
          return { age: (ant.age += act.age), total : (indice + 1)  }
      },arr[0]);
      
      return arr.age / arr.total;
  };

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function (age) {
    var arr = DATA.filter(function(user){
              return user.gender === 'female';
          })

          arr = arr.reduce(function(ant,act,indice){
              return { age: (ant.age += act.age), total : (indice + 1)  }
          },arr[0]);

      return arr.age / arr.total;
  };

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function (age) {

  };

  return lib;

})(DATA);
