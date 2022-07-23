<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class SiteSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'executive_manager'=>'nullable',
            'editor'=>'nullable',
            'executive_editor'=>'nullable',
            'registration_no'=>'nullable',
            'address'=>'required',
            'phone1'=>'required',
            'phone2'=>'nullable',
            'email'=>'required',
            'facebook_link'=>'nullable',
            'instagram_link'=>'nullable',
            'youtube_link'=>'nullable',
            'twitter_link'=>'nullable',
            'linkedin_link'=>'nullable',
            'map_iframe'=>'required',
            'description'=>'required',
            'maintenance_mode'=>'nullable',
            'logo' => 'nullable|file|image:png, jpeg,jpg,gif',
            'logo_with_text' => 'nullable|file|image:png, jpeg,jpg,gif'
        ];
    }
}
