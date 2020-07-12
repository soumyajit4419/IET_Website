$("#submit").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == "") {
        $("#name").css({ "border": "2px solid #dd598c" })
        return
    }
    
    else if (email == "") {
        $("#email").css({ "border": "2px solid #dd598c" })
        return
    }

    else if (message == "") {
        $("#message").css({"border":"2px solid #dd598c"})
        return
    }
    else {
        console.log(name);
        console.log(email);
        console.log(message);
    }

})
