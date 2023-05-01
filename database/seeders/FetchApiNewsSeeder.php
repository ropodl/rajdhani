<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Storage;
use App\Models\News;
use App\Models\Category;
use Str;
use App\Models\Province;

class FetchApiNewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $newsData = Storage::disk('public')->get('news.json');
        $newsData = json_decode($newsData);
        // dd($newsData);
        $categoryIds = Category::where('id', '<', 6)->pluck('id');
        $provinceIds = Province::pluck('id');
        collect($newsData->data->news)->each(function ($news) use ($categoryIds, $provinceIds) {
            $isMainNews = rand(0, 1);
            $newNews = News::create([
                'title' => $news->title,
                'slug' => now()->timestamp,
                'province_id' => $provinceIds->random(),
                'description' => 'यस्तै अपरान्ह ४:४५ बजे दशरथ रंगशालामै हुने अर्को खेलमा त्रिभुवन आर्मी क्लब र संङ्कटा क्लबबीच प्रतिस्पर्धा हुनेछ । यस सिजन अपराजित रहेको आर्मी ११ खेलबाट १९ अंकसहित चौथो स्थानमा छ । आर्मीले जित हात पारे दोस्रो स्थानमा उक्लनेछ ।
                    उता सिजनको सुरुवात उत्कृष्ट गरेको संकटा पछिल्लो खेलहरुमा लय कायम राख्न नसक्दा ११ खेलबाट १५ अंकसहित सातौं स्थानमा छ । आज आर्मीलाई हराउन सके संकटाले शीर्ष पाँचमा स्थान बनाउनेछ ।
    
                    यस सिजनको उपाधि जित्ने टोली र रेलिगेसन पर्ने दुई टोलीको टुङ्गो लागिसकेकाले अब बाँकी खेल शीर्ष तीनमा पर्न र सकेसम्म माथिल्लो स्थानमा लिग सकाउनका लागि हुनेछ ।',
                'is_trending' => rand(0, 1),
                'is_main_news' => $isMainNews,
                'status' => 1,
                'category_id' => $categoryIds->random(),
                'created_at' => $news->published_date
            ]);

            // if(!empty($news->post_image || !empty($news->post_full_image))){
            $newNews->addMediaFromUrl($news->post_full_image)->toMediaCollection();
            // }
        });
    }
}
