<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's users.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'pauldg@scoot.com'],
            [
                'name' => 'Paul DG',
                'password' => 'password',
            ],
        );
    }
}
