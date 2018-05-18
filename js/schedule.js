//small script that makes schedule system work on homepage and schedule page - aaron
(function($) {

    //nav bar animation while scrolling
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Tabs on schedule
    $(".buttons").on('click','a',function(){
        event.preventDefault();
       var classToShow = this.id.split('-')[1],
           filter = classToShow === "all" ? 'div': '.' + classToShow;
       $(".table tbody tr td")
           .children().show().addClass('active')
           .not(filter).hide();
    });
    $(".buttons").on('click','#choice-all',function(){
        $(".table tbody tr td div").removeClass('active');
    }); 

})(jQuery); 
