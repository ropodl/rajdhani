<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'समाज',
                'slug' => 'social',
                'description' => 'This is समाज category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 1,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 1
            ],
            [
                'name' => 'विचार/ब्लग',
                'slug' => 'opinion-Blog',
                'description' => 'This is विचार/ब्लग category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 2
            ],
            [
                'name' => 'ताजा समाचार',
                'slug' => 'fresh-News',
                'description' => 'This is ताजा समाचार category.',
                'status' => 1,
                'show_on_menu' => 0,
                'show_on_homepage' => 1,
                'show_on_footer' => 1,
                'under_news' => 0,
                'sort' => 6
            ],
            [
                'name' => 'रोजगार',
                'slug' => 'employment',
                'description' => 'This is रोजगार category.',
                'status' => 1,
                'show_on_menu' => 0,
                'show_on_homepage' => 1,
                'show_on_footer' => 1,
                'under_news' => 0,
                'sort' => 4
            ],
            [
                'name' => 'अन्तर्राष्ट्रिय',
                'slug' => 'international ',
                'description' => 'This is अन्तर्राष्ट्रिय category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 1,
                'show_on_footer' => 0,
                'under_news' => 1,
                'sort' => 7
            ],
            [
                'name' => 'खेलकुद़़',
                'slug' => 'sports',
                'description' => 'This is खेलकुद़़ category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 1,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 12
            ],
            [
                'name' => 'स्थानिय निर्वाचन',
                'slug' => 'local-election',
                'description' => 'स्थानिय निर्वाचन',
                'status' => 1,
                'show_on_menu' => 1,
                'show_on_homepage' => 1,
                'show_on_footer' => 1,
                'under_news' => 0,
                'sort' => 5
            ],
            [
                'name' => 'जीवनशैली/स्वास्थ्य',
                'slug' => 'lifestyle-Health ',
                'description' => 'This is जीवनशैली/स्वास्थ्य category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 1,
                'sort' => 8
            ],
            [
                'name' => 'बैँक/वित्त',
                'slug' => 'bank-Finance',
                'description' => 'This is बैँक/वित्त category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 1,
                'sort' => 9
            ],

            [
                'name' => 'बजार',
                'slug' => 'market',
                'description' => 'This is बजार category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 3
            ],
            [
                'name' => 'अन्तर्वार्ता',
                'slug' => 'interview',
                'description' => 'This is अन्तर्वार्ता category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 10
            ],
            [
                'name' => 'चुनावी बहस़़',
                'slug' => 'electoral debate',
                'description' => 'This is चुनावी बहस़़ category.',
                'status' => 1,
                'show_on_menu' =>1,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 0,
                'sort' => 11
            ],
            [
                'name' => 'सूचना-प्रविधि',
                'slug' => 'science-Technology',
                'description' => 'This is सूचना-प्रविधि category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 1,
                'show_on_footer' => 1,
                'under_news' => 0,
                'sort' => 13
            ],
            [
                'name' => 'साहित्य',
                'slug' => 'literature',
                'description' => 'This is साहित्य category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 1,
                'show_on_footer' => 1,
                'under_news' => 0,
                'sort' => 14
            ],
            [
                'name' => 'संसद विघटन विशेष',
                'slug' => 'parliamentary-dissolution-special',
                'description' => 'This is संसद विघटन विशेष category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 1,
                'sort' => 15
            ],
            [
                'name' => 'मेरो कथा',
                'slug' => 'my-story',
                'description' => 'This is मेरो कथा category.',
                'status' => 1,
                'show_on_menu' =>0,
                'show_on_homepage' => 0,
                'show_on_footer' => 0,
                'under_news' => 1,
                'sort' => 16
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
