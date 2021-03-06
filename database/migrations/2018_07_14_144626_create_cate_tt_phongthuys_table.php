<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCateTtPhongthuysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cate_tt_phongthuys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('metaName');
            $table->string('description')->nullable();
            $table->string('alias');
            $table->integer('weight')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cate_tt_phongthuys');
    }
}
