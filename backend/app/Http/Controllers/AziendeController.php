<?php

namespace App\Http\Controllers;

use App\Azienda;
use App\Persone;
use Illuminate\Http\Request;

class AziendeController extends Controller
{
    public function index(){
        
        try {
            $azienda =Azienda::all();
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$azienda,
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
             $azienda =Azienda::findOrFail($id);
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$azienda,
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
                'azienda_nome' => 'required',
                'azienda_indirizzo' => 'required'
            ]);
      
            $task = new Azienda;
            $task->azienda_nome = $request->azienda_nome;
            $task->azienda_indirizzo = $request->azienda_indirizzo;
            $task->save();
            return response()->json([
                "status"=>200,
                "message"=>"azienda creata",
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
            $azienda =Azienda::findOrFail($id);
            $azienda->azienda_nome = $request->azienda_nome;
            $azienda->azienda_indirizzo = $request->azienda_indirizzo;
            $azienda->save();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$azienda,
           ]);
       } catch (\Exception $e) {
           return response()->json([
               "status"=>500,
               "message"=>"errore generico",
               "data"=>$e,
           ]);
       }
    }

    public function assign($ida, $idp){
        try {
            $azienda =Azienda::findOrFail($ida);
            $persona = Persone::findOrFail($idp);
            $persona->az_id = $ida;
            $persona->save();

            $azienda->delete();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$azienda,
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
                $azienda =Azienda::findOrFail($id);
                $persona = Persone::where('az_id', $id)->get();
                foreach ($persona as $key => $persone) {
                    $persone->az_id = null;
                    $persone->save();
                }

                $azienda->delete();
               return response()->json([
                   "status"=>200,
                   "message"=>"dati ottenuti",
                   "data"=>$azienda,
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
