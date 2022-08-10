<?php

namespace App;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Persone extends Model
{
    use SoftDeletes;
    // protected $fillable = [
    //     'nome',
    //     'cognome',
    //     'mail'
    // ];
    protected $table = 'persone';
    protected $dates = ['deleted_at'];

    public function Azienda() {
        return $this->belongsTo('App\Azienda', 'az_id');
    }

    public function PersoneContratti(){
        return $this->belongsTo('App\Contratti');
    }
}
