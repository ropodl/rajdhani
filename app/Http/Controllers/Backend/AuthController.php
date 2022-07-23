<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;

class AuthController extends Controller
{
    public function updateProfile(AuthRequest $request){
//     dd($request->all());
    $user = User::find(auth()->user()->id);
    $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'description' => $request->description
    ]);
    return redirect()->back()->with('update-success', 'Your Profile has been successfully updated.');

}

    public function maintenanceMode(Request $request){
        $mode = Cache::get('maintenance', 'off');
        if($mode == 'on'){
            Artisan::call('up');
            $mode = 'off';
        }else{
            Artisan::call('down');
            $mode = 'on';
        }
        Cache::forever('maintenance', $mode);
        return redirect()->back()->withMsg('Maintenance mode is set to '. $mode);
    }
}
