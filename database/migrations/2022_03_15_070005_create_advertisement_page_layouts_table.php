<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertisementPageLayoutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisement_page_layouts', function (Blueprint $table) {
            $table->unsignedBigInteger('advertisement_id')->index();
            $table->unsignedBigInteger('layout_page_id');
            $table->foreign('layout_page_id')->on('layout_pages')->references('id')->onUpdate('cascade')->onDelete('cascade');
            $table->string('order')->default(0);
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
        Schema::dropIfExists('advertisement_page_layouts');
    }
}
