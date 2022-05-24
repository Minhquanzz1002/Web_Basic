$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    function kiemTraHoTen() {
        let hoten = $("#txtHoTen").val();
        let regexHoTen = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
        if (hoten.trim() == "") {
            $("#tbHoTen").html("Họ tên là bắt buộc nhập");
            return false;
        }
        if (!regexHoTen.test(hoten)) {
            $("#tbHoTen").html("Họ tên là các ký tự, có thể có khoảng trắng, mỗi từ phải bắt đầu bằng ký tự in hoa");
            return false;
        }
        $("#tbHoTen").html("(*)");
        return true;
    }
    $("#txtHoTen").blur(kiemTraHoTen);

    function kiemTraNgayDi() {
        let strngaydi = $("#txtNgayDi").val();
        if (strngaydi.trim() == "") {
            $("#tbNgayDi").html("Ngày đi là bắt buộc nhập");
            return false;
        }
        var today = new Date();
        var datengaydi = new Date(strngaydi);
        today.setDate(today.getDate() + 7);

        if (datengaydi < today) {
            $("#tbNgayDi").html("Ngày đi phải sau ngày hiện tại từ 7 ngày trở lên");
            return false;
        }
        $("#tbNgayDi").html("(*)");
        return true;
    }

    $("#txtNgayDi").blur(kiemTraNgayDi);

    function kiemTraSDT() {
        let sdt = $("#txtSDT").val();
        let regexSDT = /^0[789][0-9]{8}$/;
        if (sdt.trim() == "") {
            $("#tbSDT").html("Số điện thoại là bắt buộc nhập");
            return false;
        }
        if (!regexSDT.test(sdt)) {
            $("#tbSDT").html("Số điện thoại gồm 10 chữ số trong đó 2 chữ số đầu là 09, 08 hoặc 07 và theo sau là 8 chữ số");
            return false;
        }
        $("#tbSDT").html("(*)");
        return true;
    }

    $("#txtSDT").blur(kiemTraSDT);

    $("#kygui").change(function () {
        let kygui = $("#kygui").val();
        let dongia = kygui == "15kg" ? 210000 : (kygui == "25kg" ? 250000 : 300000);
        $("#dongia").val(dongia);
    });

    let i = 0;
    $("#submit").click(function () {
        if (!kiemTraHoTen()) {
            return false;
        }
        let hoten = $("#txtHoTen").val();
        let sdt = $("#txtSDT").val();
        let strngaydi = $("#txtNgayDi").val();
        let dongia = $("#dongia").val();
        let thanhtoan;
        if ($("#chuyentien").is(":checked")){
            thanhtoan = "Chuyển khoản";
        }else{
            thanhtoan = "Tiền mặt";
        }
        let chuoi = "<tr><td>" + (++i) + "</td><td>" + hoten + "</td><td>" + strngaydi + "</td><td>" + sdt + "</td><td>"+dongia+"</td><td>"+thanhtoan+"</td></tr>"
        $("tbody").append(chuoi);
        $("#myModal").modal("hide");
        return true;
    });
});