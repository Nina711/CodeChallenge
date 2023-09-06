function submitForm(){
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const fechaNacimiento = document.getElementById('bday').value;

    const formData = {
        nombre: fname,
        apellido: lname,
        fechaDeNacimiento: fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    .then (response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
