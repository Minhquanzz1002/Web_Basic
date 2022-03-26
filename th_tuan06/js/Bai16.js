function kiemTraIP() {
    let ip = document.getElementById("txtIP").value;
    let regexIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ip.trim() == "") {
        document.getElementById("tbIP").innerHTML = "Rỗng không thể kiểm tra";
        return false;
    }
    if (!regexIP.test(ip)) {
        document.getElementById("tbIP").innerHTML = "Địa chỉ IP không hợp lệ.";
        return false;
    }
    document.getElementById("tbIP").innerHTML = "";
    return true;
}

function kiemTraURL() {
    let url = document.getElementById("txtURL").value;
    let regexURL = /(www|https:\/\/|http:\/\/){1}[^\s]+/;
    if (url.trim() == "") {
        document.getElementById("tbURL").innerHTML = "Rỗng không thể kiểm tra";
        return false;
    }
    if (!regexURL.test(url)) {
        document.getElementById("tbURL").innerHTML = "Địa chỉ URL không hợp lệ.";
        return false;
    }
    document.getElementById("tbURL").innerHTML = "";
    return true;
}