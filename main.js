
function show(text)
{
    console.log(text);
}


$(document).ready(function()
{
        $(".slider > div:gt(0)").hide();

        setInterval(function()
        {
            $(".slider > div:first")
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo(".slider")
        },2000 );
}); 

$(document).ready(function()
{
        $(".slider2 > div:gt(0)").hide();

        setInterval(function()
        {
            // aksi yang mau di lakuin
            $(".slider2 > div:first")
            .slideUp(1000)
            .next()
            .slideDown(1000)
            .end()
            .appendTo(".slider2")
        },5000 );
}); 
