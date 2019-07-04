fetch("http://localhost:3000/hamsters")
    .then(res => res.json()) /*si todo sale ok que me devuelva info de la api*/

    .then(data => {
        hamsters = data;
        iniciarApp();
    })

    .catch(err => console.log(err)); /*catch devuelve el error*/