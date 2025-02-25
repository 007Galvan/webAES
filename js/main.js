(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
            console.log($videoSrc);
        });
        

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
            // + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // modal ourjob
    $(document).ready(function () {


        $('#imageModal').on('shown.bs.modal', function (e) {
            console.log('abrioooo')
        })

        $('#imageModal').on('hide.bs.modal', function (e) {
            console.log('ceroooooo');
            $("#carousel-inner").empty();
        })


        $(".open-modal-btn").on("click", function () {
            // Get data from the clicked button
             // Or $(this).attr("data-id")
            let name = $(this).data("name");

            console.log(name);

            switch (name){
                case "Item one":
                    $("#carousel-inner").html(` <div class="carousel-item active">
                                <img src="./img/ourjobs/our1.1.png" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our1.2.png" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 2">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our1.3.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 3">
                            </div> `)
                            break;

                case "Item two":
                    $("#carousel-inner").html(` <div class="carousel-item active">
                                <img src="./img/ourjobs/our2.1.png" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our2.2.png" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 2">
                            </div> `)
                            break;

                case "Item three":
                    $("#carousel-inner").html(` <div class="carousel-item active">
                                <img src="./img/ourjobs/our3.1.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our3.2.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 2">
                            </div> `)
                            break;

                case "Item four":
                    $("#carousel-inner").html(` <div class="carousel-item active">
                                <img src="./img/ourjobs/our4.1.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 1">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our4.2.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 2">
                            </div> `)
                            break;
                case "Item five":
                    $("#carousel-inner").html(` <div class="carousel-item active">
                            <img src="./img/ourjobs/our5.1.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 1">
                            </div>
                            <div class="carousel-item">
                            <img src="./img/ourjobs/our5.2.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 2">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/ourjobs/our5.3.jpg" class="d-block w-100 " style="height: 70vh;  object-fit: cover;" alt="Image 3">
                            </div> `)
                             break;

            }

        });
    });
    
})(jQuery);

