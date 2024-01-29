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
// The prompt message that will be sent to OpenAI
$prompt = "I am {$request->sex} need clothes suggestions for an upcoming {$request->occasion_type}. I prefer a {$request->style} look for {$request->season}.
My budget is {$request->budget_range}. - Give me suggestions for clothes,3 words max, remark (you should pick one of the [`men summer shirts`, 'women summer shirts',
`men winter shirts`, 'women winter shirts', 'men suits', 'women suits', 'man pijamas', 'women pijamas',
'women swimwear', 'man swimwear', 'women wedding', 'man sports', 'women sports', 'women winter dress','women summer dress'])";

// Sending prompt to OpenAI and getting response
$result = OpenAI::chat()->create([
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        ['role' => 'user', 'content' => $prompt,],
    ],
    'max_tokens' => 15,
]);
// Extracting response from OpenAI
$response = $result['choices'][0]['message']['content'];
// Mapping response to Flickr album
$link = $this->mapFlickrAlbum($response);

// Retrieving Flickr API key and user ID from environment variables
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
    'message' => 'An error occurred: ' . $e->getMessage(),
]);
}
}

// Function to map OpenAI response to Flickr album ID
private function mapFlickrAlbum($response)
{
// Mapping response to Flickr album ID based on clothing type
switch ($response) {
    case 'men summer shirts':
        return "72177720314279320";
    case 'women summer shirts':
        return "72177720314290573";
    case 'men winter shirts':
        return "72177720314306941";
    case 'women winter shirts':
        return "72177720314307020";
    case 'men suits':
        return "72177720314302809";
    case 'women suits':
        return "72177720314307020";
    case 'man pijamas':
        return "72177720314302774";
    case 'women pijamas':
        return "72177720314290513";
    case 'women swimwear':
        return "72177720314276462";
    case 'man swimwear':
        return "72177720314352759";
    case 'women wedding':
        return "72177720314331661";
    case 'man sports':
        return "72177720314307030";
    case 'women sports':
        return "72177720314307030";
    case 'women winter dress':
        return "72177720314274755";
    case 'women summer dress':
        return "72177720314280926";
    default:
        return null;
}
}

}