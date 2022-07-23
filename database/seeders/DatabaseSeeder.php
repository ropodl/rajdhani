<?php

namespace Database\Seeders;

use App\Models\AdvertisementLayout;
use App\Models\Category;
use App\Models\LayoutPage;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(SiteSettingSeeder::class);
        $this->call(SocialMediaLinkSeeder::class);
         $this->call(CategorySeeder::class);
        $this->call(GroupSeeder::class);
        $this->call(ProvinceSeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(TagSeeder::class);
        $this->call(AdvertisementLayoutSeeder::class);
        $this->call(LayoutPageSeeder::class);
        $this->call(PageSeeder::class);
        $this->call(FetchApiNewsSeeder::class);
    }
}
