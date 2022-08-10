<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersoneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persone', function (Blueprint $table) {
            $table->id();
            $table->string('persona_nome',100);
            $table->string('persona_cognome',100);
            $table->string('persona_mail',100);
            $table->unsignedBigInteger('az_id');
            $table->foreign('az_id')->references('id')->on('azienda');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persone');
    }
}
