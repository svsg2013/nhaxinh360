<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
        xmlns="http://www.w3.org/1999/xhtml"
        xml:lang="vi"
        lang="vi"
        data-load="trang-chu">

<meta http-equiv="content-type" content="text/html;charset=utf-8"/>

<head>
@yield('meta')
</head>
<body id="flexshop" class="">
<div class="page-container">
    @include('flexshop.partial.infoTopPage')
    @include('flexshop.partial.menuSearch')
    @yield('content')
    @include('flexshop.partial.footer')
</div>
<div class="quickview-product dqdt-popup"></div>
<a href="#0" class="cd-top">Top</a>
<script
        src={{asset('views/template/src/jquery.fancyboxb09cb09c.js?v=180')}}
        type='text/javascript'></script>
<script
        src={{asset('views/template/src/owl.carouselb09cb09c.js?v=180')}}
        type='text/javascript'></script>
<script
        src={{asset('views/template/src/jquery.easing.1.3b09cb09c.js?v=180')}}
        type='text/javascript'></script>
</body>

</html>
<div class="buttonFixed">
    <a
            id="linkShop"
            class="btn btn-danger"
            target="_blank"
            style="background-color:#3ab54a;border-color:#3ab54a"
            href="javascript:void(0)"
            data-name="gio-hang"
            data-title="Giỏ hàng">
        <i class="fa fa-facebook"></i>
        <small id="totalCart" style="color:white"></small>
    </a>
    <div class="fb-page"
         data-href="https://www.facebook.com/facebook"
         data-width="380"
         data-hide-cover="false"
         data-show-facepile="false">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnhaxinh360.vn%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=332914573468035" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
</div>
<div id="fb-root"></div>
