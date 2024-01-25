<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{  /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        $categories = [
            ['name' => 'Casual'],
            ['name' => 'Formal'],
            ['name' => 'Stylish'],
 
        ];

        DB::table('categories')->insert($categories);
    }
}