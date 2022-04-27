$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function(){
        $("#myModal").modal();
    });

    function kiemtraten (){
        var i=1;
        let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val()==""){
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraten);

    function KiemTraPassWord() {
        var mauKT = /(?=.*\d).{6,}/;
        if ($("#MK").val()==""){
            $("#tbMK").html(" * phải có chữ, số, ít nhất 6 ký tự")
            return false;
        }
        if (!mauKT.test($("#MK").val())){
            $("#tbMK").html(" * nhập sai")
            return true;
        }
        $("#tbMK").html("*")
        return true;
    }
    $("#MK").blur(KiemTraPassWord);

    function kiemtraDiaChi (){
        var mauKT=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val()==""){
            $("#tbDC").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#DC").val())){
            $("#tbDC").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemtraDiaChi);

    function kiemtraSDT() {
        var mauKT= /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val()==""){
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    } 
    $("#SDT").blur(kiemtraSDT);  
})

$(document).ready(function() {
    var i = 1; 
    $("#btn1").click(function(){
        $("#myModal1").modal();
    });

    function kiemtraten (){
        var i=1;
        let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val()==""){
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraten);

    function KiemTraPassWord() {
        var mauKT = /(?=.*\d).{6,}/;
        if ($("#MK").val()==""){
            $("#tbMK").html(" * phải có chữ, số, ít nhất 6 ký tự")
            return false;
        }
        if (!mauKT.test($("#MK").val())){
            $("#tbMK").html(" * nhập sai")
            return true;
        }
        $("#tbMK").html("*")
        return true;
    }
    $("#MK").blur(KiemTraPassWord);
})

$(document).ready(function() {
    var i = 1; 
    $("#tb1").click(function(){
        $("#tbb1").modal();
    })
})

$(document).ready(function() {
    var i = 1; 
    $("#tb2").click(function(){
        $("#tbb2").modal();
    })
})