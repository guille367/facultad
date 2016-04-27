var DATA = (function(){ 
    // IIFE
    var data = {};
    
    data.users = [
        {
            name:'user1',
            genre:'M',
            age: 22,
            email: 'usuario1@gmail.com'
        },
        {
            name:'user2',
            genre:'F',
            age: 19,
            email: 'segundouser@gmail.com'
        },
        {
            name:'user3',
            genre:'F',
            age: 27,
            email: 'terceraloca@gmail.com'
        }
    ];
    
    
    return data;
})(); 

// modulo simple, patter iife -- inmidiately invoked function expression -- invoca la función una única vez.