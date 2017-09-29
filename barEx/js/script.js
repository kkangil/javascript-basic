$(document).ready(function(){
    // over test
    $('.menu-body li:eq(0)').addClass('over');
    
    // select test
    var $item = $('.menu-body li:eq(2)');
    $item.addClass('select');
    
    // bar test
    var left = $item.position().left + parseInt($item.css('margin-left'));
    var width = $item.outerWidth();
    $('.bar').css({
        left : left,
        width : width
    });
});