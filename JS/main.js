var recipes = [
    {
        name: "Lasagna Bolognese",
        description: "Layered Italian pasta with rich meat sauce and béchamel",
        category: "Italian",
        difficulty: "Intermediate",
        rating: 4.9,
        reviews: 478,
        image: "./IMGS/Lasagna-Bolognese-scaled.jpg",
        prepTime: 30,
        cookTime: 90,
        servings: 4,
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],
        instructions: [
            "Sauté the onion and carrots until soft.",
            "Add the ground beef and brown it well.",
            "Stir in the tomatoes and simmer for 45 minutes.",
            "Layer sheets, meat sauce, and béchamel in a dish.",
            "Top with mozzarella and parmesan.",
            "Bake at 180°C for 35 minutes until golden."
        ],
        nutrition: {
            calories: 620,
            protein: "34g",
            carbs: "48g",
            fat: "30g",
            fiber: "4g",
            sodium: "890mg"
        },
        tips: [
            "Let it rest 10 minutes before slicing.",
            "Fresh pasta sheets need no pre-boiling.",
            "Add a dash of nutmeg to your béchamel for authentic Italian flavor.",
            "Cover with foil for the first 20 minutes of baking to keep it juicy."
        ]
    },
    {
        name: "Chicken Shawarma Bowl",
        description: "Marinated chicken with rice, salad, and garlic sauce",
        category: "Middle Eastern",
        difficulty: "Easy",
        rating: 4.7,
        reviews: 312,
        image: "./IMGS/Chicken Shawarma Bowl.jpg",
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        ingredients: [
            "2 chicken breasts",
            "1 tbsp shawarma spice mix",
            "1 cup rice",
            "1 cucumber, diced",
            "2 tomatoes, diced",
            "Garlic sauce",
            "Pita bread"
        ],
        instructions: [
            "Marinate the chicken in spices and oil for 10 minutes.",
            "Cook rice according to package instructions.",
            "Grill the chicken until cooked through, then slice.",
            "Assemble the bowl with rice, salad, and chicken.",
            "Drizzle with garlic sauce and serve."
        ],
        nutrition: {
            calories: 540,
            protein: "38g",
            carbs: "52g",
            fat: "16g",
            fiber: "3g",
            sodium: "760mg"
        },
        tips: [
            "Marinate longer (overnight) for deeper flavor.",
            "Toast the pita for a bit of crunch.",
            "Use chicken thighs instead of breasts for extra tenderness.",
            "Add pickled turnip or cucumber for an authentic street-food kick."
        ]
    },
    {
        name: "Koshari",
        description: "Classic Egyptian rice, lentils, and pasta with spiced tomato sauce",
        category: "Egyptian",
        difficulty: "Intermediate",
        rating: 4.8,
        reviews: 601,
        image: "./IMGS/Koshari.jpg",
        prepTime: 20,
        cookTime: 40,
        servings: 4,
        ingredients: [
            "1 cup rice",
            "1 cup brown lentils",
            "1 cup small macaroni",
            "2 onions, sliced (for frying)",
            "400g canned tomatoes",
            "3 garlic cloves",
            "1 tbsp cumin",
            "White vinegar, for the dakka"
        ],
        instructions: [
            "Cook the lentils, rice, and pasta separately.",
            "Fry the sliced onions until deep golden and crispy.",
            "Simmer the tomato sauce with garlic and cumin.",
            "Layer rice, lentils, and pasta in a bowl.",
            "Top with tomato sauce and crispy onions."
        ],
        nutrition: {
            calories: 580,
            protein: "18g",
            carbs: "98g",
            fat: "12g",
            fiber: "9g",
            sodium: "640mg"
        },
        tips: [
            "Don't skip the vinegar-garlic dakka, it ties the dish together.",
            "Fry the onions in batches so they crisp evenly.",
            "Use the oil from the fried onions to cook the rice for an incredible aroma.",
            "Soak the brown lentils for 30 minutes beforehand to shorten cooking time."
        ]
    },
    {
        name: "Grilled Salmon with Veggies",
        description: "Pan-seared salmon fillet with roasted seasonal vegetables",
        category: "Healthy",
        difficulty: "Easy",
        rating: 4.6,
        reviews: 214,
        image: "./IMGS/Salmon-and-veggies.jpg",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        ingredients: [
            "2 salmon fillets",
            "1 zucchini, sliced",
            "1 red bell pepper, sliced",
            "1 tbsp olive oil",
            "1 lemon",
            "Salt and pepper",
            "Fresh dill"
        ],
        instructions: [
            "Season the salmon with salt, pepper, and lemon juice.",
            "Toss the vegetables in olive oil and roast at 200°C for 12 minutes.",
            "Pan-sear the salmon skin-side down for 4 minutes, then flip for 3.",
            "Plate the salmon with the roasted vegetables.",
            "Garnish with fresh dill and a lemon wedge."
        ],
        nutrition: {
            calories: 410,
            protein: "36g",
            carbs: "12g",
            fat: "24g",
            fiber: "4g",
            sodium: "320mg"
        },
        tips: [
            "Don't move the salmon while searing so the skin crisps up.",
            "Swap in any vegetables you have on hand.",
            "Pat the salmon dry with paper towels before cooking to ensure maximum crispiness.",
            "Add a teaspoon of honey to the lemon seasoning for a light glaze."
        ]
    },
    {
        name: "Beef Tacos",
        description: "Soft corn tortillas filled with spiced beef and fresh toppings",
        category: "Mexican",
        difficulty: "Easy",
        rating: 4.8,
        reviews: 356,
        image: "./IMGS/Beef Tacos.jpg",
        prepTime: 15,
        cookTime: 15,
        servings: 3,
        ingredients: [
            "8 corn tortillas",
            "400g ground beef",
            "1 packet taco seasoning",
            "1 onion, diced",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "100g shredded cheese",
            "Sour cream"
        ],
        instructions: [
            "Sauté the onion until translucent.",
            "Add the ground beef and taco seasoning, cook until browned.",
            "Warm the tortillas in a dry pan.",
            "Fill each tortilla with beef, lettuce, tomatoes, and cheese.",
            "Top with sour cream and serve."
        ],
        nutrition: {
            calories: 490,
            protein: "28g",
            carbs: "34g",
            fat: "26g",
            fiber: "5g",
            sodium: "710mg"
        },
        tips: [
            "Char the tortillas slightly over an open flame for extra flavor.",
            "Double the seasoning if you like it spicier.",
            "Add a squeeze of fresh lime juice right before eating.",
            "Spoon a little beef broth into the meat while cooking to keep it extra juicy."
        ]
    },
    {
        name: "Mushroom Risotto",
        description: "Creamy Arborio rice slow-cooked with mushrooms and parmesan",
        category: "Italian",
        difficulty: "Advanced",
        rating: 4.7,
        reviews: 189,
        image: "./IMGS/Mushroom Risotto.jpg",
        prepTime: 15,
        cookTime: 40,
        servings: 3,
        ingredients: [
            "1.5 cups Arborio rice",
            "300g mixed mushrooms, sliced",
            "1 liter vegetable stock",
            "1 onion, diced",
            "1/2 cup white wine",
            "80g parmesan, grated",
            "2 tbsp butter"
        ],
        instructions: [
            "Sauté the mushrooms until golden, then set aside.",
            "Sauté the onion, add rice, and toast for 2 minutes.",
            "Deglaze with white wine and let it absorb.",
            "Add warm stock one ladle at a time, stirring constantly, for 25 minutes.",
            "Stir in the mushrooms, butter, and parmesan before serving."
        ],
        nutrition: {
            calories: 560,
            protein: "16g",
            carbs: "78g",
            fat: "18g",
            fiber: "3g",
            sodium: "820mg"
        },
        tips: [
            "Keep the stock warm on the side so the rice doesn't stop cooking.",
            "Stir often — that's what makes risotto creamy.",
            "Finely grate cold butter and stir it in off the heat at the very end for extra gloss.",
            "Use a mix of wild mushrooms for a richer, earthy flavor profile."
        ]
    }
];

var recipeImage = document.getElementById("recipeImage");
var recipeRating = document.getElementById("recipeRating");
var recipeReviews = document.getElementById("recipeReviews");
var recipeTags = document.getElementById("recipeTags");
var recipeName = document.getElementById("recipeName");
var recipeDescription = document.getElementById("recipeDescription");
var timeWarning = document.getElementById("timeWarning");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionGrid = document.getElementById("nutritionGrid");
var tipsList = document.getElementById("tipsList");
var statPrep = document.getElementById("statPrep");
var statCook = document.getElementById("statCook");
var statServings = document.getElementById("statServings");
var anotherRecipeBtn = document.getElementById("anotherRecipeBtn");
var tabButtons = document.querySelectorAll(".tab-btn");
var navToggle = document.getElementById("navToggle");
var mobileMenu = document.getElementById("mobileMenu");

var nutritionItems = [
    {
        key: "calories",
        label: "Calories",
        icon: "fa-fire",
        className: "nutri-icon-calories",
        suffix: " kcal"
    },
    {
        key: "protein",
        label: "Protein",
        icon: "fa-dumbbell",
        className: "nutri-icon-protein"
    },
    {
        key: "carbs",
        label: "Carbohydrates",
        icon: "fa-wheat-awn",
        className: "nutri-icon-carbs"
    },
    {
        key: "fat",
        label: "Fat",
        icon: "fa-droplet",
        className: "nutri-icon-fat"
    },
    {
        key: "fiber",
        label: "Fiber",
        icon: "fa-leaf",
        className: "nutri-icon-fiber"
    },
    {
        key: "sodium",
        label: "Sodium",
        icon: "fa-cube",
        className: "nutri-icon-sodium"
    }
];

function getRandomRecipe() {
    var randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

function buildTagsHTML(recipe) {
    return `
        <span class="tag-difficulty">${recipe.difficulty}</span>
        <span class="tag-cuisine">${recipe.category}</span>
    `;
}

function buildListHTML(items) {
    return items.map(function(item) {
        return `<li>${item}</li>`;
    }).join("");
}

function buildNutritionHTML(nutrition) {
    return nutritionItems.map(function(item) {
        var value = nutrition[item.key] + (item.suffix || "");

        return `
            <div class="stat-box">
                <span class="stat-icon ${item.className}">
                    <i class="fa-solid ${item.icon}"></i>
                </span>
                <span class="stat-label">${item.label}</span>
                <span class="stat-value">${value}</span>
            </div>
        `;
    }).join("");
}

function buildTipsHTML(tips) {
    return tips.map(function(tip) {
        return `
            <li>
                <span class="tip-icon">
                    <i class="fa-solid fa-check"></i>
                </span>
                <span>${tip}</span>
            </li>
        `;
    }).join("");
}

function renderRecipe(recipe) {
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
    recipeRating.textContent = recipe.rating;
    recipeReviews.textContent = `(${recipe.reviews} reviews)`;
    recipeTags.innerHTML = buildTagsHTML(recipe);
    recipeName.textContent = recipe.name;
    recipeDescription.textContent = recipe.description;
    ingredientsList.innerHTML = buildListHTML(recipe.ingredients);
    instructionsList.innerHTML = buildListHTML(recipe.instructions);
    nutritionGrid.innerHTML = buildNutritionHTML(recipe.nutrition);
    tipsList.innerHTML = buildTipsHTML(recipe.tips);
    statPrep.textContent = `${recipe.prepTime} min`;
    statCook.textContent = `${recipe.cookTime} min`;
    statServings.textContent = `${recipe.servings} people`;
    timeWarning.hidden = recipe.prepTime + recipe.cookTime <= 45;
}

function activateTab(tabName) {
    tabButtons.forEach(function(button) {
        var isActive = button.dataset.tab === tabName;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive);
    });

    document.querySelectorAll(".tab-panel").forEach(function(panel) {
        panel.hidden = panel.id !== "panel-" + tabName;
    });
}
function handleAnotherRecipeClick() {
    renderRecipe(getRandomRecipe());
    activateTab("ingredients");
}
function handleTabClick(event) {
    activateTab(event.currentTarget.dataset.tab);
}
function handleNavToggleClick() {
    mobileMenu.classList.toggle("open");
}
anotherRecipeBtn.addEventListener("click", handleAnotherRecipeClick);
tabButtons.forEach(function(button) {
    button.addEventListener("click", handleTabClick);
});
navToggle.addEventListener("click", handleNavToggleClick);
renderRecipe(getRandomRecipe());
activateTab("ingredients");