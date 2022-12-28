var offset = 300;     // kéo xuống khoảng cách 300px thì xuất hiện nút to top
var duration = 1000;  // thời gian 1000 = 1s
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) // khi scroll > 300px
      $("#toTop").fadeIn(duration);   // nút toTop hiện lên Trong thời gian 1 giây
    else
      $("#toTop").fadeOut(duration);  // nút toTop ẩn đi Trong thời gian 1 giây
  });
  $("#toTop").click(function () {     // khi được click thực hiện hành động scroll về top vối thời gian 1 giây
    $("body,html").animate({ scrollTop: 0 }, duration);
    return false;
  });
});