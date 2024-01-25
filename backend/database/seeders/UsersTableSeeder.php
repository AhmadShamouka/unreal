<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     
        $users = [
            [
                'admin' => 1,
                'username' => 'Ahmad Shamouka',
                'email' => 'admin@admin.com',
                'password' => Hash::make('password123'),
                'country' => 'United States',
                'sex' => 'male',
                'age' => 30,
            ],
            [
                'admin' => 0,
                'username' => 'john_doe',
                'email' => 'john.doe@sefactory.io',
                'password' => Hash::make('password123'),
                'country' => 'United States',
                'sex' => 'male',
                'age' => 28,
            ],
            [
                'admin' => 0,
                'username' => 'sarah_smith',
                'email' => 'sarah.smith@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Canada',
                'sex' => 'female',
                'age' => 35,
            ],
            [
                'admin' => 0,
                'username' => 'michael_jones',
                'email' => 'michael.jones@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Australia',
                'sex' => 'male',
                'age' => 22,
            ],
            [
                'admin' => 0,
                'username' => 'emily_martin',
                'email' => 'emily.martin@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'United Kingdom',
                'sex' => 'female',
                'age' => 30,
            ],
            [
                'admin' => 0,
                'username' => 'alex_wilson',
                'email' => 'alex.wilson@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Germany',
                'sex' => 'male',
                'age' => 40,
            ],
            [
                'admin' => 0,
                'username' => 'lisa_brown',
                'email' => 'lisa.brown@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'France',
                'sex' => 'female',
                'age' => 25,
            ],
            [
                'admin' => 0,
                'username' => 'david_clark',
                'email' => 'david.clark@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Spain',
                'sex' => 'male',
                'age' => 32,
            ],
            [
                'admin' => 0,
                'username' => 'olivia_white',
                'email' => 'olivia.white@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Italy',
                'sex' => 'female',
                'age' => 28,
            ],
            [
                'admin' => 0,
                'username' => 'ryan_miller',
                'email' => 'ryan.miller@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Japan',
                'sex' => 'male',
                'age' => 27,
            ],
            [
                'admin' => 0,
                'username' => 'isabella_green',
                'email' => 'isabella.green@sefactory.io',
                'password' => Hash::make('123123'),
                'country' => 'Brazil',
                'sex' => 'female',
                'age' => 33,
            ],
        ];

        DB::table('users')->insert($users);
    }
}