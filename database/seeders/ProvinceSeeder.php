<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Province;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provinces = [
            [
                'name'=>'प्रदेश १'
            ],
            [
                'name'=>'मधेश प्रदेश'
            ],
            [
                'name'=>'बागमती प्रदेश'
            ],
            [
                'name'=>'गण्डकी प्रदेश'
            ],
            [
                'name'=>'लुम्बिनी प्रदेश'
            ],
            [
                'name'=>'कर्णाली प्रदेश'
            ],
            [
                'name' => 'सुदूरपश्चिम प्रदेश'
            ]
        ];

        foreach ($provinces as $item) {
            Province::create([
                 'name' => $item['name']
            ]);
        }

    }
}
