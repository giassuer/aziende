<?php

use Illuminate\Database\Seeder;
use App\Contratti;
use Faker\Generator as Faker;

class ContrattiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10; $i++){

            $new_contratto = new Contratti();
            $new_contratto->contratto_intestatario = $faker->name();
            $new_contratto->contratto_progetto = $faker->name();
            $new_contratto->save();
        }
    }
}
