$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    let tk1 = { email: "20098151.quan@student.iuh.edu.vn", password: "0123456789" };
    let tk2 = { email: "20098151@student.iuh.edu.vn", password: "0123456789" };
    let tk3 = { email: "quan@student.iuh.edu.vn", password: "0123456789" };

    let taikhoan = [tk1, tk2, tk3];

    function kiemTraEmail() {
        let email = $("#txtEmail").val();
        let regexEmail = /^[a-zA-z0-9_\.]+@([a-zA-z0-9]+\.)+([a-zA-z0-9]{2,4})$/;
        if (email.trim() == "") {
            $("#tbEmail").html("Email là bắt buộc");
            return false;
        }
        if (!regexEmail.test(email)){
            $("#tbEmail").html("Email không đúng định dạng");
            return false;
        }
        $("#tbEmail").html("");
        return true;
    };

    $("#txtEmail").blur(kiemTraEmail);

    function kiemTraPassword() {
        let password = $("#txtPassword").val();
        let regexPassword = /^[a-zA-z0-9]{10,15}$/;
        if (password.trim() == "") {
            $("#tbPassword").html("Password là bắt buộc");
            return false;
        }
        if (!regexPassword.test(password)) {
            $("#tbPassword").html("Password gồm chữ và số và từ 10 đến 15 ký tự");
            return false;
        }
        $("#tbPassword").html("");
        return true;
    };

    $("#txtPassword").blur(kiemTraPassword);

    $("#btnSubmit").click(function () {
        if (!kiemTraEmail() || !kiemTraPassword()) {
            return false;
        } else {
            let password = $("#txtPassword").val();
            let email = $("#txtEmail").val();
            for (let i = 0; i < taikhoan.length; i++) {
                if (taikhoan[i].email == email & taikhoan[i].password == password) {
                    $("#myModal").modal("hide");
                    alert("Login Successful");
                    $("#taikhoan").html(taikhoan[i].email);
                    return true;
                }
            }
            alert("Login failed: Invalid email or password.");
            return false;
        }
    });
});