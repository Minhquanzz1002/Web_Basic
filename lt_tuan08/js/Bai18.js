function kiemTraHo() {
    let ho = document.getElementById("txtHo").value;
    let regexHo = /^([A-Z]{1}[a-z]+\s?)+$/
    if (ho.trim() == "") {
        document.getElementById("tbHoTen").innerHTML = "Họ là bắt buộc";
        return false;
    } else {
        if (!regexHo.test(ho)) {
            document.getElementById("tbHoTen").innerHTML = "Họ bắt đầu bằng chữ hoa và không chứa số hay ký tự đặc biệt";
            return false;
        }
        document.getElementById("tbHoTen").innerHTML = "";
        return true;
    }
}

function kiemTraTen() {
    let ten = document.getElementById("txtTen").value;
    let regexTen = /^([A-Z]{1}[a-z]+){1}$/
    if (ten.trim() == "") {
        document.getElementById("tbHoTen").innerHTML = "Tên là bắt buộc";
        return false;
    }
    if (!regexTen.test(ten)) {
        document.getElementById("tbHoTen").innerHTML = "Tên bắt đầu bằng chữ hoa và không chứa số hay ký tự đặc biệt";
        return false;
    }
    document.getElementById("tbHoTen").innerHTML = "";
    return true;
}

function kiemTraEmail() {
    let email = document.getElementById("txtEmail").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() == "") {
        document.getElementById("tbEmail").innerHTML = "Email là bắt buộc";
        return false;
    }
    else if (!regexEmail.test(email)) {
        document.getElementById("tbEmail").innerHTML = "Email không hợp lệ";
        return false;
    }
    document.getElementById("tbEmail").innerHTML = "";
    return true;
}

function kiemTraMatKhau() {
    let matkhau = document.getElementById("txtMatKhau").value;
    let regexMatKhau = /^\w{6,}$/;
    if (matkhau.trim() == "") {
        document.getElementById("tbMatKhau").innerHTML = "Mật khẩu là bắt buộc";
        return false;
    }
    else if (!regexMatKhau.test(matkhau)) {
        document.getElementById("tbMatKhau").innerHTML = "Mật khẩu ít nhất 6 ký tự";
        return false;
    }
    document.getElementById("tbMatKhau").innerHTML = "";
    return true;
}

function kiemTraNamSinh() {
    let namsinh = document.getElementById("namsinh").value;
    if (isNaN(namsinh)) {
        document.getElementById("tbNamSinh").innerHTML = "Năm sinh phải là một số";
        return false;
    }else if (namsinh >= 2002 || namsinh <=1900){
        document.getElementById("tbNamSinh").innerHTML = "Năm sinh phải nhỏ hơn 2002 và lớn hơn 1900";
        return false;
    }else{
        document.getElementById("tbNamSinh").innerHTML = "";
        return true;
    }
}

function kiemTra() {
    let email = document.getElementById("txtEmail").value;
    let reEmail = document.getElementById("txtReEmail").value;
    if (!kiemTraHo() || !kiemTraTen() || !kiemTraEmail() || !kiemTraMatKhau() || !kiemTraNamSinh()) {
        return false;
    }
    if (email != reEmail){
        document.getElementById("tbReEmail").innerHTML = "Email không khớp";
        return false;
    }
    return true;
}