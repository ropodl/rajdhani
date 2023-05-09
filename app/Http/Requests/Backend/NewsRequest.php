<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class NewsRequest extends FormRequest
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
        $rules = [
            'news_image' => 'nullable|file|image:png,jpeg,jpg,gif',
            'categories' => 'required|nullable|array',
            'description' => 'required|string',
            'title' => 'required|string',
            'province_id' => 'nullable',
            'author' => 'nullable'
        ];
        if ($this->method() == 'PATCH' || $this->method() == 'PUT') {
            $rules['news_image'] = 'nullable|file|image:png,jpeg,jpg,gif';
        }
        return $rules;
    }
}
