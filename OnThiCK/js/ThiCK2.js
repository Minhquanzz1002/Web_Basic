$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    function kiemTraHoTen() {
        let hoten = $("#txtHoTen").val();
        let regexHoTen = /^[a-zA-z]{2,}(\s[a-zA-z]{2,})*$/;
        if (hoten.trim() == "") {
            $("#tbHoTen").html("Họ tên là bắt buộc");
            return false;
        }
        if (!regexHoTen.test(hoten)) {
            $("#tbHoTen").html("Họ tên chỉ gồm các ký tự chữ cái, có thể có ký tự khoảng trắng, mỗi từ có từ 2 ký tự trở lên.");
            return false;
        }
        $("#tbHoTen").html("*");
        return true;
    }

    $("#txtHoTen").blur(kiemTraHoTen);

    function kiemTraSDT() {
        let sdt = $("#txtSDT").val();
        let regexSDT = /^\(\d{4}\)\d{3}-\d{3}$/;
        if (sdt.trim() == "") {
            $("#tbSDT").html("Số điện thoại là bắt buộc");
            return false;
        }
        if (!regexSDT.test(sdt)) {
            $("#tbSDT").html("Điện thoại liên hệ có mẫu sau: (0000)000-000, 0 đại diện cho ký số bất kỳ.");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }

    $("#txtSDT").blur(kiemTraSDT);

    function kiemTraSoNguoi() {
        let songuoi = $("#txtSoNguoi").val();
        if (songuoi.trim() == "") {
            $("#tbSoNguoi").html("Số người là bắt buộc");
            return false;
        }
        if (isNaN(songuoi)) {
            $("#tbSoNguoi").html("Hãy nhập 1 số");
            return false;
        }
        if (songuoi < 1) {
            $("#tbSoNguoi").html("Số người tham gia dự tiệc phải là số, ít nhất là 1.");
            return false;
        }
        $("#tbSoNguoi").html("*");
        return true;
    }

    $("#txtSoNguoi").blur(kiemTraSoNguoi);


    function kiemTraNgayNhan() {
        let ngaydat = $("#txtNgayNhan").val();
        let today = new Date();
        if (ngaydat.trim() == "") {
            $("#tbNgayNhan").html("Ngày nhận tiệc là bắt buộc");
            return false;
        }
        let day = new Date(ngaydat);
        if (day >= today) {
            $("#tbNgayNhan").html("Ngày đặt tiệc trước ngày hiện tại.");
            return false;
        }
        $("#tbNgayNhan").html("*");
        return true;
    }
    $("#txtNgayNhan").blur(kiemTraNgayNhan);

    function kiemTraGio() {
        let gionhan = $("#txtGio").val();
        if (gionhan.trim() == "") {
            $("#tbGio").html("Giờ nhận là bắt buộc");
            return false;
        }
        $("#tbGio").html("*");
        return true;
    }

    $("#txtGio").blur(kiemTraGio);

    function kiemTraLoaiPhong() {
        if (!$("#vip").is(":checked") && !$("#thuong").is(":checked")) {
            $("#tbLoaiPhong").html("Loại phòng là bắt buộc");
            return false;
        }
        $("#tbLoaiPhong").html("*");
        return true;
    }


    let i = 0;
    $("#submit").click(function () {
        if (!kiemTraHoTen() || !kiemTraSDT() || !kiemTraNgayNhan() || !kiemTraSoNguoi() || !kiemTraLoaiPhong() || !kiemTraGio()) {
            return false;
        }
        let hoten = $("#txtHoTen").val();
        let sdt = $("#txtSDT").val();
        let ngaydat = $("#txtNgayNhan").val();
        let songuoi = $("#txtSoNguoi").val();
        let loaitiec = $("#loaitiec").val();
        let gionhan = $("#txtGio").val();
        let loaiphong;
        if ($("#vip").is(":checked")) {
            loaiphong = "VIP";
        } else {
            loaiphong = "Thường"
        }
        let dichvu = [];
        if ($("#rieng").is(":checked")) {
            dichvu.push("Nhân viên phục vụ riêng");
        }
        if ($("#hoatuoi").is(":checked")) {
            dichvu.push("Hoa tươi");
        }

        let thanhvien = "";
        if ($("#thanhvien").is(":checked")) {
            thanhvien = "Thành viên";
        }

        let ghichu = $("#ghichu").val();
        $("tbody").append("<tr><td>" + (++i) + "</td><td>" + hoten + "</td><td>" + sdt + "</td><td>" + ngaydat + "</td><td>" + gionhan + "</td><td>" + songuoi + "</td><td>" + loaitiec + "</td><td>" + loaiphong + "</td><td>" + thanhvien + "</td><td>" + dichvu + "</td><td>" + ghichu + "</td></tr>");
        $("#myModal").modal("hide");
        return true;
    });
});