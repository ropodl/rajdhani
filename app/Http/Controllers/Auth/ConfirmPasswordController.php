<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Hash;
use \App\Models\User;
use Illuminate\Foundation\Auth\ConfirmsPasswords;
use Illuminate\Http\Request;
class ConfirmPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Confirm Password Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password confirmations and
    | uses a simple trait to include the behavior. You're free to explore
    | this trait and override any functions that require customization.
    |
    */

    use ConfirmsPasswords;

    /**
     * Where to redirect users when the intended url fails.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function changePassword(Request $request){
        $this->validate($request, [
            'old_password'=> 'required',
            'new_password' =>'required|min:8|different:old_password',
            'confirm_password' => 'required|min:8|same:new_password',
        ]);
        $oldPassword = $request->old_password;
        $newPassword = $request->new_password;
        $confirmPassword = $request->confirm_password;
        if(Hash::check($oldPassword, auth()->user()->password)){
            if($newPassword == $confirmPassword){
                $user = User::find(auth()->user()->id);
                $user->update(['password' => Hash::make($newPassword)]);
                return redirect()->back()->with('success','Your password has been updated successfully .');
            }else{
                return redirect()->back()->withErrors(['confirm_password' => "Your new password and confirm password didnot matched."]);
            }
        }else{
            // dd('sorry');
            return redirect()->back()->withErrors(['old_password'=>'Your Old Password is invalid']);
        }
    }
}
