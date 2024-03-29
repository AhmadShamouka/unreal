<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
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
                //Craeting variable to get the user gender
               $gender=$user->sex;
// The prompt message that will be sent to OpenAI
$prompt = "I am {$gender} need clothes suggestions for an upcoming {$request->occasion_type}. I prefer a {$request->style} look for {$request->season}.
My budget is {$request->budget_range}. - Give me suggestions for clothes,3 words max, Remark: You should pick one and only one of these options: 
    [`man summer shirts`, 'woman summer shirts', `man winter shirts`, 'woman winter shirts', 
    'man suits', 'woman suits', 'man pajamas', 'woman pajamas', 
    'woman swimwear', 'man swimwear', 'woman wedding attire', 
    'man sports attire', 'woman sports attire', 'woman winter dress', 'woman summer dress']";

// Sending prompt to OpenAI and getting response
$result = OpenAI::chat()->create([
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        ['role' => 'user', 'content' => $prompt,],
    ],
    'max_tokens' => 3700,
]);
// Extracting response from OpenAI
$response = $result['choices'][0]['message']['content'];
// Mapping response to Flickr album
$link = $this->mapFlickrAlbum($response);

// Retrieving Flickr API key and user ID from environmant variables
$apiKey = env('FLICKR_API_KEY');
$userId = env('FLICKR_USER_ID');

// Constructing the Flickr API request URL
$album = $link;
$link = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key={$apiKey}&photoset_id={$album}&user_id={$userId}&format=json&nojsoncallback=1";

// Returning JSON response with status, message, occasion, OpenAI response, and suggested link
return response()->json([
    'status' => 'success',
    'message' => 'Occasion created successfully',
    'occasion' => $occasion,
    'openai' => $response,
    'suggested_link' => $link,
]);
} else {
// Returning JSON response for authentication failure
return response()->json([
    'status' => 'failed',
    'message' => 'Authentication failed',
]);
}
} catch (QueryException $e) {
// Handling database query exception
return response()->json([
    'status' => 'failed',
    'message' => 'Database error: ' . $e->getMessage(),
]);
} catch (\Exception $e) {
// Handling general exception
return response()->json([
    'status' => 'failed',
    'message' => $prompt,
]);
}
}

// Function to map OpenAI response to Flickr album ID
private function mapFlickrAlbum($response)
{
// Mapping response to Flickr album ID based on clothing type
switch ($response) {
    case 'man summer shirts':
        return "72177720314279320";
    case 'woman summer shirts':
        return "72177720314290573";
    case 'man winter shirts':
        return "72177720314309206";
    case 'woman winter shirts':
        return "72177720314307020";
    case 'man suits':
        return "72177720314302809";
    case 'woman suits':
        return "72177720314307020";
    case 'man pijamas':
        return "72177720314302774";
    case 'woman pijamas':
        return "72177720314290513";
    case 'woman swimwear':
        return "72177720314276462";
    case 'man swimwear':
        return "72177720314352759";
    case 'woman wedding':
        return "72177720314331661";
    case 'man sports':
        return "72177720314307030";
    case 'woman sports':
        return "72177720314307030";
    case 'woman winter dress':
        return "72177720314274755";
    case 'woman summer dress':
        return "72177720314280926";
    default:
        return "72177720314448995";
}
}

}