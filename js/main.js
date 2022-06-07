/*
Author: euquias araujo
*/
(function($) {
    "use strict";
    $(document).ready(function() {
        $("#owl-example").owlCarousel();
        var owl = $("#fn-feedbacks");
        owl.owlCarousel({
            items: 3,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false
        });

        /* ==========  START GOOGLE MAP ========== */
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var myLatLng = new google.maps.LatLng(40.70968790739889, -74.06913757324219);

            var mapOptions = {
                zoom: 15,
                center: myLatLng,
                disableDefaultUI: true,
                scrollwheel: false,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,

                styles: [{
                    featureType: 'water',
                    stylers: [{
                        color: '#ECC731'
                    }, {
                        visibility: 'on'
                    }]
                }, {
                    featureType: 'landscape',
                    stylers: [{
                        color: '#f2f2f2'
                    }]
                }, {
                    featureType: 'road',
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: 'road.highway',
                    stylers: [{
                        visibility: 'simplified'
                    }]
                }, {
                    featureType: 'road.arterial',
                    elementType: 'labels.icon',
                    stylers: [{
                        visibility: 'off'
                    }]
                }, {
                    featureType: 'administrative',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#444444'
                    }]
                }, {
                    featureType: 'transit',
                    stylers: [{
                        visibility: 'off'
                    }]
                }, {
                    featureType: 'poi',
                    stylers: [{
                        visibility: 'off'
                    }]
                }]
            };
            var mapElement = document.getElementById('map-canvas');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.70968790739889, -74.06913757324219),
                map: map,
                icon: '',
            });
        }
        // ========== END GOOGLE MAP ========== //
    });

})(jQuery);

