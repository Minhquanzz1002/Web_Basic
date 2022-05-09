$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });

    $("#txtKyGui").change(function() {
        let kygui = $("#txtKyGui").val();
        let dongia = kygui == "15kg" ? 210000 : (kygui == "25kg" ? 250000 : 300000);
        $("#txtPhuThu").val(dongia);
    });

    function kiemTraHoTen(){
        let hoten = $("#txtHoTen").val();
        let regexHoTen = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
        if (hoten.trim() == ""){
            $("#tbHoTen").html("(*) Bắt buộc nhập");
            return false;
        }
        if (!regexHoTen.test(hoten)){
            $("#tbHoTen").html("(*) Họ tên là các ký tự, có thể có khoảng trắng, mỗi từ phải bắt đầu bằng ký tự in hoa");
            return false;
        }
        $("#tbHoTen").html("(*)");
        return true;
    }

    $("#txtHoTen").blur(kiemTraHoTen);

    function kiemTraNgayDi(){
        let ngaydi = $("#txtNgayDi").val();
        if (ngaydi == ""){
            $("#tbNgayDi").html("(*) Bắt buộc nhập");
            return false;
        }
        let today = new Date();
        let day = new Date(ngaydi);
        today.setDate(today.getDate() + 7);
        if (day < today){
            $("#tbNgayDi").html("(*) Ngày đi phải sau ngày hiện tại từ 7 ngày trở lên");
            return false;
        }
        $("#tbNgayDi").html("(*)");
        return true;
    }

    $("#txtNgayDi").blur(kiemTraNgayDi);

    function kiemTraSDT(){
        let sdt = $("#txtSDT").val();
        let regexSDT = /^0[987]\d{8}$/;
        if (sdt.trim() == ""){
            $("#tbSDT").html("(*) Bắt buộc nhập");
            return false;
        }
        if (!regexSDT.test(sdt)){
            $("#tbSDT").html("(*) Số điện thoại gồm 10 chữ số trong đó 2 chữ số đầu là 09, 08 hoặc 07 và theo sau là 8 chữ số");
            return false;
        }
        $("#tbSDT").html("(*)");
        return true;
    }

    $("#txtSDT").blur(kiemTraSDT);

    let i = 0;
    $("#submit").click(function() {
        if (!kiemTraHoTen() || !kiemTraNgayDi() || !kiemTraSDT()){
            return false;
        }
        let hoten = $("#txtHoTen").val();
        let ngaydi = $("#txtNgayDi").val();
        let sdt = $("#txtSDT").val();
        let phuthu = $("#txtPhuThu").val();
        let thanhtoan;
        if ($("#chuyenkhoan").is(":checked")){
            thanhtoan = "Chuyển khoản";
        }else{
            thanhtoan = "Tiền mặt";
        }

        let row = "<tr><td>"+(++i)+"</td><td>"+hoten+"</td><td>"+ngaydi+"</td><td>"+sdt+"</td><td>"+phuthu+"</td><td>"+thanhtoan+"</td></tr>";
        $("tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    });
    
});