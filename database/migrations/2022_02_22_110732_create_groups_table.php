<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug');
            $table->string('position');
            $table->boolean('status')->default(1)->comment("1 => active, 0 =>Inactive");
            $table->boolean('show_on_menu')->default(0)->comment("1 => active, 0 =>Inactive");
            $table->boolean('show_on_homepage')->default(0)->comment("1 => active, 0 =>Inactive");
            $table->boolean('show_on_footer')->default(0)->comment("1 => active, 0 =>Inactive");
            $table->boolean('is_featured')->default(0)->comment("1 => active, 0 =>Inactive");
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
        Schema::dropIfExists('groups');
    }
}
