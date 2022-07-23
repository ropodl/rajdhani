<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class AdvertisementRequest extends FormRequest
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
        $rules =  [
            'url' => 'required',
            'advertisement_layout_id' => 'required',
            'advertisement_image' => 'required|file|image:png, jpeg,jpg,gif'
        ];
        if($this->method() == 'PATCH' || $this->method() == 'PUT'){
            $rules['advertisement_image'] = 'nullable|file|image:png, jpeg,jpg,gif';
        }
        return $rules;
    }
}
