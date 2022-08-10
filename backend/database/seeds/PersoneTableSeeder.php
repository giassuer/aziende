<?php

use Illuminate\Database\Seeder;
use App\Persone;
use Faker\Generator as Faker;

class PersoneTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10; $i++){

            $new_persone = new Persone();
            $new_persone->persona_nome = $faker->name();
            $new_persone->persona_cognome = $faker->name();
            $new_persone->persona_mail = $faker->email();
            $new_persone->save();
        }
    }
}
