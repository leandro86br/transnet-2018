/* SUPERSLIDES */
$(document).ready(function() {
    $('#slides').superslides({
        inherit_width_from: '.full-width',
        inherit_height_from: '.full-width',
        hashchange: true,
        play: 5000
    });

    $('#slides').on('mouseenter', function() {
        $(this).superslides('stop');
        console.log('Stopped')
    });

    $('#slides').on('mouseleave', function() {
        $(this).superslides('start');
        console.log('Started')
    });
});