$(function () {
    $("img").fadeOut(3000)
    $("img").fadeIn(3000)
    $("img").delay(2000)

    $(function () {
        $("img").click(function () {
            $("img").fadeOut("slow");
            $("img").delay(1000);
            setTimeout(function () { window.location = '../home.html' }, 1000);
        });
    });
});


