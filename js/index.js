$(document).ready(function() {

    $("#contact button").click(function() {
        var name = $('#contact input[name="name"]');
        var e_mail = $('#contact input[name="e-mail"]');
        var message = $('#contact textarea');
        if (name.is(":invalid") || e_mail.is(":invalid") || message.is(":invalid")) {
            $("#contact p").css("display", "block");
        }
    });
    var scrollBtn = $(".scrollTop");
    scrollFunction();

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.css("display", "block");
        } else {
            scrollBtn.css("display", "none");
        }
    }

    scrollBtn.click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    var menu = $(".navbar i");
    menu.click(function() {
        if (menu.hasClass("fa-bars") == true) {
            menu.removeClass("fas");
            menu.removeClass("fa-bars");
            menu.addClass("fa");
            menu.addClass("fa-close");
            $(".navbar").css("background-color", "#CA952B");
        } else {
            menu.removeClass("fa");
            menu.removeClass("fa-close");
            menu.addClass("fas");
            menu.addClass("fa-bars");
            $(".navbar").css("background-color", "transparent");
        }

    });


    $("#about img").click(function() {
        $("#about .content").css("opacity", "0");
        $("#about .overLay").css("opacity", "0");
    });
    scrollImg();
    carousel();

    function carousel() {
        setInterval(scrollImg, 10000);
    };


    function scrollImg() {
        var col = $(".receipes .row .col-6");
        setTimeout(() => {
            col.eq(0).removeClass("order-1").addClass("order-4");
            col.eq(1).removeClass("order-2").addClass("order-3");
            col.eq(2).removeClass("order-3").addClass("order-2");
            col.eq(3).removeClass("order-4").addClass("order-1");
        }, 2000);
        setTimeout(() => {
            col.eq(0).removeClass("order-4").addClass("order-3");
            col.eq(1).removeClass("order-3").addClass("order-4");
            col.eq(2).removeClass("order-2").addClass("order-1");
            col.eq(3).removeClass("order-1").addClass("order-2");
        }, 4000);
        setTimeout(() => {
            col.eq(0).removeClass("order-3").addClass("order-2");
            col.eq(1).removeClass("order-4").addClass("order-3");
            col.eq(2).removeClass("order-1").addClass("order-4");
            col.eq(3).removeClass("order-2").addClass("order-1");
        }, 6000);
        setTimeout(() => {
            col.eq(0).removeClass("order-2").addClass("order-1");
            col.eq(1).removeClass("order-3").addClass("order-2");
            col.eq(2).removeClass("order-4").addClass("order-3");
            col.eq(3).removeClass("order-1").addClass("order-4");
        }, 8000);
    }

});