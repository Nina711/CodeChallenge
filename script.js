function submitForm(){
    const nombre = document.getElementById('fname').value;
    const apellido = document.getElementById('lname').value;
    const fechaDeNacimiento = document.getElementById('bday').value;

    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaDeNacimiento: fechaDeNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    .then (Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
