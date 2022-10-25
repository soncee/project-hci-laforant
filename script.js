// https://www.w3schools.com/Jquery/jquery_ref_selectors.asp

// syntax dasar jquery 
// $(selector).action()


// contoh selector
// $(".p1")
// $("#p2")
// $("p")
// $(".p1, #p2, div")
// $("*")

function show(text)
{
    console.log(text);
}


$(document).ready(function()
{
        $(".slider > div:gt(0)").hide();

        setInterval(function()
        {
            // aksi yang mau di lakuin
            $(".slider > div:first")
            .slideUp(1000)
            .next()
            .slideDown(1000)
            .end()
            .appendTo(".slider")
        },2000 );
}); 
