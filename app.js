$(document).ready(() => {
    $(".img1").click(()=> {
        $(".pdesign").toggle();
        $(".design").toggle();
    })

    $(".img2").click( ()=> {
        $(".pdev").toggle();
        $(".dev").toggle();
    })

    $(".img3").click(()=> {
        $(".pproduct").toggle();
        $(".product").toggle();
    })
    })


$(document).ready(()=> {
    $("form").submit((event)=> {
        let userName = $("input#name").val();
        let userMail = $("input#email").val();
        let userMessage = $("input#message").val();
        if (userName && userMail && userMail != "") {
            alert(`Hi ${userName} we have received your message, Thank you for reaching out to us.`)
        }
        event.preventDefault();
    })
})