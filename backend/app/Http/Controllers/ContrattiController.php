<?php

namespace App\Http\Controllers;

use App\Contratti;
use App\Persone;
use App\Personecontratti;
use Illuminate\Http\Request;

class ContrattiController extends Controller
{
    public function index(){
        
        try {
            $contratti =Contratti::all();
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$contratti,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "status"=>500,
                "message"=>"errore generico",
                "data"=>$e,
            ]);
        }
    }

    public function show($id){
        
        try {
             $contratti =Contratti::findOrFail($id);
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$contratti,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "status"=>500,
                "message"=>"errore generico",
                "data"=>$e,
            ]);
        }
    }

    public function create(Request $request){
      

        try {
            $this->validate($request, [
                'contratto_intestatario' => 'required',
                'contratto_progetto' => 'required'
            ]);
      
            $task = new Contratti;
            $task->contratto_intestatario = $request->contratto_intestatario;
            $task->contratto_progetto = $request->contratto_progetto;
            $task->save();
            return response()->json([
                "status"=>200,
                "message"=>"contratto creata",
                "data"=>$task,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "status"=>500,
                "message"=>"errore generico",
                "data"=>$e,
            ]);
        }
    }

    public function update(Request $request, $id){

        try {
            $contratti =Contratti::findOrFail($id);
            $contratti->contratto_intestatario = $request->contratto_intestatario;
            $contratti->contratto_progetto = $request->contratto_progetto;
            $contratti->save();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$contratti,
           ]);
       } catch (\Exception $e) {
           return response()->json([
               "status"=>500,
               "message"=>"errore generico",
               "data"=>$e,
           ]);
       }
    }

    public function delete($id){

        try {
            $contratti =Contratti::findOrFail($id);
            $pivot = PersoneContratti::where('contratti_id', $id)->get();
            foreach ($pivot as $key => $piv) {
                $piv->delete();
            }
            $contratti->delete();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$contratti,
           ]);
       } catch (\Exception $e) {
           return response()->json([
               "status"=>500,
               "message"=>"errore generico",
               "data"=>$e,
           ]);
       }
    }

    // la funzione si aspetta un array di id
    // {
    //     "ids" : [1,2,3,4]
    // }
    public function assign(Request $request, $id) {
        
        try {
            $contratti =Contratti::findOrFail($id);
            $personeArray = $request->ids;
            foreach ($personeArray as $key => $personaAr) {
                $validation = PersoneContratti::where('persona_id', $personaAr)->where('contratti_id', $id)->first();
                if ($validation == null) {
                    $personeContratti = new PersoneContratti;
                    $personeContratti->persona_id = $personaAr;
                    $personeContratti->contratti_id = $id;
                    $personeContratti->save();
                }
                
            }

            
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$contratti,
           ]);
       } catch (\Exception $e) {
           return response()->json([
               "status"=>500,
               "message"=>"errore generico",
               "data"=>$e,
           ]);
       }
    }
}
