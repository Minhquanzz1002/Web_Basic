$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    function kiemTraMaTour() {
        let maTour = $("#txtMa").val();
        let regexMaTour = /([A-Z]{3}-){2}\d{2}-\d{4}/;
        if (maTour.trim() == "") {
            $("#tbMaTour").html("* Bắt buộc nhập");
            return false;
        }
        if (!regexMaTour.test(maTour)) {
            $("#tbMaTour").html("* Mã tour phải dạng XXX-XXX-mm-yyyy");
            return false;
        }
        $("#tbMaTour").html("*");
        return true;
    }

    $("#txtMaTour").blur(kiemTraMaTour);

    function kiemTraHanhTrinh() {
        let hanhTrinh = $("#txtHanhTrinh").val();
        if (hanhTrinh.trim() == "") {
            $("#tbHanhTrinh").html("* Bắt buộc nhập");
            return false;
        }
        $("#tbHanhTrinh").html("*");
        return true;
    }

    $("#txtHanhTrinh").blur(kiemTraHanhTrinh);

    function kiemTraNgayKhoiHanh() {
        let ngayKhoiHanh = $("#txtNgayKhoiHanh").val();
        if (ngayKhoiHanh.trim() == "") {
            $("#tbNgayKhoiHanh").html("* Bắt buộc nhập");
            return false;
        }
        let day = new Date(ngayKhoiHanh);
        let today = new Date();
        today.setDate(today.getDate() + 30);
        if (day < today) {
            $("#tbNgayKhoiHanh").html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgayKhoiHanh").html("*");
        return true;
    }

    $("#txtNgayKhoiHanh").blur(kiemTraNgayKhoiHanh);

    function kiemTraGiaTour() {
        let giaTour = $("#txtGiaTour").val();
        if (giaTour.trim() == "") {
            $("#tbGiaTour").html("* Bắt buộc nhập");
            return false;
        }
        if (isNaN(giaTour)) {
            $("#tbGiaTour").html("* Phải nhập số");
            return false;
        }
        if (eval(giaTour) <= 0) {
            $("#tbGiaTour").html("* Giá tour phải lớn hơn 0");
            return false;
        }
        $("#tbGiaTour").html("*");
        return true;
    }

    $("#txtGiaTour").blur(kiemTraGiaTour);

    let i = 0;
    $("#btnLuu").click(function () {
        if (!kiemTraMaTour() || !kiemTraHanhTrinh() || !kiemTraNgayKhoiHanh() || !kiemTraGiaTour()) {
            return false;
        }
        let maTour = $("#txtMa").val();
        let hanhTrinh = $("#txtHanhTrinh").val();
        let ngayKhoiHanh = $("#txtNgayKhoiHanh").val();
        let thoiGian = $("#txtThoiGian").val();
        let giaTour = $("#txtGiaTour").val();
        let anhDaiDien = $("#fileAnhDaiDien").val().substring(12);
        let row = "<tr><td class=\"pl-4\">" + (++i) + "</td><td>" + maTour + "</td><td>" + hanhTrinh + "</td><td>" + ngayKhoiHanh + "</td><td>" + thoiGian + "</td><td>" + giaTour + "</td><td>" + anhDaiDien + "</td></tr>";
        $("tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    });
});