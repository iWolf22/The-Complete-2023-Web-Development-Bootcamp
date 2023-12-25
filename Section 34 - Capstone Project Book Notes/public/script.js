function bookRequest(bookId) {
    $.post("/bookRequest", 
    { 
        bookId: bookId,
    }, 
    function (data, status) { 
        location.reload();
    });
}

function bookActions(actionId, buttonType) {
    $.post("/bookActions", 
    { 
        actionId: actionId,
        buttonType: buttonType,
    }, 
    function (data, status) { 
        location.reload();
    });
}

function homePost() {
    $.post("/nav", 
    { 
        nav: "Home",

    }, 
    function (data, status) { 
        location.reload();
    });
}