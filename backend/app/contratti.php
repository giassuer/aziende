<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class contratti extends Model
{
    use SoftDeletes;

    protected $table = 'contratti';
    protected $fillable = [
        'nome',
        'progetto',
    ];
    protected $dates = ['deleted_at'];

    public function PersoneContratti(){
        return $this->hasMany('App\PersoneContratti');
    }
}
