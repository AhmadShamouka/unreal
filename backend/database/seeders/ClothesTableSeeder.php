<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClothesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clothes = [
            [
                'name' => 'T-Shirt',
                'price' => 20,
                'image' => 'tshirt.jpg',
                'user_id' => 6, 
                'category_id' => 1, 
                'brand_id' => 1, 
            ],
            [
                'name' => 'Jeans',
                'price' => 50,
                'image' => 'jeans.jpg',
                'user_id' => 3,
                'category_id' => 2, 
                'brand_id' => 2, 
            ],
            [
                'name' => 'Dress Shirt',
                'price' => 35,
                'image' => 'dress_shirt.jpg',
                'user_id' => 6, 
                'category_id' => 3,
                'brand_id' => 3,
            ],
            [
                'name' => 'Sneakers',
                'price' => 80,
                'image' => 'sneakers.jpg',
                'user_id' => 6, 
                'category_id' => 3, 
                'brand_id' => 1,
            ],
            [
                'name' => 'Summer Dress',
                'price' => 60,
                'image' => 'summer_dress.jpg',
                'user_id' => 3, 
                'category_id' => 1, 
                'brand_id' => 2,
            ],
        
        ];

        DB::table('clothes')->insert($clothes);
    }
}