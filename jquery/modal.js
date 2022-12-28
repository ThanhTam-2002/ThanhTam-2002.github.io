$(function () {
    $('.btn_view').click(function () {
        $('.modal1').show();
    });
    $('.btn_close').click(function () {
        $('.modal1').hide();
    });
    $(".modal1").click(function (e) {
        // content chứa nội dung modal
        var content = $(".modal-content");
        // Nếu click bên ngoài content thì ẩn modal đi 
        if (!content.is(e.target) && content.has(e.target).length === 0) {
            $('.modal1').hide();
        }
    });
    // modol 2 ................................................................
    $('.btn_cart').click(function () {
        $('.modal2').show();
    });
    $('.btn_close').click(function () {
        $('.modal2').hide();
    });
    $(".modal2").click(function (e) {
        // content chứa nội dung modal
        var content = $(".modal-content");
        // Nếu click bên ngoài content thì ẩn modal đi 
        if (!content.is(e.target) && content.has(e.target).length === 0) {
            $('.modal2').hide();
        }
    });
    // khi nhấn vào nút thêm vào giỏ hàng ẩn modal1 hiện modal2
    $('.btn_add-to-card').click(function () {
        $('.modal1').hide();
        $('.modal2').show();
    });
    // ấn nút tiếp tục mua hàng thì ẩn modal đi
    $('.btn_continue').click(function () {
        $('.modal2').hide();
    });
})