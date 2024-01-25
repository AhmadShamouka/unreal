<?php

namespace App\Http\Controllers;

use App\Models\Occasion;
use OpenAI\Laravel\Facades\OpenAI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;

class OccasionController extends Controller
{
    public function createOccasion(Request $request)
    {
        try {
            if (Auth::check()) {
                $user = Auth::user();
                $request->validate([
                    'occasion_type' => 'required',
                    'style' => 'required',
                    'season' => 'required',
                    'budget_range' => 'required',
                ]);

                $occasion = Occasion::create([
                    'occasion_type' => $request->occasion_type,
                    'style' => $request->style,
                    'season' => $request->season,
                    'budget_range' => $request->budget_range,
                    'user_id' => $user->id,
                ]);
             

                $prompt = "I am {$request->sex} and I need clothes suggestions for an upcoming {$request->occasion_type}. I prefer a {$request->style} look for {$request->season}. My budget is {$request->budget_range}. - Give me suggestions for clothes, 3 words max, remark (you should pick one of the [`men summer shirts`, 'women summer shirts', `men winter shirts`, 'women winter shirts', 'men suits', 'women suits', 'man pijamas', 'women pijamas', 'women swimwear', 'man swimwear', 'women wedding', 'man sports', 'women sports', 'women winter dress', 'women summer dress'])";
                
                $result = OpenAI::chat()->create([
                    'model' => 'gpt-3.5-turbo',
                    'messages' => [
                        [
                            'role' => 'user',
                            'content' => $prompt,
                        ],
                    ],
                    'max_tokens' => 15,
                ]);
                
                $response = $result['choices'][0]['message']['content'];
                 
         
              
                                 
                switch ($response) {
                    case 'men summer shirts':
                       $link="72177720314279320";
                        break;
                    case 'women summer shirts':
                        $link="72177720314290573";
                        break;
                    case 'men winter shirts':
                        $link="72177720314306941";
                        break;
                    case 'women winter shirts':
                        $link="72177720314307020";
                        break;
                    case 'men suits':
                        $link="72177720314302809";
                        break;
                    case 'women suits':
                        $link="72177720314307020";
                        break;
                    case 'man pijamas':
                        $link="72177720314302774";
                        break;
                    case 'women pijamas':
                        $link="72177720314290513";
                        break;
                    case 'women swimwear':
                        $link="72177720314276462";
                        break;
                    case 'man swimwear':
                        $link="72177720314352759";
                        break;
                    case 'women wedding':
                        $link="72177720314331661";
                        break;
                    case 'man sports':
                        $link="72177720314307030";
                        break;
                    case 'women sports':
                        $link="72177720314307030";
                        break;
                    case 'women winter dress':
                        $link="72177720314274755";
                        break;
                    case 'women summer dress':
                        $link="72177720314280926";
                        break;
                }
                
        
                 $apiKey = "0dcb337f2a81a92587ce7e26593a35bb";
                 $userId = "199946451@N04";
                 $album = $link;
          
                $link = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key={$apiKey}&photoset_id={$album}&user_id={$userId}&format=json&nojsoncallback=1";
                
                
                return response()->json([
                    'status' => 'success',
                    'message' => 'Occasion created successfully',
                    'occasion' => $occasion,
                    'openai' => $response,
                    'suggested_link' => $link,
                ]);
                
                
            }

            return response()->json([
                'status' => 'failed',
                'message' => 'You need permission',
            ]);
        } catch (QueryException $e) {
          
            return response()->json([
                'status' => 'failed',
                'message' => 'Database error: ' . $e->getMessage(),
            ]);
        } catch (\Exception $e) {
      
            return response()->json([
                'status' => 'failed',
                'message' => 'An error occurred: ' . $e->getMessage(),
            ]);
        }
    }

}