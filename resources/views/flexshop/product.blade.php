@extends('flexshop')
@section('meta')
    <base href="{{url('/')}}"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('upload/logo.png')}}"/>
    <title>Nhà xinh 360 | Sản phẩm</title>
    <script type="text/javascript" src="{{asset('admin/plugins/jQuery/jQuery-2.1.4.min.js')}}"></script>
    <link
            rel="stylesheet"
            type="text/css"
            href="{{asset('admin/plugins/font-awesome/css/font-awesome.min.css')}}"/>
    <script type="text/javascript" src="{{asset('views/template/src/bootstrap.minb09c.js')}}"></script>
    <link
            href="{{asset('views/template/src/bootstrap.minb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <script
            defer="defer"
            type="text/javascript"
            src="{{asset('admin/plugins/nprogress/nprogress.js')}}"></script>
    <link
            rel="stylesheet"
            type="text/css"
            href="{{asset('admin/plugins/nprogress/nprogress.css')}}"/>
    <link
            rel="stylesheet"
            type="text/css"
            href="{{asset('admin/plugins/bootstrap-dropdown/css/animate.min.css')}}"/>
    <link
            rel="stylesheet"
            type="text/css"
            href="{{asset('admin/plugins/bootstrap-dropdown/css/bootstrap-dropdownhover.min.css')}}"/>
    <script
            defer="defer"
            type="text/javascript"
            src="{{asset('admin/plugins/bootstrap-dropdown/js/bootstrap-dropdownhover.min.js')}}"></script>
    <script defer="defer" type="text/javascript" src="{{asset('admin/plugins/wow/wow.min.js')}}"></script>
    <script defer="defer" type="text/javascript" src="{{asset('admin/assets/js/custom.js')}}"></script>
    <link
            href="{{asset('views/template/src/filecssb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href="{{asset('views/template/src/owl.carouselb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href="{{asset('views/template/src/dq.scssb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href="{{asset('views/template/src/font-awesomeb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href="{{asset('views/template/src/jquery.fancyboxb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href="{{asset('views/template/src/styleb09cb09c.css?v=180')}}"
            rel='stylesheet'
            type='text/css'
            media='all'/>
    <link
            href='https://fonts.googleapis.com/css?family=Poppins:400,700,500,600'
            rel='stylesheet'
            type='text/css'>
    <div id="fb-root"></div>
    <address class="vcard" style="display:none">
        <img src='{{asset('upload/logo.png')}}' title='Flexshop' alt='Flexshop' class="photo"/>
        <a class="url fn" href="index.html">Flexshop</a>
        <div class="org">Flexshop Co, Ltd</div>
        <div class="adr">
            <div class="street-address">68/1D Chu Văn An. phường 26, quận Bình Thạnh</div>
            <span class="locality">Ho Chi Minh</span>,
            <span class="region">Binh Thanh</span>
            <span class="postal-code">70000</span>
        </div>
        <div class="tel">0934 154 886</div>
    </address>
    <div itemtype="http://schema.org/website ">
        <div itemtype="http://schema.org/website" itemscope="">
            <div>
                        <span itemprop="keywords">
                            <a rel="tag" href="index.html"></a>
                        </span>
            </div>
        </div>
    </div>
@endsection
@section('content')
    <div class="contentAjax">
        <section style="background:#fff">
            <div class="container">
                @if(!empty($thisBreadcrumb))
                    {!! $thisBreadcrumb !!}
                    @else
                    <div class="breadcrumbs">
                        <ul class="breadcrumb">
                            <li><a href="{{route('homePage')}}" data-title="Trang chủ"><i class="fa fa-home"></i> Trang chủ</a><span class="divider"></span></li>
                            @if(!empty($flag))
                                <li>Tìm kiếm Sản Phẩm</li>
                                @else
                                <li>Sản phẩm</li>
                            @endif
                        </ul>
                    </div>
                @endif
            </div>
        </section>
        <div class="page_collection">
            <div class="container">
                <div class="row">
                    @include('flexshop.partial.product.navLeft')
                    <div class="col-xs-12 col-sm-8 col-md-9">
                    @include('flexshop.partial.product.bannerProduct')
                    <!--Sắp xếp-->
                        @include('flexshop.partial.product.sort')
                        <style>
                            a.button.button-grid {
                                background: #3ab54a !important;
                            }
                        </style>
                        <div class="row product-thumb">
                            @if(!empty($thisProductList))
                                {!! $thisProductList !!}
                            @else
                                <p>Chưa có dữ liệu sản phẩm</p>
                            @endif
                            <div class="col-md-12">
                                <center>
                                    <nav class="pagination">
                                        <ul class='page-numbers'>

                                            <li><span class='page-numbers current'>
                     <i class="fa fa-home"></i>                     </span></li>

                                            <li>
                                                <a class='page-numbers' href="san-pham1f4a.html?&amp;page=1"
                                                   data-name="san-pham" data-title="Sản phẩm trang 1">
                                                    1 </a>
                                            </li>

                                            <li>
                                                <a class='page-numbers' href="san-pham3818.html?&amp;page=2"
                                                   data-name="san-pham" data-title="Sản phẩm trang 2">
                                                    2 </a>
                                            </li>

                                            <li>
                                                <a class='page-numbers' href="san-pham29a2.html?&amp;page=3"
                                                   data-name="san-pham" data-title="Sản phẩm trang 3">
                                                    3 </a>
                                            </li>
                                            <li>
                                                <a class="next page-numbers" href="san-pham1f4a.html?&amp;page=1"
                                                   data-name="san-pham" data-title="Sản phẩm trang 1">&rarr;
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </center>
                            </div>
                            <style>
                                .page-numbers.current {
                                    background: #000;
                                    color: #fff !important;
                                }

                                .pagination {
                                    text-align: center;
                                }

                                .pagination, .wp-prev-next {
                                    margin: 1.5em 0;
                                }

                                .pagination ul {
                                    border: 1px solid #b7b7b7;
                                    display: inline-block;
                                    white-space: nowrap;
                                    padding: 0;
                                    clear: both;
                                }

                                .pagination li:first-child {
                                    border-left: none;
                                }

                                .pagination li {
                                    border-left: 1px solid #b7b7b7;
                                    padding: 0;
                                    margin: 0;
                                    float: left;
                                    display: inline;
                                    overflow: hidden;
                                }

                                a:link, a:visited:link {
                                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
                                }

                                a:-webkit-any-link {
                                    text-decoration: none !important;
                                }

                                .pagination a, .pagination span {
                                    margin: 0;
                                    text-decoration: none;
                                    padding: 0;
                                    line-height: 1em;
                                    font-size: 1em;
                                    font-weight: normal;
                                    padding: 0.75em;
                                    min-width: 1em;
                                    display: block;
                                }
                            </style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .contact-info .shop-name .icon {
                float: left;
                height: 45px;
                width: 35px;
                background: url({{asset('views/template/hstatic.net/581/1000123581/1000171890/icon_shopb09cb09c.png?v=180')}}) no-repeat 0px 0px/35px;
                margin-right: 9px;
                margin-top: 5px;
            }
        </style>
    </div>
@endsection