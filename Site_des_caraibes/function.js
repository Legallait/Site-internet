function MouseOverSurbrillant(commune){
    jQuery(document).ready(function($){

    });
}
function original(commune) {
    jQuery(document).ready(function ($) {
        jQuery("a." + commune).attr('src', "/images/carte.jpg");

        jQuery("a." + commune).removeClass("Selected");
    });
}