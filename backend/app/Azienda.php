<?php

namespace App;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Azienda extends Model
{
    use SoftDeletes;

    protected $table = 'azienda';
    protected $fillable = [
        'nome',
        'indirizzo',
    ];
    protected $dates = ['deleted_at'];

    public function persone() {
        return $this->hasMany('App\Persone', 'az_id', 'id');
    }

}

