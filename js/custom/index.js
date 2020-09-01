$menuSearch = $('.menu-search')

var $openFullscreenMenu = $('#openFullscreenMenu');
var $closeFullscreenMenu = $('#closeFullscreenMenu');
var $rightNav = $('.right-nav');

$openFullscreenMenu.on('click', function(){
    $menuSearch.addClass('open');
})

$closeFullscreenMenu.on('click', function(){
    $menuSearch.removeClass('open');
})

for(var i = 0; i < $rightNav.find('> li').length; i++){

    $rightNav.find('> li').eq(i).on('mouseenter', function(){
        $(this).find('img').attr('src', '/img/icons/left-hover.png')
        $(this).addClass('active');
    })

    $rightNav.find('> li').eq(i).on('mouseleave', function(){
        $(this).find('img').attr('src', '/img/icons/left-stroke.png')
        $(this).removeClass('active');
    })

}

