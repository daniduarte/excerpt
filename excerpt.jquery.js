// Plugin
//
;(function ( $, undefined ) {

  $.fn.getInfo = function(options) {

    // Settings
    //
    var settings = $.extend({
      suffix: "...",
      limit: 50,
      dev: false
    }, options);

    return this.each(function(){
      
      // The plugin core for each iteration
      //
      var oldContent = $(this).html();
      var newContent = oldContent.substring(0, settings.limit) + " " + settings.suffix;

      if(!settings.dev){
        $(this).html(newContent);
      } else {
        console.log("From >>>", oldContent, ">>> It print", newContent);
      }
      
    });

  };
}( jQuery ));