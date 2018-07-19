<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//frontend flexshop
Route::get('/','FlexshopController@index')->name('homePage');
Route::get('/cham-soc-khach-hang','FlexshopController@chamsocKhachhang');
Route::get('/huong-dan-mua-hang','FlexshopController@huongdanMuahang');
Route::get('/giao-nhan-va-thanh-toan','FlexshopController@giaonhanThanhtoan');
Route::get('/doi-tra-va-bao-hanh','FlexshopController@doitraBaohanh');
Route::get('/chinh-sach-thanh-toan','FlexshopController@chinhsachThanhtoan');
Route::get('/chinh-sach-van-chuyen','FlexshopController@chinhsachVanchuyen');
Route::get('/chinh-sach-bao-hanh,-doi-tra','FlexshopController@chinhsachBaohanh');
Route::get('/doi-ngu-chuyen-nghiep','FlexshopController@doinguChuyennghiep');
Route::get('/gia-ca-hop-ly','FlexshopController@giaca');
Route::get('/dam-bao-tien-do','FlexshopController@dambao');
Route::get('/tuyen-dung','FlexshopController@tuyendung');
Route::get('/bao-gia','FlexshopController@baogia');

//project
Route::get('/danh-sach-du-an','FlexshopController@getListProject')->name('listProjects');
Route::get('/danh-sach-du-an/{id}/{cateSlug}','FlexshopController@cateProject')->name('cateListProject');
Route::get('/du-an/{id}/{projectSlug}','FlexshopController@singleProject')->name('postProject');
//news
Route::get('/danh-sach-tin','FlexshopController@getListNews')->name('listNews');
Route::get('/danh-sach-tin/{id}/{cateSlug}','FlexshopController@cateNews')->name('cateListNews');
Route::get('/tin-tuc/{id}/{tintSlug}','FlexshopController@singleNews')->name('postNews');
//design
Route::get('/thiet-ke-noi-that','FlexshopController@getListDesign')->name('listDesign');
Route::get('/thiet-ke-noi-that/{id}/{cateSlug}','FlexshopController@cateDesign')->name('cateListDesign');
Route::get('/noi-that/{id}/{projectSlug}','FlexshopController@singleDesign')->name('postDesign');
//product
Route::get('/danh-sach-san-pham','FlexshopController@getListProduct')->name('getListProduct');
Route::get('/danh-sach-san-pham/{id}/{cateSlug}','FlexshopController@cateProduct')->name('cateListProduct');
Route::get('/danh-sach-san-pham/{id}/{cateSlug}/list','FlexshopController@listProduct')->name('listProduct');
Route::get('/san-pham/{id}/{productSlug}','FlexshopController@singleProduct')->name('postProduct');
//Email
Route::resource('/resMail', 'EmailController',['except' => ['create','update', 'destroy']]);
//Search
Route::get('/multisearch','FlexshopController@multiSearch')->name('multiSearch');
//Contact
Route::get('/putContact','ContactController@store')->name('putContact');
Route::get('/contact','ContactController@index')->name('contactIndex');
Route::get('/lien-he','FlexshopController@lienhe')->name('contactShow');
//
Route::get('/searchProdduct','FlexshopController@searchProd')->name('searchProd');


//back end
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {
    Route::group(['prefix' => 'panel'], function () {
        //category
        Route::resource('category', 'CateController', ['except' => 'destroy']);
        Route::get('category/{idDelete}/destroy', 'CateController@destroy')->name('category.delete');
        //category furniture
        Route::resource('catefurniture', 'CateFurController', ['except' => 'destroy']);
        Route::get('catefurniture/{idDelete}/destroy', 'CateFurController@destroy')->name('catefur.delete');
        //category product
        Route::resource('cateprod', 'CateProdController', ['except' => 'destroy']);
        Route::get('cateprod/{idDelete}/destroy', 'CateProdController@destroy')->name('cateprod.delete');
        //Furniture
        Route::resource('furniture', 'FurnitureController', ['except' => 'destroy']);
        Route::get('furniture/{idDelete}/destroy', 'FurnitureController@destroy')->name('furs.delete');
        // cate News and Feng Shui
        Route::resource('catefengshui', 'CateTtPhongthuyController', ['except' => 'destroy']);
        Route::get('catefengshui/{idDelete}/destroy', 'CateTtPhongthuyController@destroy')->name('fengshui.delete');
        //News and Feng shui
        Route::resource('fengshui', 'FengshuiController', ['except' => 'destroy']);
        Route::get('fengshui/{idDelete}/destroy', 'FengshuiController@destroy')->name('feng.delete');
        //Prods
        Route::resource('prods', 'ProdsController', ['except' => 'destroy']);
        Route::get('prods/{idDelete}/destroy', 'ProdsController@destroy')->name('prods.delete');
        //article
        Route::resource('news', 'NewsController', ['except' => 'destroy']);
        Route::get('news/{idDelete}/destroy', 'NewsController@destroy')->name('news.delete');
        //slider
        Route::resource('slider','SliderController',['except' => 'destroy']);
        Route::get('slider/{idDelete}/destroy','SliderController@destroy')->name('slider.delete');
        //partner
        Route::resource('partner','PartnerController',['except' => 'destroy']);
        Route::get('partner/{idDelete}/destroy','PartnerController@destroy')->name('partner.delete');
        //tags
        Route::resource('tags', 'TagsController', ['except' => 'destroy']);
        Route::get('tags/{idDelete}/destroy', 'TagsController@destroy')->name('tags.delete');
        //user
        Route::resource('user', 'UserController');
    });
});

Auth::routes();

