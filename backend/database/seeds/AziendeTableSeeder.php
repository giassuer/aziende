<?php

use Illuminate\Database\Seeder;
use App\Azienda;
use Faker\Generator as Faker;

class AziendeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10; $i++){

            $new_azienda = new Azienda();
            $new_azienda->azienda_nome = $faker->name();
            $new_azienda->azienda_indirizzo = $faker->city();
            $new_azienda->save();
        }
    }
}
