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
                 
                
                function extractSearchQuery($clothingSuggestions)
                {
                
                    $words = explode(' ', $clothingSuggestions);
                
                    $filteredWords = array_filter($words, function ($word) {
                
                        return strlen($word) > 2 && !in_array(strtolower($word), ['and', 'or', 'the', 'for',"1","2","3"]);
                    });
                
                    $searchQuery = implode(' ', $filteredWords);
                
                    return $searchQuery;
                }
    
                $link = 'https://www.flickr.com/photos/199946451@N04/albums/';
                $clothingSuggestions = $result['choices'][0]['message']['content'];
                $suggestedSearchQuery = extractSearchQuery($clothingSuggestions);
                $suggestedLink = $link . urlencode($suggestedSearchQuery);
                return response()->json([
                    'status' => 'success',
                    'message' => 'Occasion created successfully',
                    'occasion' => $occasion,
                    'openai' => $result,
                    'suggested_link' => $response,
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