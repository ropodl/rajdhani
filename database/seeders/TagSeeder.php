<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            [
                'name'=>'सरकार'
            ],
            [
                'name'=>'प्राधिकरण'
            ],
            [
                'name'=>'बजेट'
            ],
            [
                'name'=>'एमाले'
            ],
            [
                'name'=>'गाउँपालिका'
            ],
            [
                'name'=>'प्रदेश'
            ],
            [
                'name'=>'मृत्यु'
            ],
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }
    }
}
