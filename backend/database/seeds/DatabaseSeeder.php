<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AziendeTableSeeder::class);
        $this->call(PersoneTableSeeder::class);
        $this->call(ContrattiTableSeeder::class);
    }
}
