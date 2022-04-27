$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    function kiemTraHoTen() {
        let hoTen = $("#txtHoTen").val();
        let regexHoTen = /^[A-Za-z]{2,}(\s[A-Za-z]{2,})*$/;
        if (hoTen.trim() == "") {
            $("#tbHoTen").html("* Bắt buộc nhập");
            return false;
        }
        if (!regexHoTen.test(hoTen)) {
            $("#tbHoTen").html("* Họ tên chỉ gồm các ký tự chữ cái, ký tự khoảng trắng, mỗi từ có từ 2 ký tự trở lên");
            return false;
        }
        $("#tbHoTen").html("*");
        return true;
    }
    $("#txtHoTen").blur(kiemTraHoTen);

    function kiemTraSDT() {
        let sdt = $("#txtDienThoai").val();
        let regexSDT = /^\(\d{4}\)\d{3}-\d{3}$/;
        if (sdt.trim() == "") {
            $("#tbDienThoai").html("* Bắt buộc nhập");
            return false;
        }
        if (!regexSDT.test(sdt)) {
            $("#tbDienThoai").html("* Điện thoại liên hệ có mẫu sau: (0000)000-000, 0 đại diện cho ký số bất kỳ");
            return false;
        }
        $("#tbDienThoai").html("*");
        return true;
    }
    $("#txtDienThoai").blur(kiemTraSDT);


    function kiemTraNgayNhanTiec() {
        let ngayNhan = $("#txtNgayNhan").val();
        if (ngayNhan == "") {
            $("#tbNgayNhan").html("* Bắt buộc nhập");
            return false;
        }
        let day = new Date(ngayNhan);
        let today = new Date();
        if (day <= today) {
            $("#tbNgayNhan").html("* Ngày nhận tiệc phải lớn hơn ngày hiện tại");
            return false;
        }
        $("#tbNgayNhan").html("*");
        return true;
    }
    $("#txtNgayNhan").blur(kiemTraNgayNhanTiec);

    function kiemTraSoNguoi() {
        let soNguoi = $("#txtSoNguoi").val();
        if (soNguoi.trim() == "") {
            $("#tbSoNguoi").html("* Bắt buộc nhập");
            return false;
        }
        if (isNaN(soNguoi)) {
            $("#tbSoNguoi").html("* Phải nhập một số lớn hơn 0");
            return false;
        }
        if (soNguoi < 1) {
            $("#tbSoNguoi").html("* Phải nhập một số lớn hơn 0");
            return false;
        }
        $("#tbSoNguoi").html("*");
        return true;
    }
    $("#txtSoNguoi").blur(kiemTraSoNguoi);

    function kiemTraGioNhanTiec() {
        let gioNhan = $("#txtGioNhan").val();
        if (gioNhan == "") {
            $("#tbGioNhan").html("* Bắt buộc nhập");
            return false;
        }
        $("#tbGioNhan").html("*");
        return true;
    }
    $("#txtGioNhan").blur(kiemTraGioNhanTiec);

    function kiemTraLoaiPhong() {
        if (!$("#chkVIP").is(":checked") && !$("#chkThuong").is(":checked")) {
            $("#tbLoaiPhong").html("* Bắt buộc chọn");
            return false;
        }
        $("#tbLoaiPhong").html("*");
        return true;
    }
    $("#tbLoaiPhong").blur(kiemTraLoaiPhong);

    let i = 0;
    $("#submit").click(function () {
        if (!kiemTraHoTen() || !kiemTraSDT() || !kiemTraNgayNhanTiec() || !kiemTraGioNhanTiec() || !kiemTraSoNguoi() || !kiemTraLoaiPhong()) {
            return false;
        }
        let hoTen = $("#txtHoTen").val();
        let sdt = $("#txtDienThoai").val();
        let ngayNhan = $("#txtNgayNhan").val();
        let gioNhan = $("#txtGioNhan").val();
        let loaiTiec = $("#txtLoaiTiec").val();
        let ghiChu = $("#txtGhiChu").val();
        let soNguoi = $("#txtSoNguoi").val();

        let loaiPhong;
        if ($("#chkVIP").is(":checked")) {
            loaiPhong = "VIP";
        } else {
            loaiPhong = "Thường";
        }

        let thanhVien = "";
        if ($("#txtThanhVien").is(":checked")) {
            thanhVien = "Thành viên";
        }

        let dichVu = [];
        if ($("#txtNhanVienRieng").is(":checked")) {
            dichVu.push("Nhân viên phục vụ riêng");
        }
        if ($("#txtHoaTuoi").is(":checked")) {
            dichVu.push("Hoa tươi");
        }

        $("tbody").append("<tr><td>" + (++i) + "</td><td>" + hoTen + "</td><td>" + sdt + "</td><td>" + ngayNhan + "</td><td>" + gioNhan + "</td><td>" + soNguoi + "</td><td>" + loaiTiec + "</td><td>" + loaiPhong + "</td><td>" + thanhVien + "</td><td>" + dichVu + "</td><td>" + ghiChu + "</td></tr>");
        $("#myModal").modal("hide");
        return true;
    });
});