$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    $("#kyhan").change(function () {
        let kyhan = $("#kyhan").val();
        let dongia = kyhan == "3 tháng" ? 300000 : (kyhan == "6 tháng" ? 500000 : 800000);
        $("#txtDonGia").val(dongia);
    });

    // Thông tin liên lạc các từ phải bắt đầu bằng chữ in hoa
    function kiemTraThongTinLienLac() {
        let thongTinLienLac = $("#lienLac").val();
        let regexThongTinLienLac = /^[A-Z]{1}[A-Za-z]+(\s[A-Z][a-zA-Z]*)*$/;
        if (thongTinLienLac.trim() == "") {
            $("#tbLienLac").html("(*) Bắt buộc nhập");
            return false;
        }
        if (!regexThongTinLienLac.test(thongTinLienLac)) {
            $("#tbLienLac").html("(*) Bắt đầu bằng ký tự in hoa");
            return false;
        }
        $("#tbLienLac").html("(*)");
        return true;
    };

    $("#lienLac").blur(kiemTraThongTinLienLac);

    // SDT gồm 10 số bắt đầu bằng 09, 08, 07
    function kiemTraSDT() {
        let sdt = $("#txtSDT").val();
        let regexSDT = /^0[987]\d{8}/;
        if (sdt.trim() == "") {
            $("#tbSDT").html("(*) Bắt buộc nhập");
            return false;
        }
        if (!regexSDT.test(sdt)) {
            $("#tbSDT").html("(*) Gồm 10 số và bắt đầu bằng 09, 08, 07");
            return false;
        }
        $("#tbSDT").html("(*)");
        return true;
    };

    $("txtSDT").blur(kiemTraSDT);

    function kiemTraDiaChiNhanBao() {
        let diachi = $("#txtDiaChi").val();
        let regexDiaChi = /^[A-za-z0-9\s]+$/;
        if (diachi.trim() == "") {
            $("#tbDiaChi").html("(*) Bắt buộc nhập");
            return false;
        }
        if (!regexDiaChi.test(diachi)) {
            $("#tbDiaChi").html("(*) Bao gồm ký tự số, ký tự chữ, khoảng trắng");
            return false;
        }
        $("#tbDiaChi").html("(*)");
        return true;
    }

    $("txtDiaChi").blur(kiemTraDiaChiNhanBao);

    let i = 0;
    $("#datBao").click(function () {
        if (!kiemTraThongTinLienLac() || !kiemTraSDT() || !kiemTraDiaChiNhanBao()) {
            return false;
        }
        let thongTinLienLac = $("#lienLac").val();
        let gia = [];
        if ($("#ttHangNgay").is(":checked")) {
            gia.push("Tuổi trẻ hằng ngày");
        }
        if ($("#ttCuoi").is(":checked")) {
            gia.push("Tuổi trẻ hằng ngày");
        }
        if ($("#ttChuNhat").is(":checked")) {
            gia.push("Tuổi trẻ hằng ngày");
        }

        let thanhtoan;
        if ($("chuyenKhoan").is(":checked")) {
            thanhtoan = "Chuyển khoản";
        } else {
            thanhtoan = "Tiền mặt";
        }

        let dongia = $("#txtDonGia").val();
        let tongthanhtien = dongia * gia.length;

        let kyhan = $("#kyhan").val();
        let diachi = $("#txtDiaChi").val();
        let row = "<tr><td>" + (++i) + "</td><td>" + gia.join(", ") + "</td><td>" + kyhan + "</td><td>" + thongTinLienLac + "</td><td>" + diachi + "</td><td>" + tongthanhtien + "</td><td>" + thanhtoan + "</td></tr>"
        $("tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    });
});