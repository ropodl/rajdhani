<?php

namespace Database\Seeders;

use App\Models\LayoutPage;
use Illuminate\Database\Seeder;

class LayoutPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $layoutPages = [
            [
                'name' => 'Home Page',
                'code' => 'home_page'
            ],
            [
                'name' => 'Detail Page',
                'code' => 'detail_page'
            ],
            [
                'name' => 'Header Section',
                'code' => 'header_section'
            ],
            [
                'name' => 'Sidebar Section',
                'code' => 'sidebar_section'
            ],
            [
                'name' => 'Popup Section',
                'code' => 'popup_section'
            ],
        ];
        foreach($layoutPages as $layoutPage){
            LayoutPage::create($layoutPage);
        }
    }
}
