<?php

namespace Database\Seeders;

use App\Models\AdvertisementLayout;
use App\Models\LayoutPage;
use Illuminate\Database\Seeder;

class AdvertisementLayoutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adLayouts = [
            [
                'title' => '1270 X 200',
                'code' => 'xl_ad'
            ],
            [
                'title' => '840 X 110',
                'code' => 'l_ad'
            ],
            [
                'title' => '370 X 170',
                'code' => 'md_ad'
            ],
            [
                'title' => '290 X 290',
                'code' => 'sm_ad'
            ],
            [
                'title' => '290 X 220',
                'code' => 'xs_ad'
            ],
            [
                'title' => '850 X 560',
                'code' => 'popup_ad'
            ],
        ];
        foreach($adLayouts as $adLayout){
            AdvertisementLayout::create($adLayout);
        }
    }
}
