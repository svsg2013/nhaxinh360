function goToTop(){
    $('html,body').animate({scrollTop: 0}, 300);
}
function pageUrl(){
    return document.URL;
}

function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 999999});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
     
    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 500,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}
function changeTotal(value,id){
    var total = 0;
    $.each($('.dataCart'),function(index,value){
        var price = $(this).find('.price').text().replace ( /[^\d.]/g, '' );
        var count = $(this).find('.count').val().replace ( /[^\d.]/g, '' );
        price = parseInt(price) || 0;
        count = parseInt(count) || 0;
        total += ( price * count );
    });
    $("#total").text('Tổng: '+total + 'k');
}
function checkForm(element) {
  var isValid = true;
  $(element+ ' ' + '[type="text"]').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  return isValid;
}
function addCart(id,thisE){
    var cartCookie = readCookie('cart');
    var listCart = [];
    if(cartCookie){
        listCart = cartCookie.split(',');
    }
    listCart.push(id);
    createCookie('cart',listCart);
    
    var itemImg = $(thisE);
    flyToElement($(itemImg), $('#totalCart'));
    $('#totalCart').text(listCart.length);
}
function clearCart(id){
    if($.isNumeric(id)){
        var cartCookie = readCookie('cart');
        var listCart = cartCookie.split(',');
        for(var i = listCart.length; i--;){
            if (listCart[i] == id) listCart.splice(i, 1);
        }
        $('#data'+id).remove();
        if(listCart.length == 0){
            $('a[data-name=gio-hang]').click();
        }
        createCookie('cart',listCart);
    }else{
       createCookie('cart','');
       $('a[data-name=gio-hang]').click();
    }
}
function createCookie(name,value) {
    var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
    if(name == 'cart'){
        $('#totalCart').text(value.length);
    }
}
function getParam(name, url) {
    if (!url) url = document.URL;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function activeMenu(name){
    var active = $('.navAjax').data('active');
    var e = $('.navAjax').data('e') ;
    $('.navAjax '+ e).removeClass(active);
    $('.navAjax '+e+'[data-name="'+name+'"]').addClass(active);
}
function hrefPost(){
    var href = window.location.origin+window.location.pathname;
    if(window.location.search.length > 0){
        if(!getParam('ajax',document.URL)){
            href +='?'+window.location.search+'&ajax=';
        }
    }else{
        href += '?ajax=';
    }
    return href;
}
function removeURLParameter(url, parameter) {
    var urlparts= url.split('?');   
    if (urlparts.length>=2) {
        var prefix= encodeURIComponent(parameter)+'=';
        var pars= urlparts[1].split(/[&;]/g);
        for (var i= pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                pars.splice(i, 1);
            }
        }
        url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}
/*function getAjax(href,his = false){
    var eSidebar = '#sidenav-overlay';
    if ($(eSidebar).length > 0) {
        $(".button-collapse").click();
    }
    $.ajax({
        'url': href,
        'data':{ajax:''},
        cache:false,
    }).done(function( data ) {
        if ($('.navbar-collapse').length && $('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').collapse('toggle');
        }
        var infoPage = $($.parseHTML(data)).filter("#infoPage");
        if($(infoPage).data() !== undefined){
            $.each($(infoPage).data(),function(index,value){
                $('meta[name='+index+']').attr('content',$(infoPage).data(index));
                $('meta[property="og:'+index+'"]').attr('content',$(infoPage).data(index));
            });
            if($(infoPage).data('url') !== undefined){
                var url = removeURLParameter($(infoPage).data('url'),'ajax');
                $('link[rel=canonical]').attr('href',url);
            }
        }

        var title =  $(infoPage).data('title');
        var name = $(infoPage).data('name');
        document.title = title;
        activeMenu(name);
        goToTop();
        $('.contentAjax').html(data);
        if(his){
            window.history.pushState("", "", href);
        }
    });
}*/
/*$(document).ready(function(){
    window.history.pushState("", "", document.URL);

    $('body').on('click','a[data-name]',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        getAjax(href,true);
    });
    
    $('body').on('click','a[data-toggle="tab"]',function(e){
        window.history.pushState("", "", document.URL);
    });

    $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            getAjax(pageUrl());
        }
    });

    $('body').on('submit','.searchAjax',function(e){
        e.preventDefault();
        var value = $(this).serialize();
        var href = $('base').attr('href')+'tim-kiem.html?'+value;
        window.history.pushState("", "", href);
        getAjax(href);
    });
    $('body').on('submit','.contactAjax',function(e){
        e.preventDefault();
        var action = $(this).attr('action');
        $(this).find('[type=submit]').prop('disabled', true);
        switch(action) {
            case 'cart':
                $.each($(this).find('.cookie'),function(){
                    var nameCookie = 'user_' + $(this).attr('name');
                    var value = $(this).val();
                    createCookie(nameCookie,value);
                });
                break;
            case 'design':
                var eContent = $('[data-content]').data('content');
                var content = $(eContent).html();
                $('[name=content]').val(content);
                break;
        }
        var formData =  $(this).serialize();
        $.ajax({
          type: "POST",
          url: $('base').attr('href')+'/modules/action.php?do='+action,
          data: formData,
          beforeSend:function(){
            $('[type=submit]').find('i').attr('class', 'fa fa-spin fa-spinner');
          },
        }).done(function( data ) {
            data = $.parseJSON(data);
            NProgress.done();
            $('[type=submit]').find('i').attr('class', 'fa fa-send');
            $('[type=submit]').removeAttr("disabled");
            switch(action) {
                case 'register':
                case 'login':
                    if(data.error == 0){
                        document.cookie = "email="+data.email;
                        document.cookie = "password="+data.password;
                        window.location.reload();
                    }    
                break;
                case 'cart':
                if(data.error == 0){
                    $.ajax({
                        url:$('base').attr('href')+'views/include/shop-success.php',
                        type: 'POST',
                        data: formData,
                    }).done(function( data ) {
                        goToTop();
                        $('#resultCart').html(data);
                    });
                    clearCart();
                }
                break;
                case 'contact':
                if(data.error == 0){
                    $('.contactAjax').trigger("reset");
                }
                if($('#recaptcha_reload').length){
                    $('#recaptcha_reload').click();
                }
            }
            if(data.text.length){
                alert(data.text);
            }
        });
    });
    NProgress.start();
    var activeF = $('.navAjax');
    if(activeF.length){
        var aF = $('html').data('load');
        $('.navAjax '+$(activeF).data('e')+'[data-name='+aF+']').addClass($(activeF).data('active'));
    }
    reloadScript();
});*/
$( document ).ajaxComplete(function() {
    reloadScript();
    if($('.fb-comments').length > 0) {
        $(".fb-comments").attr('data-href',document.URL)
        FB.XFBML.parse();              
    }
});
$( document ).ajaxSend(function() {
    NProgress.start();
});
function reloadScript(){
    NProgress.done();
    try {
        new WOW().init()
    } catch(e) {
        /*console.log(e);*/
    }
    if($('#infoPage').data('file') == 'home'){
        $(".slideAjax").show();
    }else{
        $(".slideAjax").hide();
    }
}
function logout(){
    if(confirm('Bạn thật sự muốn thoát ?')){
        document.cookie = "email=";
        document.cookie = "password=";
        window.location.reload();
    }
}
$(window).load(function () {
    function a() {
        $.each($(o).find(".owl2-item"), function (a) {
            var e = $(".owl2-controls .owl2-dots span");
            $(e[a++]).append("0" + a++)
        }),
        $(".owl2-item.center")
            .find(".block-des")
            .addClass("blockdes-active"),
        $(".owl2-item.center")
            .find(".save")
            .addClass("save-active")
    }

    function e() {
        $(".owl2-item.center")
            .find(".block-des")
            .addClass("blockdes-active"),
        $(".owl2-item.center")
            .find(".save")
            .addClass("save-active")
    }
    $(".loader").fadeOut("slow");
    var o = $(".sohomeslider-inner-1"),
        o = $(".product-slider-1"),
        t = 3;
    $(".sohomeslider-inner-1").owlCarousel2({
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplaySpeed: 1e3,
        smartSpeed: 500,
        margin: 10,
        autoplayHoverPause: !0,
        startPosition: 0,
        mouseDrag: !0,
        touchDrag: !0,
        dots: !0,
        autoWidth: !0,
        dotClass: "owl2-dot",
        dotsClass: "owl2-dots",
        loop: !0,
        navText: [
            "Next", "Prev"
        ],
        navClass: [
            "owl2-prev", "owl2-next"
        ],
        responsive: {
            0: {
                items: 1,
                autoWidth: !1,
                nav: 0 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 1,
                autoWidth: !1,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 1,
                autoWidth: !1,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 1,
                autoWidth: !1,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 3,
                center: !0,
                nav: 2 >= t
                    ? !1
                    : !0
            }
        },
        onInitialized: a,
        onTranslated: e
    }),
    $(".product-slider-1").owlCarousel2({
        margin: 10,
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 4,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".product-slider-1a").owlCarousel2({
        margin: 10,
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 4,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".banner-slider").owlCarousel2({
        margin: 10,
        loop: true,
        // slideBy: 1,
        items: 1,
        autoplay: true,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1
        // navigation: 0,
        // autoWidth: !1,
        // nav: false
        // loop: !0
        // navSpeed: 500,
        // navText: [
        //     "", ""
        // ]
    }),
    $(".product-slider-2").owlCarousel2({
        margin: 30,
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 4,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".product-slider-3").owlCarousel2({
        margin: 10,
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 4,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".product-slider-4").owlCarousel2({
        margin: 10,
        loop: !1,
        slideBy: 1,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 1,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 1,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 1,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 1,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".doitac_ct").owlCarousel2({
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 6,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    $(".product-slider-5").owlCarousel2({
        margin: 10,
        loop: !1,
        slideBy: 4,
        autoplay: 0,
        autoplayHoverPause: 1,
        autoplayTimeout: 0,
        autoplaySpeed: 1e3,
        startPosition: 0,
        mouseDrag: 1,
        touchDrag: 1,
        navigation: 0,
        autoWidth: !1,
        responsive: {
            0: {
                items: 1,
                nav: 1 >= t
                    ? !1
                    : !0
            },
            480: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            768: {
                items: 2,
                nav: 2 >= t
                    ? !1
                    : !0
            },
            992: {
                items: 3,
                nav: 3 >= t
                    ? !1
                    : !0
            },
            1200: {
                items: 4,
                nav: 4 >= t
                    ? !1
                    : !0
            }
        },
        nav: !0,
        loop: !0,
        navSpeed: 500,
        navText: [
            "", ""
        ],
        navClass: ["owl2-prev", "owl2-next"]
    }),
    jQuery(document).ready(function (a) {})
});
jQuery(document).ready(function ($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        // browser window scroll (in pixels) after which the "back to top" link opacity
        // is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset)
            ? $back_to_top.addClass('cd-is-visible')
            : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });

});
/*(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) 
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "../../../connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=17736654" +
            "49557195";
    fjs
        .parentNode
        .insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.header').addClass('fixmenu');
        } else {
            $('.header').removeClass('fixmenu');
        }
    });    
})*/

function changeTabs() {
    var itemClick = $('.news-pt-content-item');
        itemNews = $('.news');
    itemClick.bind('click', function() {
        var el = $(this);
            data = el.data('value');
            itemShow = $('.news[data-value="' + data + '"]');

        itemNews.removeClass('active');
        itemClick.removeClass('active');
        el.addClass('active');
        itemShow.addClass('active');
    });
}
changeTabs();
function showFb() {
    var itemHover = $('.buttonFixed a');
    itemShow = $('.buttonFixed .fb-page');
    itemHover.bind('click', function(e) {
        e.preventDefault();
        var el = $(this);
        elShow = el.siblings('.fb-page');

        if(elShow.hasClass('active')) {
            itemShow.removeClass('active');
        } else {
            elShow.addClass('active');
        }
    })
}

showFb();