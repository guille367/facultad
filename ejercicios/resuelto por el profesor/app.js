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
    return DATA
      .filter(function (user) {
        return user.gender === 'male';
      })
      .map(function (user) {
        return user.email;
      });
  };

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
    return DATA
      .filter(function (user) {
        return user.age > age;
      })
      .map(function (user) {
        var data = {};
        data.name = user.name;
        data.email = user.email;
        data.age = user.age;
        return data;
      });
  };

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function (age) {
    return DATA
      .reduce(function (prev, next) {
        if (prev && prev.age > next.age) {
          return {
            name: prev.name,
            age: prev.age
          };
        }

        return next;
      });
  };

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function (age) {
    return DATA
      .reduce(function (prev, next) {
        return prev + next.age;
      }, 0) / DATA.length;
  };

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function (age) {
    var sumAge = DATA
      .filter(function (user) {
        return user.gender === 'male';
      })
      .reduce(function (prev, next) {
        return prev + next.age;
      }, 0);

    var countGender = DATA.reduce(function (prev, next) {
      if (next.gender === 'male') {
        return 1 + prev;
      }
      return prev;
    }, 0);

    return sumAge / countGender;
  };

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function (age) {
    var sumAge = DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .reduce(function (prev, next) {
        return prev + next.age;
      }, 0);

    var countGender = DATA.reduce(function (prev, next) {
      if (next.gender === 'male') {
        return 1 + prev;
      }
      return prev;
    }, 0);

    return sumAge / countGender;
  };

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function (age) {
    return DATA
      .map(function (user) {
        return user.tags;
      })

      .reduce(function (prev, next) {
        next.forEach(function (tag) {
          prev.push(tag);
        });
        return prev;
      }, [])

      .reduce(function (prev, next) {
        if (prev[next]) {
          prev[next]++;
          return prev;
        }

        prev[next] = 1;
        return prev;
      }, {});
  };

  return lib;

})(DATA);
