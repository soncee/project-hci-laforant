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
            .slideDown(1000)
            .next()
            .slideUp(1000)
            .end()
            .appendTo(".slider")
        },5000 );
});

$(document).ready(function()
{
        $(".slider2 > div:gt(0)").hide();

        setInterval(function()
        {
            // aksi yang mau di lakuin
            $(".slider2 > div:first")
            .fadeOut(0)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo(".slider2")
        },5000 );
});