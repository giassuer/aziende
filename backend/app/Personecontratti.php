<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Personecontratti extends Model
{
    public function persone(){
        return $this->hasMany('App\Persone', 'persone_id', 'id');
    }

    public function contratti(){
        return $this->hasMany('App\Contratti', 'contratti_id', 'id');
    }

    protected $table="persone_contratti";
    protected $dates = ['deleted_at'];
}
