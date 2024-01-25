<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            ['name' => 'Zara'],
            ['name' => 'Gucci'],
            ['name' => 'H&M'],
 
        ];

        DB::table('brands')->insert($brands);
    }
}