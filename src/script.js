function iniciarApp() {
    miApp.hamsters = hamsters;
}

/*Implementación de VUE*/
var miApp = new Vue({
    el: '#app',
    data: {
        hamsters: {},
        randomHamster: {}
    }, methods: {
        randomBtn: function{()=>}
    }
});

function randomHamster(){

}
/*declaramos una var nueva de vue, llamada miApp
va a funcionar en el=elemento, id de app en el dom (div padre), que contiene hamsters*/