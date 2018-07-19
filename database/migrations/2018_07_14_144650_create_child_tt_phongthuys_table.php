<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChildTtPhongthuysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('child_tt_phongthuys', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cateParen_id')->unsigned();
            $table->integer('lvl')->unsigned();
            $table->foreign('cateParen_id')
                ->references('id')
                ->on('cate_tt_phongthuys')
                ->onDelete('cascade');
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
        Schema::dropIfExists('child_tt_phongthuys');
    }
}
