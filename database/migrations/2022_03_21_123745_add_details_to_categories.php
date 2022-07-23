<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailsToCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->boolean('show_on_homepage')->default(0)->comment("1 => active, 0 =>Inactive");
            $table->boolean('show_on_footer')->default(0)->comment("1 => active, 0 =>Inactive");
            $table->boolean('under_news')->default(0)->comment("1 => active, 0 =>Inactive");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('show_on_homepage');
            $table->dropColumn('show_on_footer');
            $table->dropColumn('under_news');
        });
    }
}
