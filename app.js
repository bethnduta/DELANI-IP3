$(document).ready(function () {
    $(".img1").click(function () {
        $(".pdesign").toggle();
        $(".design").toggle();
    })
})

$(document).ready(function () {
    $(".img1").click(function () {
        $(".pdesign").toggle();
        $(".design").toggle();
    })
})

$(document).ready(function () {
    $(".img1").click(function () {
        $(".pdesign").toggle();
        $(".design").toggle();
    })
})

$(document).ready(function () {
    $("form").submit(function (event) {
        let userName = $("input#name").val();
        let userMail = $("input#email").val();
        let userMessage = $("input#message").val();
        if (userName && userMail && userMail != "") {
            alert(`Hi ${userName} we have received your message, Thank you for reaching out to us.`)
        }
        event.preventDefault();
    })
})