function iniciarApp() {
    miApp.hamsters = hamsters;
}

/*Implementación de VUE*/
var miApp = new Vue({
    el: '#app',
    data: {
        hamsters: {},
        randomHamsters: 0,
        vista: "showAll"
    }, methods: {
        randomHamster: function () {
            this.randomHamsters=Math.floor(Math.random()*(15 - 0)) + 0;
            this.vista="showRandom";
        }, /*le ponemos nombre al method y ejecutamos la función anónima*/
        showAll: function (){
            this.vista="showAll";
        }
    }
});

/*declaramos una var nueva de vue, llamada miApp
va a funcionar en el=elemento, id de app en el dom (div padre), que contiene hamsters*/
