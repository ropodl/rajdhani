<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            [
                'name' => 'about-us',
                'url' => 'https://bishwashkhabar.com/aboutus',
                'title' => 'हाम्रो बारेमा',
                'description' => 'Bishwash Khabar Pvt Ltd is Nepal’s online news portal and was launched in Nepali in 2022.
                   The portal strives to serve its visitors with authentic, verified news and updates without bias, favor or fear.
                    Our team strives to cover news in Nepal and around the world for our site visitors to keep themselves updated at all times. We would be more than delighted to receive your comments, views and ideas.',
                'status' => 1,
            ],
            [
                'name' => 'privacy-policy',
                'url' => 'https://bishwashkhabar.com/terms',
                'title' => 'नियम र सर्तहरू',
                'description' => 'Introduction
                    Bishwash Khabar takes the private nature of your personal information very seriously.

                    This privacy policy describes how we treat the information we collect when you visit and use our websites. Please read this notice very carefully.

                    Website Visitors

                    Like most website operators, Bishwash Khabar collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Bishwash Khabar’s purpose in collecting non-personally identifying information is to better understand how Bishwash Khabar’s visitors use its website. From time to time, Bishwash Khabar may release non-personally-identifying information in the aggregate, e.g. by publishing a report on trends in the usage of its website.

                    Bishwash Khabar also collects potentially personally-identifying information like Internet Protocol (IP) addresses. Bishwash Khabar does not use such information to identify its visitors, and does not disclose such information, other than under the same circumstances that it uses and discloses personally-identifying information, as described below.

                    Gathering of Personally-Identifying Information

                    Certain visitors to Bishwash Khabar’s websites choose to interact with Bishwash Khabar in ways that require Bishwash Khabar to gather personally-identifying information. The amount and type of information that Bishwash Khabar gathers depends on the nature of the interaction. For example, we ask visitors who sign up for Bishwash Khabar to provide a username and email address. In each case, Bishwash Khabar collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Bishwash Khabar.

                    Bishwash Khabar does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities',

                'status' => 1,
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
