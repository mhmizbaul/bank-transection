document.getElementById('submit-login').addEventListener('click', function () {
    // get user email 
    const emailFild = document.getElementById('email-fild');
    const userEmail = emailFild.value;



    // get user password 
    const passwordFild = document.getElementById('password-fild');
    const userPassword = passwordFild.value;

    // log in condition apply 
    if (userEmail == 'mizba@gmail.com' && userPassword == 'mizba12') {
        window.location.href = 'home-page.html';
    }
    else {
        console.log('rong user and password please try again ')
    }
});