
$(function () {

    /* input qty  */
    $('.btn-qty-plus').click(function () {
        var qty = !$('#qty').val() ? 0 : parseInt($('#qty').val());
        qty++;
        $('#qty').val(qty);
    });
    $('.btn-qty-minus').click(function () {
        var qty = !$('#qty').val() ? 1 : parseInt($('#qty').val());
        if (qty > 1) {
            qty--;
        }
        $('#qty').val(qty);
    });
    /* End input qty  */


    // Slide Product 
    $('.slider-product').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // variableWidth: true,
        asNavFor: '.slider-product-nav'
    });

    $('.slider-product-nav').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // variableWidth: true,
        asNavFor: '.slider-product',
    });
    // End Slide Product 


    $('.link-shared').popover({
        html: true,
        // trigger: 'hover',
        // trigger: 'focus',
        placement: 'bottom',
        template: '<div class="popover popover-shared" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        content: function () {
            return $('#content-popover-shared').html()
        }
    });
    $('.link-shared').click();

    //---
    $('.btn-installment').popover({
        html: true,
        // trigger: 'hover',
        // trigger: 'focus',
        placement: 'bottom',
        template: '<div class="popover popover-content-installment" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        content: function () {
            return $('#content-popover-installment').html()
        }
    });
    $('.btn-installment').click();

});

