<?php

use App\contratti;
use App\Persone;
use App\Personecontratti;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class PersoneContrattiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $persone = Persone::all();
        $contratti = contratti::get('id');

        foreach ($persone as $key => $persona) {
            $pivot = new Personecontratti();
            $pivot->persona_id = $persona->id;
            $pivot->contratti_id = rand(1,$contratti->count());
            $pivot->save();
        }


    }
}
