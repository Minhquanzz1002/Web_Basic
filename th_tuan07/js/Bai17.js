function checkUser() {
    let user = document.getElementById("txtUser").value;
    let regexUser = /^[\w]{2,}$/;
    if (user.trim() == "") {
        document.getElementById("tbUser").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    if (!regexUser.test(user)) {
        document.getElementById("tbUser").innerHTML = "Tên đăng nhập phải gồm các chữ cái hoặc số, ít nhất 2 ký tự, hoặc _";
        return false;
    }
    document.getElementById("tbUser").innerHTML = "*";
    return true;
}

function checkPassword() {
    let pass = document.getElementById("txtPass1").value;
    let regexPass = /^[a-z\d]{6,}$/i;
    if (pass.trim() == "") {
        document.getElementById("tbPass").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    if (!regexPass.test(pass)) {
        document.getElementById("tbPass").innerHTML = "Mật khẩu phải gồm chữ, số hoặc ký tự đặc biệt, ít nhất 6 ký tự";
        return false;
    }
    document.getElementById("tbPass").innerHTML = "*";
    return true;
}

function checkName() {
    let name = document.getElementById("txtName").value;
    let regexName = /^([A-Z]{1}[a-z]+\s?)+$/;
    if (name.trim() == "") {
        document.getElementById("tbName").innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!regexName.test(name)) {
        document.getElementById("tbName").innerHTML = "Tên phải bắt đầu bằng chữ hoa và không chứa số hay ký tự đặc biệt";
        return false;
    }
    document.getElementById("tbName").innerHTML = "*";
    return true;
}

function checkTel() {
    let tel = document.getElementById("txtTel").value;
    let regexTel = /^[0]{1}[0-9]{9}$/;
    if (tel.trim() == "") {
        document.getElementById("tbTel").innerHTML = "";
        return true;
    } else {
        if (!regexTel.test(tel)) {
            document.getElementById("tbTel").innerHTML = "Số điện thoại phải gồm 10 số và bắt đầu bằng số 0";
            return false;
        }
        document.getElementById("tbTel").innerHTML = "";
        return true;
    }
}

function checkEmail(){
    let email = document.getElementById("txtEmail").value;
    let regexEmail = /^\w+@[a-z]+.([a-z]+.?)+[^.]$/;
    if (email.trim() == "") {
        document.getElementById("tbEmail").innerHTML = "";
        return true;
    } else {
        if (!regexEmail.test(email)) {
            document.getElementById("tbEmail").innerHTML = "Email không hợp lệ";
            return false;
        }
        document.getElementById("tbEmail").innerHTML = "";
        return true;
    }
}

function check() {
    let pass = document.getElementById("txtPass1").value;
    let re_pass = document.getElementById("txtPass2").value;
    if (!checkUser() || !checkPassword() || !checkName() || !checkTel() || !checkEmail()) {
        return false;
    }
    if (pass != re_pass) {
        document.getElementById("tbPass2").innerHTML = "Mật khẩu không khớp";
        return false;
    }
    return true;
}