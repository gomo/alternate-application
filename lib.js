$(function(){
  $('.alt-app').click(function(e){
    e.preventDefault();

    var start = new Date();
    var $elem = $(this);
    var $iframe = $('<iframe></iframe>');
    $iframe.css({
      'border': 'none',
      'widht': '1px',
      'height': '1px'
    });


    setTimeout(function(){
      var diff = new Date() - start;
      if (diff < 2000) {
        window.location = $elem.attr('data-alt-url');
        iframe.parentNode.removeChild(iframe);
      }
      
      $iframe.remove();
    }, 1000);

    $iframe.attr('src', $elem.attr('href'));
    $iframe.appendTo('body');

    return false;
  });
});