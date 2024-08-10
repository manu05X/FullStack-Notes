document.getElementById('submit').onclick = () =>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    //AJAX call
    fetch('/data', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    }).then(res=>res.json()).then(data => {
        console.log(data)
    })
}
/*
this code captures the values entered by the user in the "username" and "password" input fields, sends 
them to a server endpoint as JSON data via a POST request, and then logs the server's response in 
JSON format to the console when the "submit" button is clicked.
*/