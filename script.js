var allUser = []

var users = localStorage.getItem('users');


if(users !== null){
    allUser = JSON.parse(users)
}

function signup(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    if(name.value == ''|| email.value == '' || password.value == ''){
        alert("Please fill the required fields")
    }

    else{
        allUser.push(user)
        localStorage.setItem('users',JSON.stringify(allUser))
        location.href ='login.html'
    }
   

}

function login(){
    var name = document.getElementById('name')
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var filters = allUser.filter(function (data){
        return data.email == email.value && data.password == password.value
    })

    // var filterUser = allUser.filter(data=> data.email === email.value && data.password === password.value);
    if(name.value == ''|| email.value == '' || password.value == ''){
        alert("please fill the required fields")
    }

    else if(filters.length){
        alert("user login succesful")
        email.value =""
        password.value = ""
        location.href = 'quiz.html'
        localStorage.setItem('names',name.value)
    }else{
        alert("email/password incorrect")
        location.href = 'index.html'
    }
}

var getuser = localStorage.getItem("Data")
if(getuser !== null){
    allUser = JSON.parse(getuser)
}