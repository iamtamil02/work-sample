/*menu Button*/

function fun() {
    document.getElementById('second').style.display = "block";
}

function fun1() {
    document.getElementById('second').style.display = "none";
}

/*down button*/

$('#down').click(() => {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 2000);
});

$('#menu a').click(function(){
$('#second').hide();
console.log('clicked');
});