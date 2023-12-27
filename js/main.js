$(function () {
    $(".menu a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
    });

    $(".header__link").on("click", function (e) {
        e.preventDefault(); // Предотвращает стандартное поведение ссылки
        var sectionId = $(this).attr("href"); // Получаем идентификатор секции из атрибута href
        var sectionTop = $(sectionId).offset().top; // Получаем верхнюю позицию секции
        $("body, html").animate({ scrollTop: sectionTop }, 1500); // Плавная прокрутка к секции
    });

    $(".menu__btn, .menu .menu__list").on("click", function () {
        $(".menu").toggleClass("menu--active");
    });

    var menu = $(".menu");
    var scrollChange = 1;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            menu.addClass("menu--bg");
        } else {
            menu.removeClass("menu--bg");
        }
    });

    var mixer = mixitup(".gallery__items");

    $(".blog__slider-inner").slick({
        dots: true,
        arrows: false,
    });
});
