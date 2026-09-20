<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::truncate();

        Category::create(['name' => 'Electronics']);
        Category::create(['name' => 'Apparel']);
        Category::create(['name' => 'Accessories']);
        Category::create(['name' => 'Home']);
        Category::create(['name' => 'Drinks']);
    }
}