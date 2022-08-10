<?php

namespace App\Http\Controllers;

use App\Persone;
use App\Personecontratti;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index(){
        
        try {
            $persone =Persone::all();
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$persone,
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
             $persone =Persone::findOrFail($id);
            return response()->json([
                "status"=>200,
                "message"=>"dati ottenuti",
                "data"=>$persone,
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
                'persona_nome' => 'required',
                'persona_cognome' => 'required',
                'persona_mail' => 'required'
            ]);
      
            $task = new Persone;
            $task->persona_nome = $request->persona_nome;
            $task->persona_cognome = $request->persona_cognome;
            $task->persona_mail = $request->persona_mail;
            $task->save();
            return response()->json([
                "status"=>200,
                "message"=>"persona creata",
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
            $persone =Persone::findOrFail($id);
            $persone->persona_nome = $request->persona_nome;
            $persone->persona_cognome = $request->persona_cognome;
            $persone->persona_mail = $request->persona_mail;
            $persone->save();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$persone,
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
            $persone =Persone::findOrFail($id);
            $pivot = PersoneContratti::where('persona_id', $id)->get();
            foreach ($pivot as $key => $piv) {
                $piv->delete();
            }
            $persone->delete();
           return response()->json([
               "status"=>200,
               "message"=>"dati ottenuti",
               "data"=>$persone,
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
