<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $model = new SiteSetting();
        $model->name = 'राजधानी प्रेस';
        $model->executive_manager = 'Executive Manager';
        $model->editor = 'Editor Name here';
        $model->executive_editor = 'Executive Editor';
        $model->registration_no = '000-000-000';
        $model->address = 'नयाँ बानेश्वर, काठमाडौ';
        $model->phone1 = 977 - 9869802755;
        $model->phone2 = 977 - 9869802755;
        $model->email = 'Rajdhanipress1@gmail.com';
        $model->map_iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14134.065952909976!2d85.32395955!3d27.670427399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb1dad6439%3A0xbb1689fdcee3740b!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1645676905017!5m2!1sen!2snp';
        $model->description = 'This is your most relevant and bishwasilo news portal.';
        $model->addMediaFromUrl(asset('/frontend/img/logo.png'))->toMediaCollection();
        $model->addMediaFromUrl(asset('/frontend/img/logo.png'))->toMediaCollection('logo_with_text');
        $model->save();
        $model->logo = $model->getMedia()[0]->getFullUrl();
    }
}
