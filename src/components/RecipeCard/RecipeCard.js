// src/components/RecipeCard.js
import recipeImage from './images/spaghetti-bolognese.jpg';

// src/data/recipeData.js

const recipes = [
  {
    id: '1',
    title: 'Spaghetti Bolognese',
    image: recipeImage,
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: [
      '400g spaghetti',
      '500g ground beef',
      '2 cans crushed tomatoes',
      '1 large onion, finely chopped',
      '3 cloves garlic, minced',
      '2 carrots, diced',
      '2 celery stalks, diced',
      '2 tbsp olive oil',
      '1 tbsp dried oregano',
      '1 tbsp dried basil',
      'Salt and pepper to taste',
      'Grated Parmesan cheese for serving'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat',
      'Add onion, carrots, and celery. Cook until softened, about 5 minutes',
      'Add garlic and cook for another minute',
      'Add ground beef and cook until browned, breaking up any lumps',
      'Stir in crushed tomatoes, oregano, and basil',
      'Simmer for 30 minutes, stirring occasionally',
      'Meanwhile, cook spaghetti according to package instructions',
      'Season sauce with salt and pepper to taste',
      'Serve sauce over spaghetti with grated Parmesan'
    ],
    tags: ['pasta', 'meat', 'dinner', 'family meal']
  },
  {
    id: '2',
    title: 'Thai Green Curry',
    image: '/images/thai-green-curry.jpg',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Thai',
    ingredients: [
      '400g chicken breast, sliced',
      '2 cans coconut milk',
      '3 tbsp green curry paste',
      '2 bell peppers, sliced',
      '1 cup bamboo shoots',
      '1 cup snap peas',
      'Fish sauce to taste',
      'Palm sugar to taste',
      'Thai basil leaves',
      'Jasmine rice for serving'
    ],
    instructions: [
      'Heat coconut milk in a large pan until it starts to bubble',
      'Add green curry paste and stir until fragrant',
      'Add chicken and cook until no longer pink',
      'Add vegetables and simmer until tender',
      'Season with fish sauce and palm sugar',
      'Garnish with Thai basil leaves',
      'Serve hot with jasmine rice'
    ],
    tags: ['curry', 'asian', 'spicy', 'chicken']
  },
  {
    id: '3',
    title: 'Classic French Onion Soup',
    image: '/images/french-onion-soup.jpg',
    prepTime: '15 mins',
    cookTime: '1 hour 15 mins',
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'French',
    ingredients: [
      '6 large onions, thinly sliced',
      '4 tbsp butter',
      '2 tbsp olive oil',
      '1 tsp sugar',
      '2 cloves garlic, minced',
      '8 cups beef broth',
      '1/2 cup dry white wine',
      '1 bay leaf',
      '4 sprigs fresh thyme',
      'Baguette slices',
      'Gruyere cheese, grated',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large pot, melt butter with olive oil over medium heat',
      'Add sliced onions and sugar, cook until deeply caramelized (45 mins)',
      'Add garlic and cook for 1 minute',
      'Pour in wine and scrape up any browned bits',
      'Add beef broth, bay leaf, and thyme',
      'Simmer for 30 minutes',
      'Toast baguette slices',
      'Ladle soup into oven-safe bowls',
      'Top with toasted bread and cheese',
      'Broil until cheese is bubbly and golden'
    ],
    tags: ['soup', 'comfort food', 'winter']
  },
  {
    id: '4',
    title: 'Homemade Margherita Pizza',
    image: '/images/margherita-pizza.jpg',
    prepTime: '30 mins',
    cookTime: '15 mins',
    servings: 2,
    difficulty: 'Medium',
    cuisine: 'Italian',
    ingredients: [
      '300g pizza dough',
      '200g San Marzano tomatoes',
      '200g fresh mozzarella',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Salt to taste'
    ],
    instructions: [
      'Preheat oven to highest setting with pizza stone inside',
      'Stretch dough into a 12-inch circle',
      'Spread crushed tomatoes leaving a border',
      'Tear mozzarella and distribute evenly',
      'Slide pizza onto hot stone',
      'Bake until crust is charred and cheese is bubbling',
      'Top with fresh basil and drizzle with olive oil'
    ],
    tags: ['pizza', 'vegetarian', 'italian']
  },
  {
    id: '5',
    title: 'Beef and Broccoli Stir-Fry',
    image: '/images/beef-broccoli.jpg',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Chinese',
    ingredients: [
      '500g flank steak, sliced',
      '2 cups broccoli florets',
      '3 tbsp soy sauce',
      '2 tbsp oyster sauce',
      '1 tbsp cornstarch',
      '2 cloves garlic, minced',
      '1 tbsp ginger, minced',
      'Sesame oil',
      'White rice for serving'
    ],
    instructions: [
      'Marinate beef in soy sauce, cornstarch for 15 minutes',
      'Blanch broccoli in boiling water for 2 minutes',
      'Heat wok over high heat',
      'Stir-fry beef until browned',
      'Add garlic and ginger',
      'Add broccoli and sauces',
      'Stir-fry until heated through',
      'Drizzle with sesame oil',
      'Serve over rice'
    ],
    tags: ['asian', 'stir-fry', 'beef']
  }
];

export default recipes;