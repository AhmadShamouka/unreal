<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OccasionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $occasions = [
            [
                'occasion_type' => 'outdoor activity',
                'style' => 'casual',
                'season' => 'summer',
                'budget_range' => 'medium',
                'user_id' => 3, 
            ],
            [
                'occasion_type' => 'beach vacation',
                'style' => 'casual',
                'season' => 'summer',
                'budget_range' => 'high',
                'user_id' => 2, 
            ],
            [
                'occasion_type' => 'sport',
                'style' => 'athletic',
                'season' => 'spring',
                'budget_range' => 'medium',
                'user_id' => 3, 
            ],
            [
                'occasion_type' => 'meeting',
                'style' => 'formal',
                'season' => 'fall',
                'budget_range' => 'low',
                'user_id' => 6, 
            ],
            [
                'occasion_type' => 'sleepover',
                'style' => 'casual',
                'season' => 'winter',
                'budget_range' => 'medium',
                'user_id' => 7, 
            ],
      
        ];

     
        DB::table('occasions')->insert($occasions);
    }
}