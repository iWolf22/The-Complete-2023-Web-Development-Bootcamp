$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5,
        margin: "20px",
    });
});