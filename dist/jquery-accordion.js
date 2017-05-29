"use strict";
$(document).ready(function () {
    (function ($) {
        $.fn.jqueryAccordion = function (options) {

            //==== SETTINGS ====
            var settings = $.extend({
                animation: "fade"
            }, options);

            return this.each(function () {

                var self = $(this);
                var buttons = self.find('li .accordion-button');
                buttons.siblings('.accordion-text-box').hide();


                buttons.on('click', function () {
                    if (settings.animation === "basic") {
                        buttons.not(this).siblings('.accordion-text-box').hide();
                        $(this).siblings('.accordion-text-box').toggle();
                    }

                    if(settings.animation === "fade") {
                        var paragraph = $(this).siblings('.accordion-text-box').children('p');
                        var textBoxVisibility = $(this).siblings('.accordion-text-box').is(':visible');
                        paragraph.css({'opacity': '0'});

                        buttons.not(this).siblings('.accordion-text-box').slideUp();
                        $(this).siblings('.accordion-text-box').slideToggle();

                        if(textBoxVisibility === true) {
                            paragraph.css({'opacity': '1'});
                            paragraph.animate({opacity: "0"}, 500);
                        }else {
                            paragraph.animate({opacity: "1"}, 1000);
                        }
                    }

                    if(settings.animation === "slide") {
                        buttons.not(this).siblings('.accordion-text-box').slideUp();
                        $(this).siblings('.accordion-text-box').slideToggle(); 
                    }
                });
            });


        }
    }(jQuery));
});