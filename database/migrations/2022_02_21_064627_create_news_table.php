<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->on('categories')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->string('title');
            $table->string('slug');
            $table->unsignedBigInteger('province_id')->nullable();
            $table->foreign('province_id')->on('provinces')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->text('description');
            $table->boolean('status')->default(1)->comment("1 => active, 0 =>Inactive");
            $table->boolean('is_trending')->default(0)->comment("1 => active, 0 =>Inactive");
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
        Schema::dropIfExists('news');
    }
}
