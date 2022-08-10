<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('persone','PersonaController@index');
Route::post('persone','PersonaController@create');
Route::get('persone/{id}', 'PersonaController@show');
Route::put('persone/{id}', 'PersonaController@update');
Route::delete('persone/{id}', 'PersonaController@delete');

Route::get('azienda','aziendeController@index');
Route::post('azienda','aziendeController@create');
Route::get('azienda/{id}', 'aziendeController@show');
Route::put('azienda/{id}', 'aziendeController@update');
Route::delete('azienda/{id}', 'aziendeController@delete');
Route::post('assegnazione/persone/{ida}/{idp}', 'aziendeController@assign');
Route::post('assegnazione/contratti/{id}', 'contrattiController@assign');

Route::get('contratti','contrattiController@index');
Route::post('contratti','contrattiController@create');
Route::get('contratti/{id}', 'contrattiController@show');
Route::put('contratti/{id}', 'contrattiController@update');
Route::delete('contratti/{id}', 'contrattiController@delete');

