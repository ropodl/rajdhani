<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Group;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $groups = [
              [
                  'title'=>'राजनीति',
                  'slug'=>'politics',
                  'position'=>'1',
                  'status'=>'1',
                  'show_on_menu'=>'1',
                  'show_on_homepage'=>'1',
                  'show_on_footer'=>'0',
                  'is_featured'=>'0',
                  'is_trending'=>'0'
              ],
              [
                'title'=>'विजनेश',
                'slug'=>'business',
                'position'=>'2',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'1',
                'show_on_footer'=>'0',
                'is_featured'=>'0',
                'is_trending'=>'1'
            ],
            [
                'title'=>'शिक्षा',
                'slug'=>'education',
                'position'=>'3',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'0',
                'is_featured'=>'0',
                'is_trending'=>'0'
            ],
            [
                'title'=>'अपराध',
                'slug'=>'crime',
                'position'=>'4',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'1',
                'is_featured'=>'0',
                'is_trending'=>'0'
            ],
            [
                'title'=>'मनोरञ्जन',
                'slug'=>'entertainment',
                'position'=>'5',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'1',
                'is_featured'=>'1',
                'is_trending'=>'0'
            ],
            [
                'title'=>'जीवनशैली',
                'slug'=>'lifestyle',
                'position'=>'6',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'1',
                'is_featured'=>'0',
                'is_trending'=>'0'
            ],
            [
                'title'=>'प्रवास',
                'slug'=>'foreign-news',
                'position'=>'7',
                'status'=>'1',
                'show_on_menu'=>'1',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'1',
                'is_featured'=>'0',
                'is_trending'=>'0'
            ],
            [
                'title'=>'विशेष श्रृंखला',
                'slug'=>'special-episode',
                'position'=>'8',
                'status'=>'1',
                'show_on_menu'=>'0',
                'show_on_homepage'=>'0',
                'show_on_footer'=>'1',
                'is_featured'=>'0',
                'is_trending'=>'0'
            ],

        ];

        foreach($groups as $item){
               Group::create($item);
        }
    }
}
