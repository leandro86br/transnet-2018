/*
    Author: Leandro.Zambelli@yahoo.com
*/


/* LIST ACTIVE ON SCROLL
*/

function listActive() {

    $(document).on("scroll", onScroll);

    function onScroll(event){
        
        var scrollPos = $(document).scrollTop();
        
        $('#js-list-active a').each(function () {
            
            var
                currLink = $(this),
                refElement = $(currLink.attr("href"));
            
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#js-list-active a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
}

listActive()


/* SIDEBAR STOP AT FOOTER
*/

function sidebarStop() {
    
    $(document).on("scroll", sticky_relocate);
    
    function sticky_relocate() {
        
        var
            window_top = $(document).scrollTop(),
            footer_top = $("#js-stop").offset().top,
            div_top = $('#js-sticky-anchor').offset().top,
            div_height = $("#js-list-active").height(),
            padding = 20; 

        if (window_top + div_height > footer_top - padding) {
            $('#js-list-active').css({top: (window_top + div_height - footer_top + padding) * -1});
        }
        else if (window_top > div_top) {
            $('#js-list-active').addClass('fixed');
            $('#js-list-active').css({top: 20});
        }
        else {
            $('#js-list-active').removeClass('fixed');
        }
    }
    
}

sidebarStop();
