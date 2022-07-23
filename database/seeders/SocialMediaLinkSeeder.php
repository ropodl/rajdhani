<?php

namespace Database\Seeders;

use App\Models\SocialMediaLink;
use Illuminate\Database\Seeder;

class SocialMediaLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SocialMediaLink::create([
            'facebook_link' => 'www.facebook.com',
            'instagram_link' => 'www.instagram.com',
            'youtube_link' => 'www.youtube.com',
            'twitter_link' => 'www.twitter.com',
            'linkedin_link' => 'www.linkedin.com',
        ]);
    }
}
