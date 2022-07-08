
const alertaLogin = new bootstrap.Modal(document.getElementById("alertaLogin"))
const userLogin = [
    {
        id: 1001,
        userName: "victoricoma",
        senha:"gordinho123",
        email:"victor.icoma@gmail.com"
    },
    {
        id: 1002,
        userName: "viniciusdom",
        senha:"vi123",
        email:"viniciusdom@gmail.com"
    },
    {
        id: 1003,
        userName: "marcospinheiro",
        senha:"m123456",
        email:"pinheiromarcos@gmail.com"
    },
    {
        id: 1004,
        userName: "elisamarcondes",
        senha:"123456",
        email:"elimarcondes@gmail.com"
    }
    ];

    import userlogin from "./moduloDados.js";
    const aletaLogin = new bootstrap.Modal('#alertaLogin');
    const entrarUsuario = document.getElementById("btnEntrar")

    entrarUsuario.addEventListener("click", _event =>{
        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;
        let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
        if(login === validaLogin.userName && senha === validaLogin.senha) {
            window.location.pathname="/app.html";
    } else {
        alertaLogin.show();
    }
});


