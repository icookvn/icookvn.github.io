// ==================== INGREDIENTS DATABASE ====================
const ingredients = [
  {name:"Egg",cal:78,protein:6,carbs:0.6,fat:5},
  {name:"Chicken Breast",cal:165,protein:31,carbs:0,fat:3.6},
  {name:"Salmon",cal:208,protein:20,carbs:0,fat:13},
  {name:"Beef",cal:250,protein:26,carbs:0,fat:15},
  {name:"Tuna",cal:132,protein:28,carbs:0,fat:1},
  {name:"Shrimp",cal:99,protein:24,carbs:0,fat:0.3},
  {name:"Protein Powder",cal:120,protein:24,carbs:3,fat:1.5},
  {name:"Rice",cal:130,protein:2.7,carbs:28,fat:0.3},
  {name:"Brown Rice",cal:111,protein:2.6,carbs:23,fat:0.9},
  {name:"Bread",cal:79,protein:4,carbs:15,fat:1},
  {name:"Oatmeal",cal:68,protein:2.4,carbs:12,fat:1.4},
  {name:"Pasta",cal:131,protein:5,carbs:25,fat:1.1},
  {name:"Apple",cal:95,protein:0.5,carbs:25,fat:0.3},
  {name:"Banana",cal:105,protein:1.3,carbs:27,fat:0.4},
  {name:"Orange",cal:62,protein:1.2,carbs:15,fat:0.2},
  {name:"Strawberry",cal:33,protein:0.7,carbs:8,fat:0.3},
  {name:"Blueberry",cal:57,protein:0.7,carbs:14,fat:0.3},
  {name:"Broccoli",cal:55,protein:3.7,carbs:11,fat:0.6},
  {name:"Carrot",cal:41,protein:0.9,carbs:10,fat:0.2},
  {name:"Spinach",cal:23,protein:2.9,carbs:3.6,fat:0.4},
  {name:"Tomato",cal:22,protein:1.1,carbs:4.8,fat:0.2},
  {name:"Potato",cal:163,protein:4.3,carbs:37,fat:0.2},
  {name:"Sweet Potato",cal:86,protein:1.6,carbs:20,fat:0.1},
  {name:"Milk",cal:103,protein:8,carbs:12,fat:2.4},
  {name:"Cheese",cal:113,protein:7,carbs:1,fat:9},
  {name:"Yogurt",cal:59,protein:10,carbs:3.6,fat:0.4},
  {name:"Almond",cal:164,protein:6,carbs:6,fat:14},
  {name:"Peanut",cal:161,protein:7,carbs:5,fat:14},
  {name:"Cashew",cal:157,protein:5,carbs:9,fat:12},
  {name:"Avocado",cal:160,protein:2,carbs:9,fat:15},
  {name:"Olive Oil",cal:119,protein:0,carbs:0,fat:14},
  {name:"Egg White",cal:17,protein:3.6,carbs:0.2,fat:0},
  {name:"Turkey",cal:135,protein:30,carbs:0,fat:1},
  {name:"Mango",cal:99,protein:1.4,carbs:25,fat:0.6},
  {name:"Pineapple",cal:50,protein:0.5,carbs:13,fat:0.1},
  {name:"Watermelon",cal:30,protein:0.6,carbs:8,fat:0.2},
  {name:"Cucumber",cal:16,protein:0.7,carbs:4,fat:0.1},
  {name:"Lettuce",cal:15,protein:1.4,carbs:2.9,fat:0.2},
  {name:"Onion",cal:40,protein:1.1,carbs:9,fat:0.1},
  {name:"Garlic",cal:4,protein:0.2,carbs:1,fat:0},
  {name:"Corn",cal:96,protein:3.4,carbs:21,fat:1.5},
  {name:"Quinoa",cal:120,protein:4.4,carbs:21,fat:1.9},
  {name:"Tofu",cal:76,protein:8,carbs:1.9,fat:4.8},
  {name:"Chia Seeds",cal:138,protein:4.7,carbs:12,fat:9},
  {name:"Flax Seeds",cal:150,protein:5.2,carbs:8,fat:12},
  {name:"Dark Chocolate",cal:170,protein:2,carbs:13,fat:12},
  {name:"Butter",cal:102,protein:0.1,carbs:0,fat:12},
  {name:"Honey",cal:64,protein:0,carbs:17,fat:0},
  {name:"Jam",cal:56,protein:0.1,carbs:14,fat:0},
  {name:"Sausage",cal:229,protein:9,carbs:2,fat:20},
  {name:"Bacon",cal:161,protein:12,carbs:0,fat:12},
  {name:"Fried Egg",cal:90,protein:6,carbs:0.5,fat:7},
  {name:"Fried Rice",cal:163,protein:5,carbs:20,fat:7}
];

// ==================== RECIPES (30 món đầy đủ) ====================
const recipes = [
  {name:"Grilled Chicken Bowl",calories:520,protein:"45g",carbs:"50g",fat:"12g",ingredients:["Chicken breast (200g, 46g protein)","Brown rice (60g uncooked)","Broccoli (100g)","Olive oil (5ml)"],steps:["Marinate 200g chicken with salt/pepper/5ml oil 10 mins","Cook 60g rice with 120ml water 20 mins","Grill chicken 4-5 mins each side, rest 3 mins","Steam 100g broccoli 5 mins","Assemble bowl"],proteinBreakdown:"Chicken: 46g from 200g"},
  {name:"Protein Pancakes",calories:400,protein:"30g",carbs:"45g",fat:"8g",ingredients:["Oats (40g)","Eggs (1 large, 6g protein)","Protein powder (30g, 24g protein)","Almond milk (60ml)"],steps:["Blend 40g oats into flour","Mix oat flour + 30g protein powder + 1 egg + 60ml milk","Heat non-stick pan low, pour 1 tbsp batter per pancake","Cook 2 mins until bubbles, flip 1 min","Stack and serve"],proteinBreakdown:"Protein powder 24g + egg 6g"},
  {name:"Salmon & Quinoa",calories:600,protein:"40g",carbs:"55g",fat:"20g",ingredients:["Salmon (180g, 40g protein)","Quinoa (70g uncooked)","Spinach (50g)"],steps:["Bake 180g salmon at 200°C 12-15 mins","Cook 70g quinoa with 140ml water 15 mins","Wilt 50g spinach in hot pan 1 min","Serve together"],proteinBreakdown:"Salmon: 40g (180g x 22g/100g)"},
  {name:"Beef Stir Fry",calories:650,protein:"50g",carbs:"40g",fat:"25g",ingredients:["Lean beef (200g, 50g protein)","Bell peppers (140g, 1 whole)","Soy sauce (15ml)"],steps:["Slice 200g beef thin, marinate 10ml soy sauce + garlic","Heat pan very hot, sear beef 30 sec then stir-fry 2 mins, remove","Stir-fry peppers 1 min with 5ml soy sauce","Return beef, mix 30 sec"],proteinBreakdown:"Beef: 50g (200g x 25g/100g)"},
  {name:"Greek Yogurt Bowl",calories:300,protein:"25g",carbs:"30g",fat:"5g",ingredients:["Greek yogurt (250g, 25g protein)","Berries (80g)","Nuts (15g)"],steps:["Scoop 250g yogurt into bowl","Top with 80g berries","Sprinkle 15g crushed nuts","Serve chilled"],proteinBreakdown:"Greek yogurt: 25g (250g x 10g/100g)"},
  {name:"Avocado Egg Toast",calories:350,protein:"20g",carbs:"30g",fat:"15g",ingredients:["Whole grain bread (2 slices)","Avocado (100g, 1/2 fruit)","Egg (2 large, 12g protein)"],steps:["Toast 2 slices bread","Mash 100g avocado, spread on toast","Fry 2 eggs sunny side up","Place egg on avocado toast"],proteinBreakdown:"Eggs 12g + bread 6g + avocado 2g"},
  {name:"Turkey Wrap",calories:450,protein:"35g",carbs:"40g",fat:"10g",ingredients:["Turkey slices (120g, 30g protein)","Whole wheat wrap (1 large, 60g)","Lettuce (30g)"],steps:["Lay wrap flat","Layer 120g turkey and 30g lettuce","Roll tightly","Slice in half and serve"],proteinBreakdown:"Turkey 30g + wrap 5g"},
  {name:"Tuna Salad",calories:400,protein:"38g",carbs:"20g",fat:"15g",ingredients:["Tuna canned in water (150g drained, 35g protein)","Mixed greens (50g)","Olive oil (10ml)"],steps:["Drain 150g tuna","Mix tuna with 50g greens","Drizzle 10ml olive oil","Toss and serve fresh"],proteinBreakdown:"Tuna 35g + greens 3g"},
  {name:"Sweet Potato & Chicken",calories:550,protein:"42g",carbs:"60g",fat:"10g",ingredients:["Chicken breast (180g, 41g protein)","Sweet potato (200g, 1 medium)"],steps:["Bake 200g sweet potato at 200°C 40 mins","Grill 180g chicken 5 mins each side","Serve together"],proteinBreakdown:"Chicken 41g"},
  {name:"Protein Smoothie",calories:350,protein:"35g",carbs:"40g",fat:"5g",ingredients:["Protein powder (35g, 28g protein)","Banana (1 medium, 120g)","Almond milk (250ml)"],steps:["Add 35g protein powder + 1 banana + 250ml almond milk to blender","Blend 30 seconds until smooth","Serve cold"],proteinBreakdown:"Protein powder 28g + almond milk 7g"},
  {name:"Oatmeal & Peanut Butter",calories:450,protein:"20g",carbs:"55g",fat:"18g",ingredients:["Oats (50g)","Peanut butter (20g, 8g protein)","Milk (200ml)","Honey (10g)"],steps:["Cook 50g oats with 200ml milk 5 mins","Stir in 20g peanut butter and 10g honey","Serve warm"],proteinBreakdown:"Peanut butter 8g + milk 7g + oats 5g"},
  {name:"Chicken Caesar Salad",calories:480,protein:"42g",carbs:"20g",fat:"22g",ingredients:["Grilled chicken (180g, 41g protein)","Romaine lettuce (100g)","Caesar dressing (20ml)","Parmesan (10g)"],steps:["Grill 180g chicken, slice","Toss 100g romaine with 20ml dressing","Top with chicken and 10g parmesan"],proteinBreakdown:"Chicken 41g + parmesan 1g"},
  {name:"Egg White Omelette",calories:250,protein:"30g",carbs:"5g",fat:"5g",ingredients:["Egg whites (200ml from 6 eggs, 22g protein)","Spinach (40g)","Mushroom (50g)"],steps:["Whisk 200ml egg whites with salt","Pour into non-stick pan on medium","Add 40g spinach + 50g mushrooms","Fold and cook 3 mins"],proteinBreakdown:"Egg whites 22g + veggies 8g"},
  {name:"Quinoa Veggie Bowl",calories:500,protein:"18g",carbs:"65g",fat:"15g",ingredients:["Quinoa (80g uncooked, 10g protein)","Zucchini (80g)","Carrot (60g)","Bell pepper (60g)"],steps:["Cook 80g quinoa with 160ml water 15 mins","Sauté all veggies 5 mins","Mix quinoa and veggies together"],proteinBreakdown:"Quinoa 10g + veggies 8g"},
  {name:"Grilled Shrimp Plate",calories:430,protein:"38g",carbs:"30g",fat:"12g",ingredients:["Shrimp (200g peeled, 38g protein)","Rice (50g uncooked)","Asparagus (80g)"],steps:["Grill 200g shrimp 2 mins each side","Cook 50g rice","Grill 80g asparagus 3 mins","Serve together"],proteinBreakdown:"Shrimp 38g (200g x 19g/100g)"},
  {name:"Lean Turkey Meatballs",calories:520,protein:"45g",carbs:"35g",fat:"15g",ingredients:["Ground turkey (200g, 44g protein)","Garlic (1 clove)","Tomato sauce (100ml)"],steps:["Mix 200g turkey with minced garlic, shape into balls","Bake at 190°C 15 mins","Heat 100ml sauce, add meatballs, serve"],proteinBreakdown:"Turkey 44g"},
  {name:"High Protein Pasta",calories:600,protein:"50g",carbs:"70g",fat:"10g",ingredients:["Protein pasta (80g uncooked, 20g protein)","Chicken (130g, 30g protein)","Tomato sauce (100ml)"],steps:["Boil 80g protein pasta 8 mins","Cook 130g chicken, dice","Mix pasta + chicken + 100ml sauce"],proteinBreakdown:"Chicken 30g + pasta 20g"},
  {name:"Tofu Stir Fry",calories:450,protein:"30g",carbs:"40g",fat:"18g",ingredients:["Tofu firm (250g, 25g protein)","Broccoli (100g)","Soy sauce (15ml)"],steps:["Press 250g tofu, cube, pan-fry until golden","Add 100g broccoli, stir-fry 3 mins","Add 15ml soy sauce, mix"],proteinBreakdown:"Tofu 25g + broccoli 5g"},
  {name:"Protein Overnight Oats",calories:420,protein:"28g",carbs:"50g",fat:"12g",ingredients:["Oats (50g)","Protein powder (25g, 20g protein)","Chia seeds (10g)","Milk (200ml)"],steps:["Mix 50g oats + 25g protein powder + 10g chia + 200ml milk","Refrigerate overnight","Stir and serve cold"],proteinBreakdown:"Protein powder 20g + milk 7g + chia 1g"},
  {name:"Avocado Chicken Salad",calories:550,protein:"40g",carbs:"20g",fat:"30g",ingredients:["Chicken (170g, 39g protein)","Avocado (100g, 1/2 fruit)","Spinach (50g)"],steps:["Grill 170g chicken, slice","Cube 100g avocado","Toss chicken + avocado + 50g spinach","Serve fresh"],proteinBreakdown:"Chicken 39g"},
  {name:"Salmon Avocado Toast",calories:500,protein:"35g",carbs:"35g",fat:"22g",ingredients:["Whole grain bread (2 slices)","Smoked salmon (120g, 26g protein)","Avocado (80g)"],steps:["Toast 2 slices bread","Mash 80g avocado, spread","Top with 120g smoked salmon"],proteinBreakdown:"Salmon 26g + bread 6g + avocado 3g"},
  {name:"Chicken Burrito Bowl",calories:650,protein:"48g",carbs:"70g",fat:"15g",ingredients:["Chicken (200g, 46g protein)","Brown rice (70g uncooked)","Beans (80g)","Corn (50g)"],steps:["Cook 70g rice","Grill 200g chicken, dice","Assemble bowl: rice + chicken + 80g beans + 50g corn"],proteinBreakdown:"Chicken 46g + beans 2g"},
  {name:"Banana Protein Muffins",calories:350,protein:"22g",carbs:"40g",fat:"10g",ingredients:["Banana (2 medium, 240g)","Oats (60g)","Protein powder (30g, 24g protein)"],steps:["Mash 2 bananas, mix with 60g oats + 30g protein powder","Divide into muffin tin","Bake at 180°C 20 mins"],proteinBreakdown:"Protein powder 24g"},
  {name:"Chia Pudding",calories:300,protein:"15g",carbs:"30g",fat:"12g",ingredients:["Chia seeds (30g, 6g protein)","Milk (250ml)","Honey (15g)"],steps:["Mix 30g chia + 250ml milk + 15g honey","Refrigerate 4 hours or overnight","Stir and serve"],proteinBreakdown:"Milk 9g + chia 6g"},
  {name:"Steak & Veggies",calories:700,protein:"55g",carbs:"25g",fat:"40g",ingredients:["Lean steak (220g, 55g protein)","Broccoli (100g)","Carrots (80g)"],steps:["Grill 220g steak 4-5 mins each side for medium","Rest steak 5 mins","Steam broccoli and carrots 5 mins","Serve together"],proteinBreakdown:"Steak 55g (220g x 25g/100g)"},
  {name:"Greek Chicken Wrap",calories:480,protein:"38g",carbs:"45g",fat:"12g",ingredients:["Chicken (160g, 37g protein)","Whole wheat wrap (1 large, 60g)","Tzatziki (30g)"],steps:["Grill 160g chicken, slice","Warm wrap, spread 30g tzatziki","Add chicken, roll tightly"],proteinBreakdown:"Chicken 37g"},
  {name:"Healthy Pizza",calories:600,protein:"40g",carbs:"65g",fat:"20g",ingredients:["Whole wheat crust (150g)","Chicken (120g, 28g protein)","Mozzarella (40g, 10g protein)"],steps:["Preheat oven to 220°C","Top 150g crust with 120g chicken + 40g mozzarella","Bake 15 mins"],proteinBreakdown:"Chicken 28g + cheese 10g + crust 2g"},
  {name:"Brown Rice & Tofu",calories:500,protein:"28g",carbs:"65g",fat:"12g",ingredients:["Brown rice (80g uncooked, 8g protein)","Tofu (200g, 20g protein)","Soy sauce (15ml)"],steps:["Cook 80g brown rice","Pan-fry 200g cubed tofu until golden","Add 15ml soy sauce, stir","Serve tofu over rice"],proteinBreakdown:"Tofu 20g + rice 8g"},
  {name:"Chicken Fajitas",calories:550,protein:"42g",carbs:"50g",fat:"15g",ingredients:["Chicken (180g, 41g protein)","Bell peppers (120g)","Tortilla (2 small, 60g total)"],steps:["Cook 180g sliced chicken 5 mins","Add 120g peppers, cook 3 mins","Warm tortillas, fill with chicken and peppers"],proteinBreakdown:"Chicken 41g"},
  {name:"Protein Energy Balls",calories:250,protein:"12g",carbs:"20g",fat:"10g",ingredients:["Oats (40g)","Peanut butter (25g, 8g protein)","Protein powder (10g, 8g protein)"],steps:["Mix 40g oats + 25g peanut butter + 10g protein powder","Roll into 8 small balls","Chill 30 mins before serving"],proteinBreakdown:"Peanut butter 8g + protein powder 8g"}
];

// ==================== PAGE NAVIGATION ====================
function hideAllPages() {
  const pages = ["homePage", "converterPage", "aboutPage", "ingredientPage"];
  pages.forEach(page => {
    const el = document.getElementById(page);
    if (el) el.style.display = "none";
  });
}

function showHome() {
  hideAllPages();
  document.getElementById("homePage").style.display = "block";
}

function showConverter() {
  hideAllPages();
  document.getElementById("converterPage").style.display = "block";
}

function showAbout() {
  hideAllPages();
  document.getElementById("aboutPage").style.display = "block";
}

function showIngredients() {
  hideAllPages();
  document.getElementById("ingredientPage").style.display = "block";
  renderIngredientsLibrary(ingredients);
}

// ==================== RECIPE FUNCTIONS ====================
function openRecipe(index) {
  const r = recipes[index];
  const modal = document.getElementById("modal");
  const detailDiv = document.getElementById("recipeDetail");
  
  detailDiv.innerHTML = `
    <h2>🍽️ ${r.name}</h2>
    <p><strong>🔥 Calories:</strong> ${r.calories} kcal | 
    <strong>💪 Protein:</strong> ${r.protein} | 
    <strong>🍚 Carbs:</strong> ${r.carbs} | 
    <strong>🧈 Fat:</strong> ${r.fat}</p>
    <h3>🛒 Ingredients Needed:</h3>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>📝 Protein Breakdown:</h3>
    <p><em>${r.proteinBreakdown || "See ingredients for details"}</em></p>
    <h3>👨‍🍳 Cooking Steps:</h3>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) closeModal();
};

// ==================== FILTER RECIPES ====================
function filterRecipes() {
  const minProtein = parseFloat(document.getElementById("searchProtein").value);
  const maxCalories = parseFloat(document.getElementById("searchCalories").value);
  const cards = document.querySelectorAll("#homePage .grid .card");

  cards.forEach((card, index) => {
    if (index >= recipes.length) return;
    const recipe = recipes[index];
    let proteinValue = parseFloat(recipe.protein);
    let show = true;
    if (!isNaN(minProtein) && proteinValue < minProtein) show = false;
    if (!isNaN(maxCalories) && recipe.calories > maxCalories) show = false;
    card.style.display = show ? "block" : "none";
  });
}

function resetFilter() {
  document.getElementById("searchProtein").value = "";
  document.getElementById("searchCalories").value = "";
  document.querySelectorAll("#homePage .grid .card").forEach(card => {
    card.style.display = "block";
  });
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ==================== NUTRITION CALCULATOR ====================
document.addEventListener("DOMContentLoaded", function() {
  const heightUnit = document.getElementById("heightUnit");
  const heightCmWrap = document.getElementById("heightCmWrap");
  const heightFtWrap = document.getElementById("heightFtWrap");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (heightUnit) {
    heightUnit.addEventListener("change", function() {
      if (this.value === "ft") {
        heightCmWrap.style.display = "none";
        heightFtWrap.style.display = "flex";
      } else {
        heightCmWrap.style.display = "block";
        heightFtWrap.style.display = "none";
      }
    });
  }

  if (calcBtn) calcBtn.addEventListener("click", calculate);
  if (resetBtn) {
    resetBtn.addEventListener("click", function() {
      document.getElementById("age").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("heightCm").value = "";
      document.getElementById("heightFt").value = "";
      document.getElementById("heightIn").value = "";
      document.getElementById("caloriesResult").innerHTML = "";
      document.getElementById("proteinResult").innerHTML = "";
      document.getElementById("bmiResult").innerHTML = "";
    });
  }
});

function calculate() {
  let gender = document.getElementById("gender").value;
  let age = parseInt(document.getElementById("age").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("heightCm").value);
  let goal = document.getElementById("goal").value;
  let weightUnit = document.getElementById("weightUnit").value;

  const heightUnitSelect = document.getElementById("heightUnit");
  if (heightUnitSelect && heightUnitSelect.value === "ft") {
    let feet = parseFloat(document.getElementById("heightFt").value) || 0;
    let inches = parseFloat(document.getElementById("heightIn").value) || 0;
    heightCm = (feet * 30.48) + (inches * 2.54);
  }

  if (!age || !weight || !heightCm) {
    alert("Please fill all fields");
    return;
  }

  if (weightUnit === "lb") weight = weight * 0.4536;

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
  }

  let calories = bmr * 1.55;
  if (goal === "bulk") calories += 300;
  if (goal === "cut") calories -= 300;

  let protein = weight * 1.8;
  let bmi = weight / ((heightCm / 100) ** 2);
  let bmiCategoryText = getBMICategory(bmi);

  document.getElementById("caloriesResult").innerHTML = `🔥 Daily Calories: <strong>${Math.round(calories)} kcal</strong>`;
  document.getElementById("proteinResult").innerHTML = `💪 Daily Protein: <strong>${protein.toFixed(1)} g</strong>`;
  document.getElementById("bmiResult").innerHTML = `📊 BMI: <strong>${bmi.toFixed(1)} (${bmiCategoryText})</strong>`;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

// ==================== UNIT CONVERTER ====================
function convertWeight() {
  let value = parseFloat(document.getElementById("weightValue").value);
  let type = document.getElementById("weightType").value;
  if (isNaN(value)) return;
  let result = type === "kg-lb" ? value * 2.20462 : value / 2.20462;
  let unit = type === "kg-lb" ? "lb" : "kg";
  document.getElementById("weightResult").innerHTML = `${value} ${type === "kg-lb" ? "kg" : "lb"} = <strong>${result.toFixed(2)} ${unit}</strong>`;
}

function convertHeight() {
  let value = parseFloat(document.getElementById("heightValue").value);
  let type = document.getElementById("heightType").value;
  if (isNaN(value)) return;
  let result = type === "cm-ft" ? value / 30.48 : value * 30.48;
  let unit = type === "cm-ft" ? "ft" : "cm";
  document.getElementById("heightResult").innerHTML = `${value} ${type === "cm-ft" ? "cm" : "ft"} = <strong>${result.toFixed(2)} ${unit}</strong>`;
}

function convertGram() {
  let value = parseFloat(document.getElementById("gramValue").value);
  let type = document.getElementById("gramType").value;
  if (isNaN(value)) return;
  let result = type === "g-oz" ? value * 0.035274 : value / 0.035274;
  let unit = type === "g-oz" ? "oz" : "g";
  document.getElementById("gramResult").innerHTML = `${value} ${type === "g-oz" ? "g" : "oz"} = <strong>${result.toFixed(2)} ${unit}</strong>`;
}

function convertMl() {
  let value = parseFloat(document.getElementById("mlValue").value);
  let type = document.getElementById("mlType").value;
  if (isNaN(value)) return;
  let result = type === "ml-cup" ? value / 240 : value * 240;
  let unit = type === "ml-cup" ? "cups" : "ml";
  document.getElementById("mlResult").innerHTML = `${value} ${type === "ml-cup" ? "ml" : "cups"} = <strong>${result.toFixed(2)} ${unit}</strong>`;
}

// ==================== VIETNAM PAGE ====================
function toggleDetails(card) {
  card.classList.toggle("active");
}

// ==================== INGREDIENT LIBRARY ====================
let ingredientMeal = [];
let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

function renderIngredientsLibrary(data) {
  const list = document.getElementById("ingredientList");
  if (!list) return;
  list.innerHTML = "";

  data.forEach((food) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${food.name}</h3>
      <p>🔥 ${food.cal} cal | 💪 ${food.protein}g P | 🍚 ${food.carbs}g C | 🧈 ${food.fat}g F</p>
      <button class="add-ingredient-btn">+ Add to Meal</button>
    `;
    card.querySelector("button").onclick = () => addIngredientToMeal(food);
    list.appendChild(card);
  });
}

function addIngredientToMeal(food) {
  ingredientMeal.push(food);
  totalCalories += food.cal;
  totalProtein += food.protein;
  totalCarbs += food.carbs;
  totalFat += food.fat;
  updateMealDisplay();
}

function updateMealDisplay() {
  const mealList = document.getElementById("ingredientMealList");
  if (!mealList) return;
  mealList.innerHTML = "";

  ingredientMeal.forEach((ing, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${ing.name}</span><span class="delete-btn" onclick="removeIngredientFromMeal(${idx})">✖</span>`;
    mealList.appendChild(li);
  });

  document.getElementById("ingredientTotalCalories").innerText = Math.round(totalCalories);
  document.getElementById("ingredientTotalProtein").innerText = Math.round(totalProtein);
  document.getElementById("ingredientTotalCarbs").innerText = Math.round(totalCarbs);
  document.getElementById("ingredientTotalFat").innerText = Math.round(totalFat);
}

function removeIngredientFromMeal(idx) {
  const ing = ingredientMeal[idx];
  totalCalories -= ing.cal;
  totalProtein -= ing.protein;
  totalCarbs -= ing.carbs;
  totalFat -= ing.fat;
  ingredientMeal.splice(idx, 1);
  updateMealDisplay();
}

function clearIngredientMeal() {
  ingredientMeal = [];
  totalCalories = 0;
  totalProtein = 0;
  totalCarbs = 0;
  totalFat = 0;
  updateMealDisplay();
}

// Search ingredients
if (document.getElementById("ingredientSearch")) {
  document.getElementById("ingredientSearch").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const filtered = ingredients.filter(i => i.name.toLowerCase().includes(keyword));
    renderIngredientsLibrary(filtered);
  });
}

// Start with home page
showHome();
// ==================== WORLD CULINARY DATABASE ====================
const worldDishes = [
  {
    id: 1,
    name: "Pho",
    country: "Vietnam",
    region: "asia",
    flag: "🇻🇳",
    image: "https://i-giadinh.vnecdn.net/2025/11/17/Pho-bo-Ha-Noi-7-vnexpress-1763-7388-9585-1763372391.jpg",
    shortStory: "Born in early 20th century Northern Vietnam, Pho is more than just noodle soup - it's the soul of Vietnamese cuisine, representing resilience and family.",
    fullStory: "Pho originated in Nam Dinh and Hanoi around the 1900s. It was originally sold by street vendors carrying wooden cabinets. After the Vietnam War, Pho spread globally with refugees, becoming a symbol of Vietnamese culture worldwide. Each bowl tells a story of tradition, patience, and the perfect balance of flavors.",
    funFact: "There are over 50 variations of Pho! The most famous are Pho Bo (beef) and Pho Ga (chicken). The best Pho broth simmers for 12-24 hours.",
    ingredients: [
      "Beef bones (marrow and knuckles) - 2kg",
      "Rice noodles (banh pho) - 500g",
      "Beef brisket or flank - 500g",
      "Beef sirloin (thin slices) - 300g",
      "Star anise - 5 pieces",
      "Cinnamon sticks - 2",
      "Cardamom - 3 pods",
      "Cloves - 4",
      "Coriander seeds - 1 tbsp",
      "Ginger - 1 large piece (charred)",
      "Onion - 2 large (charred)",
      "Fish sauce - 3 tbsp",
      "Rock sugar - 1 tbsp",
      "Garnishes: scallions, cilantro, bean sprouts, Thai basil, lime, chili, hoisin sauce"
    ],
    steps: [
      "Char ginger and onion over open flame until blackened. Rinse.",
      "Toast spices (star anise, cinnamon, cardamom, cloves, coriander) in dry pan 2 mins.",
      "Parboil beef bones 10 mins, drain, rinse. This removes impurities.",
      "Add bones to large pot with 5L water. Simmer 6-8 hours (or pressure cook 90 mins).",
      "Add charred onion, ginger, toasted spices. Simmer another 30 mins.",
      "Add fish sauce and rock sugar. Season to taste. Strain broth.",
      "Brisket: add to broth 1-2 hours before done, remove when tender, slice thin.",
      "Prepare noodles per package (usually soak then boil 30-60 seconds).",
      "Assemble: noodles in bowl, top with brisket and raw sirloin slices.",
      "Ladle boiling hot broth over the meat to cook it rare.",
      "Garnish with scallions, cilantro, and serve with bean sprouts, basil, lime, and chili on the side."
    ]
  },
  {
    id: 2,
    name: "Pad Thai",
    country: "Thailand",
    region: "asia",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    shortStory: "Created during WWII as a national dish to promote rice noodles and save rice, Pad Thai embodies Thai ingenuity and balance of sweet, sour, salty.",
    fullStory: "In the 1930s, Prime Minister Plaek Phibunsongkhram launched a campaign to create a national dish. Pad Thai was born - combining Chinese noodles with Thai flavors. It became a symbol of modern Thailand, served everywhere from street stalls to royal banquets.",
    funFact: "Authentic Pad Thai uses tamarind paste for sourness - not vinegar or lime! The best street vendors in Bangkok cook it in 2 minutes flat on scorching hot woks.",
    ingredients: [
      "Rice noodles (dried) - 200g",
      "Shrimp or tofu - 200g",
      "Eggs - 2",
      "Bean sprouts - 1 cup",
      "Garlic chives - 1/2 cup",
      "Roasted peanuts - 1/4 cup",
      "Tamarind paste - 2 tbsp",
      "Fish sauce - 2 tbsp",
      "Palm sugar - 2 tbsp",
      "Chili flakes - to taste",
      "Lime wedges - for serving"
    ],
    steps: [
      "Soak rice noodles in warm water 30 mins until pliable but not soft. Drain.",
      "Mix tamarind paste, fish sauce, palm sugar, chili flakes in a bowl.",
      "Heat wok high, add oil. Stir-fry shrimp/tofu until cooked. Remove.",
      "Add more oil, crack eggs directly in wok. Scramble until half-set.",
      "Add drained noodles and sauce mixture. Toss vigorously 2-3 mins.",
      "Return protein to wok. Add bean sprouts and chives. Toss 30 seconds.",
      "Serve immediately topped with crushed peanuts and lime wedges on the side."
    ]
  },
  {
    id: 3,
    name: "Sushi",
    country: "Japan",
    region: "asia",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    shortStory: "What began as a method to preserve fish in fermented rice evolved into the world's most celebrated culinary art form - where simplicity meets perfection.",
    fullStory: "Sushi originated in Southeast Asia as narezushi (fermented fish in rice). In Edo period (1600s), Hanaya Yohei created 'Edomae sushi' - fresh fish over vinegared rice, served as fast food. Today, sushi is a global phenomenon, with Michelin-starred masters spending decades perfecting rice temperature and fish aging.",
    funFact: "The world's oldest sushi restaurant is 'Kyuemon' in Japan, operating since 1452! True sushi masters train 10 years before they can touch the fish.",
    ingredients: [
      "Sushi rice (short-grain) - 2 cups",
      "Rice vinegar - 4 tbsp",
      "Sugar - 2 tbsp",
      "Salt - 1 tsp",
      "Fresh salmon/tuna - 200g",
      "Nori (seaweed) sheets - 5",
      "Cucumber, avocado - for rolls",
      "Wasabi and soy sauce - for serving"
    ],
    steps: [
      "Rinse rice until water runs clear. Cook with 2 cups water.",
      "Mix rice vinegar, sugar, salt. Heat to dissolve. Cool.",
      "Spread rice in wooden hangiri (bowl). Fold in vinegar mixture while fanning to cool rapidly.",
      "Slice fish against grain into thin pieces (sashimi style).",
      "For nigiri: Wet hands, shape rice into oval, dab wasabi, place fish on top.",
      "For maki: Place nori on bamboo mat, cover 2/3 with rice, add fillings, roll tightly.",
      "Slice rolls with wet knife. Serve with soy sauce, wasabi, pickled ginger."
    ]
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    country: "Italy",
    region: "europe",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    shortStory: "A humble Roman pasta born from post-WWII American rations, Carbonara proves that simple ingredients - eggs, cheese, cured pork - create magic together.",
    fullStory: "Carbonara's origin is debated: some say charcoal workers (carbonai) made it; others claim American soldiers in 1944 combined their bacon/egg rations with local pasta. True carbonara has NO cream - just egg yolks, pecorino cheese, guanciale (pork jowl), and black pepper.",
    funFact: "In Italy, breaking spaghetti in half is considered a cooking sin! Also, never add cream to carbonara - Italians will politely but firmly correct you.",
    ingredients: [
      "Spaghetti or rigatoni - 400g",
      "Guanciale (or pancetta) - 150g",
      "Egg yolks - 4 large",
      "Pecorino Romano cheese - 100g (grated)",
      "Parmigiano Reggiano - 50g (grated)",
      "Black pepper - 1 tbsp (freshly ground)",
      "Salt - for pasta water"
    ],
    steps: [
      "Boil pasta in salted water (like the sea!). Cook al dente.",
      "Dice guanciale. Cook in cold pan until crispy and fat renders. Remove from heat.",
      "In a bowl, whisk egg yolks, both cheeses, and massive amount of black pepper.",
      "Reserve 1 cup pasta water. Drain pasta, add to guanciale pan off heat.",
      "Quickly pour egg-cheese mixture over pasta. Toss vigorously to create creamy sauce (residual heat cooks eggs without scrambling).",
      "Add pasta water gradually if too thick. Sauce should coat each strand.",
      "Serve immediately with extra pecorino and black pepper. No cream!"
    ]
  },
  {
    id: 5,
    name: "Croissant",
    country: "France",
    region: "europe",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    shortStory: "France's most iconic pastry actually has Austrian roots - but French bakers perfected the art of laminating butter into 27 layers of flaky heaven.",
    fullStory: "The croissant's ancestor is the Austrian kipferl. In 1839, Austrian baker August Zang opened a Viennese bakery in Paris. French bakers reinvented it using laminated dough - folding butter into dough dozens of times. The result? The airy, crispy, 100+ layer croissant we know today.",
    funFact: "A true croissant has 27 layers (3 folds of 3) and takes 3 days to make! The best are slightly bendy - too crispy means overbaked, too soft means underbaked.",
    ingredients: [
      "All-purpose flour - 500g",
      "Cold unsalted butter (for dough) - 50g",
      "Cold unsalted butter (for laminating) - 250g",
      "Sugar - 50g",
      "Salt - 10g",
      "Active dry yeast - 10g",
      "Cold water - 250ml",
      "Milk - 50ml (for egg wash)"
    ],
    steps: [
      "Day 1: Make dough (flour, sugar, salt, yeast, 50g butter, water). Knead 5 mins. Refrigerate overnight.",
      "Day 2: Beat 250g butter into square. Roll dough larger than butter. Enclose butter in dough (like a book).",
      "Roll dough into large rectangle. Fold into thirds (first turn). Refrigerate 1 hour.",
      "Repeat rolling and folding 2 more times (total 3 turns). This creates 27 layers.",
      "Refrigerate overnight again.",
      "Day 3: Roll dough 4mm thick. Cut into triangles.",
      "Roll each triangle from base to tip, gently stretching to create tension.",
      "Proof 2-3 hours until doubled and wobbly.",
      "Brush with egg wash (milk + egg). Bake at 200°C 15-18 mins until deep golden."
    ]
  },
  {
    id: 6,
    name: "Taco al Pastor",
    country: "Mexico",
    region: "americas",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80",
    shortStory: "A beautiful fusion - Lebanese shawarma immigrants adapted their vertical spit technique to Mexican pork and pineapple, creating Mexico's most beloved taco.",
    fullStory: "In the 1930s, Lebanese immigrants brought shawarma (spit-roasted meat) to Mexico. Mexican cooks replaced lamb with pork, added achiote and pineapple, and 'al pastor' (shepherd style) tacos were born. The spinning trompo (spit) with pineapple dripping caramelized juices is now iconic to Mexico City.",
    funFact: "The pineapple on top isn't just decoration - its acidity tenderizes the meat and its sugars create a sweet caramelized crust when it hits the hot trompo!",
    ingredients: [
      "Pork shoulder - 1.5kg",
      "Dried guajillo chilies - 6",
      "Achiote paste - 3 tbsp",
      "Pineapple - 1 whole",
      "Onion - 1",
      "Garlic - 4 cloves",
      "Cumin - 1 tbsp",
      "Oregano - 1 tbsp",
      "Vinegar - 1/4 cup",
      "Corn tortillas - 20",
      "Cilantro, onion, lime - for garnish"
    ],
    steps: [
      "Rehydrate guajillo chilies in hot water 15 mins. Remove seeds.",
      "Blend chilies, achiote, garlic, cumin, oregano, vinegar into smooth marinade.",
      "Slice pork thin. Marinate 4-24 hours.",
      "Stack marinated pork slices on a vertical spit or in loaf pan with pineapple slices interspersed.",
      "Place half pineapple on top of spit/pan. Roast at 180°C 2-3 hours.",
      "When meat is crispy on edges, shave thin slices off the spit.",
      "Warm corn tortillas on a comal (griddle).",
      "Serve: double tortillas, meat, diced onion, cilantro, pineapple chunk, salsa, lime squeeze."
    ]
  },
  {
    id: 7,
    name: "Feijoada",
    country: "Brazil",
    region: "americas",
    flag: "🇧🇷",
    image: "https://spiceworldinc.com/wp-content/uploads/2023/11/Feijoada-Scaled.jpg",
    shortStory: "Brazil's national dish - a rich black bean stew with various pork cuts - represents the country's melting pot of indigenous, Portuguese, and African influences.",
    fullStory: "Feijoada's roots trace to Portuguese bean stews, but enslaved Africans transformed it by adding 'unwanted' pork parts (ears, trotters, tail). Today, full feijoada includes these traditional cuts alongside premium meats. It's a Saturday ritual - families gather, feast slowly, then nap!",
    funFact: "The full feijoada experience includes farofa (toasted cassava flour), orange slices (aid digestion), and caipirinha cocktails. Leftovers taste even better the next day!",
    ingredients: [
      "Black beans - 500g (soaked overnight)",
      "Pork ribs - 500g",
      "Smoked sausage (linguiça) - 300g",
      "Pork belly - 300g",
      "Carne seca (dried beef) - 300g",
      "Bacon - 150g",
      "Onion - 2",
      "Garlic - 6 cloves",
      "Bay leaves - 3",
      "Orange - 1",
      "White rice, farofa, orange slices - for serving"
    ],
    steps: [
      "Night before: soak beans in water. Soak salted meats (carne seca) in separate water, change 3x.",
      "Next day: Cube pork belly, bacon. Cut sausage into chunks.",
      "In large pot, fry bacon to render fat. Brown ribs, pork belly, sausage in batches. Remove.",
      "In same pot, sauté onion and garlic until soft.",
      "Add soaked beans and 3L fresh water. Bring to boil, reduce to simmer.",
      "Add bay leaves and orange (washed, cut in half, squeezed into pot then add whole orange).",
      "After 1 hour, add all meats back to pot. Simmer 2-3 hours until beans creamy and meats tender.",
      "Taste salt - smoked meats are salty, so go easy!",
      "Remove orange halves. Serve with white rice, collard greens, farofa, and orange slices on the side."
    ]
  },
  {
    id: 8,
    name: "Hainanese Chicken Rice",
    country: "Singapore",
    region: "asia",
    flag: "🇸🇬",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
    shortStory: "Originally from Hainan, China, this dish was perfected by Singapore street vendors - creating silky poached chicken with fragrant rice cooked in chicken fat.",
    fullStory: "Chinese immigrants from Hainan brought this dish to Singapore. But Singaporeans elevated it - simmering rice in chicken stock and fat, serving with chili sauce and ginger paste. Each hawker has their secret recipe passed down generations. It's now Singapore's national dish.",
    funFact: "The most expensive Hainanese Chicken Rice ever sold was $1,500 SGD! The chicken was free-range, the rice aged, and served with bird's nest soup.",
    ingredients: [
      "Whole chicken - 1.5kg",
      "Jasmine rice - 500g",
      "Chicken fat - 50g (or butter)",
      "Ginger - large piece",
      "Garlic - 6 cloves",
      "Pandan leaves - 2 (optional)",
      "Scallions - bunch",
      "Cucumber - for garnish",
      "Sesame oil - 2 tbsp",
      "Soy sauce - for serving"
    ],
    steps: [
      "Rub chicken with salt. Stuff cavity with ginger chunks, scallions.",
      "Bring large pot of water (enough to submerge chicken) to boil with ginger and pandan.",
      "Lower chicken into boiling water breast-side down. Water should just cover.",
      "Immediately reduce to low simmer (NOT boiling). Cook 40 minutes, turning once.",
      "Test doneness: pierce thigh - clear juice means done. Chicken should be silky, not falling apart.",
      "Remove chicken, plunge into ice bath 15 mins. This makes skin gelatinous.",
      "Reserve chicken broth 2 cups.",
      "Heat chicken fat or butter in wok. Sauté minced garlic and ginger until fragrant.",
      "Add dry rice. Stir-fry 2 mins until coated and aromatic.",
      "Transfer rice to rice cooker. Add 2 cups reserved broth. Cook as normal.",
      "When chicken cooled, brush with sesame oil over skin. Rub soy sauce for color.",
      "Serve: sliced chicken over cucumber, rice on side, ginger-scallion oil dip, thick dark soy, chili sauce."
    ]
  },
  {
    id: 9,
    name: "Moussaka",
    country: "Greece",
    region: "europe",
    flag: "🇬🇷",
    image: "https://www.recipetineats.com/tachyon/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg?resize=500%2C375",
    shortStory: "Often called 'Greek lasagna,' moussaka layers eggplant, spiced meat, and creamy béchamel - a dish that reflects centuries of Ottoman, Balkan, and Mediterranean influences.",
    fullStory: "Moussaka evolved from Arabic 'musaqqa'a' (meaning chilled). Greeks added béchamel sauce in the 1920s thanks to chef Nikolaos Tselementes. Each Balkan country has its version - but Greece's layered masterpiece with nutmeg-infused cream topping is world-famous.",
    funFact: "Traditional moussaka requires frying each eggplant slice separately - soaking up lots of olive oil. Greeks serve it at room temperature, not hot, so flavors meld.",
    ingredients: [
      "Eggplants - 4 large",
      "Potatoes - 3 (optional, for base)",
      "Ground lamb or beef - 800g",
      "Onion - 2",
      "Garlic - 4 cloves",
      "Tomato paste - 3 tbsp",
      "Crushed tomatoes - 400g",
      "Red wine - 1/2 cup",
      "Cinnamon, allspice - 1 tsp each",
      "Olive oil - for frying",
      "For béchamel: butter 100g, flour 100g, milk 1L, eggs 3, nutmeg, parmesan 100g"
    ],
    steps: [
      "Slice eggplants 1cm thick. Salt both sides, rest 30 mins to remove bitterness. Pat dry.",
      "Pan-fry eggplant in olive oil until golden both sides. Drain on paper towels.",
      "Brown meat, drain fat, remove. Sauté onion and garlic.",
      "Add meat back with wine, tomato paste, tomatoes, cinnamon, allspice. Simmer 20 mins.",
      "Make béchamel: melt butter, whisk flour 2 mins. Add warm milk gradually while whisking constantly to avoid lumps.",
      "Simmer béchamel 5 mins until thick. Off heat, add egg yolks, nutmeg, parmesan.",
      "Layer in baking dish: potatoes (optional), then eggplant, then meat sauce, repeat.",
      "Pour béchamel on top. Sprinkle with more cheese.",
      "Bake at 180°C 45 mins until top is golden and bubbling.",
      "Let rest 20 mins before serving (crucial!). Serve with Greek salad."
    ]
  },
  {
    id: 10,
    name: "Hummus",
    country: "Lebanon/Palestine",
    region: "middle-east",
    flag: "🇱🇧🇵🇸",
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80",
    shortStory: "More than a dip, hummus represents Levantine hospitality - a 700-year-old recipe where chickpeas and tahini blend into creamy harmony at every family table.",
    fullStory: "Hummus (meaning 'chickpeas' in Arabic) has been eaten in the Middle East since the 13th century. Syria, Lebanon, Israel, and Palestine all claim it - but the true heart is in Levantine homes where families pass down ratios of tahini to lemon. Eating hummus with fresh pita at breakfast is a daily ritual.",
    funFact: "Lebanon holds the record for the world's largest hummus - 10,450 kg made in 2010! The biggest hummus fight? Lebanon vs. Israel over trademark rights. Pro tip: authentic hummus has no garlic in the base - that's a modern Western addition.",
    ingredients: [
      "Dried chickpeas - 250g (soaked overnight)",
      "Baking soda - 1 tsp",
      "Tahini (sesame paste) - 150g",
      "Lemon juice - 1/2 cup (fresh squeezed)",
      "Garlic - 1 clove (optional, traditional has none)",
      "Cumin - 1/2 tsp",
      "Salt - 1 tsp",
      "Ice water - 4-6 tbsp",
      "Paprika, olive oil, parsley - for garnish"
    ],
    steps: [
      "Soak chickpeas overnight with baking soda (helps soften skins). Rinse thoroughly.",
      "Boil chickpeas in fresh water with pinch of baking soda 1-2 hours until extremely tender (mashable between fingers).",
      "Drain chickpeas, reserve cooking water. Rub chickpeas between towels to remove skins (this makes hummus silky).",
      "Blend hot chickpeas while warm - this is key for creamy texture!",
      "Add tahini, lemon juice, garlic (if using), cumin, salt. Blend.",
      "Slowly add ice water while blending until ultra-smooth (takes 5-10 minutes). Scrape down sides often.",
      "Taste and adjust - more lemon for tang, more tahini for nuttiness.",
      "Serve in wide bowl, make well in center, fill with good olive oil.",
      "Garnish with paprika, parsley, pine nuts. Serve with warm pita, raw onion, tomato, pickles."
    ]
  }
];
// ==================== THÊM MÓN ĂN MỚI VÀO WORLD DISHES ====================
const additionalDishes = [
  {
    id: 11,
    name: "Kimchi Jjigae (Kimchi Stew)",
    country: "South Korea",
    region: "asia",
    flag: "🇰🇷",
    image: "https://www.eatingwell.com/thmb/PtjVB6QZxEin5M6hHu0GvvPVubg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Kimchi-jjigae-de45aa8daada45a6b4daf266f0b36011.jpg",
    shortStory: "A fiery, bubbling kimchi stew that warms both body and soul - Korea's ultimate comfort food born from the need to use over-fermented kimchi.",
    fullStory: "Kimchi Jjigae originated during the Joseon Dynasty when families needed ways to use kimchi that had become too sour. Today, every Korean household has their own recipe, passed down through generations. It's the most cooked dish in Korean homes - perfect with steamed rice on a cold day.",
    funFact: "In Korea, there's a saying: 'Kimchi jjigae tastes better the next day!' Koreans often make extra just for leftovers. Some add instant ramen noodles or sliced rice cakes for extra heartiness.",
    ingredients: [
      "Aged kimchi - 300g (sour is good!)",
      "Pork belly or tuna (canned) - 200g",
      "Tofu (firm) - 200g, cubed",
      "Onion - 1 medium, sliced",
      "Green onions - 3 stalks, chopped",
      "Garlic - 4 cloves, minced",
      "Gochugaru (Korean chili flakes) - 1 tbsp",
      "Gochujang (Korean chili paste) - 1 tbsp",
      "Soy sauce - 1 tbsp",
      "Sesame oil - 1 tsp",
      "Water or anchovy stock - 3 cups",
      "Optional: ramen noodles or rice cakes"
    ],
    steps: [
      "Cut kimchi into bite-sized pieces if large. Reserve 2 tbsp of kimchi juice.",
      "In a Korean earthenware pot (ttukbaegi) or heavy pot, sauté pork belly until golden (5 mins).",
      "Add kimchi, gochugaru, gochujang, and garlic. Stir-fry 5 minutes until fragrant.",
      "Pour in water/stock and reserved kimchi juice. Bring to boil.",
      "Reduce to medium heat, simmer 15 minutes until flavors meld.",
      "Add tofu cubes and onion. Simmer another 5-7 minutes.",
      "Finish with sesame oil and chopped green onions.",
      "Serve bubbling hot in the pot with a bowl of steamed rice on the side.",
      "Pro tip: Crack an egg into the stew in the last 2 minutes for extra richness!"
    ]
  },
  {
    id: 12,
    name: "Bibimbap",
    country: "South Korea",
    region: "asia",
    flag: "🇰🇷",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-03-bimbimbap%2Fbibimbap-074",
    shortStory: "A vibrant 'mixed rice' bowl that embodies Korean harmony - colorful vegetables, meat, egg, and gochujang all stirred together into perfection.",
    fullStory: "Bibimbap (meaning 'mixed rice') dates back to the Joseon Dynasty. It was traditionally eaten on the eve of the lunar new year to use up leftover side dishes. The stone pot version (dolsot bibimbap) was invented in the 1970s and creates a crispy rice crust on the bottom.",
    funFact: "Before eating, Koreans say 'Bibim bap!' and mix everything vigorously. The number of vegetable toppings can reach up to 15 different types in royal court cuisine!",
    ingredients: [
      "Steamed rice - 2 cups",
      "Spinach - 100g, blanched",
      "Carrots - 1, julienned",
      "Zucchini - 1, julienned",
      "Bean sprouts - 100g, blanched",
      "Shiitake mushrooms - 5, sliced",
      "Beef (ribeye) - 150g, thinly sliced",
      "Egg - 1, sunny side up",
      "Gochujang - 3 tbsp",
      "Sesame oil - 1 tbsp",
      "Roasted seaweed (gim) - for garnish",
      "Sesame seeds - for garnish"
    ],
    steps: [
      "Marinate beef: soy sauce, garlic, sesame oil, sugar - 15 mins.",
      "Stir-fry each vegetable separately with salt and sesame oil (preserve colors).",
      "Stir-fry marinated beef until cooked (3-4 mins).",
      "Fry egg sunny-side up (runny yolk is key!).",
      "For dolsot (stone pot): Heat stone pot on high, brush inside with sesame oil.",
      "Add rice to hot stone pot, arrange vegetables and beef in colorful sections on top.",
      "Place egg in center with gochujang on one side.",
      "If using regular bowl: Arrange toppings beautifully over rice.",
      "To eat: Stir everything together vigorously until rice is evenly coated red.",
      "Scrape crispy rice from bottom of stone pot - it's the most prized part!"
    ]
  },
  {
    id: 13,
    name: "Paella",
    country: "Spain",
    region: "europe",
    flag: "🇪🇸",
    image: "https://www.seriouseats.com/thmb/GBqke1l0SqDFNjJrYfqnqV05FQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__07__20190618-grilled-paella-vicky-wasik-33-103a16c9dc654bd58982f5a1b5a1e5ca.jpg",
    shortStory: "A saffron-infused rice dish born in Valencia's rice fields - where farmers cooked it over open fire with whatever they could catch: rabbit, chicken, snails, and beans.",
    fullStory: "Paella originated in the mid-19th century near Lake Albufera in Valencia. The name comes from the 'paellera' (wide, shallow pan). Traditionally eaten for lunch, not dinner, and always cooked by men over orange wood fires. The socarrat (caramelized rice bottom) is considered the best part!",
    funFact: "In Valencia, rabbit and snails are traditional paella ingredients. Seafood paella was invented later for tourists! Also, adding chorizo to paella is a huge insult to Valencians.",
    ingredients: [
      "Bomba or Calasparra rice - 400g (short-grain, absorbs flavor)",
      "Chicken thighs - 400g, diced",
      "Rabbit (optional) - 300g",
      "Green beans - 150g, chopped",
      "Butter beans (garrofón) - 100g",
      "Tomato - 2, grated",
      "Garlic - 4 cloves",
      "Sweet paprika - 1 tbsp",
      "Saffron threads - 1 tsp (soaked in 2 tbsp warm water)",
      "Rosemary - 2 sprigs",
      "Olive oil - 1/2 cup",
      "Water or chicken stock - 1.2L",
      "Lemon wedges - for serving"
    ],
    steps: [
      "Heat olive oil in paella pan (or large wide skillet) over medium-high heat.",
      "Brown chicken and rabbit until golden on all sides (8-10 mins). Remove.",
      "In same pan, sauté green beans and butter beans 3-4 mins.",
      "Add grated tomato and garlic. Cook until tomato reduces (5 mins).",
      "Return meat to pan. Add paprika and stir quickly (doesn't burn).",
      "Add rice, spread evenly. Stir to coat rice in oil and tomato (2 mins).",
      "Pour hot water/stock around rice (don't stir after this point!).",
      "Add saffron water, rosemary. Adjust salt. Bring to boil.",
      "Reduce to medium heat. Cook 18-20 minutes WITHOUT stirring.",
      "During last 5 minutes, increase heat to high to create socarrat (crispy bottom).",
      "Listen for crackling sounds - that's the socarrat forming!",
      "Remove from heat, cover with newspaper or towel, rest 5 minutes.",
      "Serve directly from pan with lemon wedges. Never add chorizo!"
    ]
  },
  {
    id: 14,
    name: "Patatas Bravas",
    country: "Spain",
    region: "europe",
    flag: "🇪🇸",
    image: "https://www.simplyrecipes.com/thmb/UiqoGtmbOYp9o8TLFJU_CuPz2Q4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/simply-recipes-patatas-bravas-lead-3-eca48aed6f9b4c4db38c35fdd1dc1509.jpg",
    shortStory: "Spain's most iconic tapa - crispy fried potatoes drenched in spicy tomato bravas sauce and creamy aioli, perfect with cold beer.",
    fullStory: "Patatas Bravas (meaning 'fierce potatoes') originated in Madrid's taverns during the 1950s. Every bar has its own secret sauce recipe, fiercely guarded. The dish represents Spanish bar culture - sharing small plates with friends over conversation.",
    funFact: "The 'bravas' sauce's heat level varies wildly - from mild to 'bring milk' hot. Madrid bars often have competitions for the best sauce. Some add a splash of brandy or sherry for depth!",
    ingredients: [
      "Potatoes - 800g (Yukon gold or Russet)",
      "Olive oil - for frying",
      "Salt - 1 tsp",
      "For bravas sauce:",
      "Tomato sauce - 200ml",
      "Olive oil - 3 tbsp",
      "Garlic - 3 cloves",
      "Paprika (smoked) - 1 tbsp",
      "Cayenne pepper - 1 tsp (adjust to taste)",
      "Vinegar - 1 tsp",
      "For aioli:",
      "Mayonnaise - 1/2 cup",
      "Garlic - 2 cloves, minced",
      "Lemon juice - 1 tsp"
    ],
    steps: [
      "Peel potatoes, cut into 2cm irregular chunks (not uniform - more surface for sauce!).",
      "Soak in cold water 30 minutes to remove starch. Drain and pat VERY dry.",
      "Heat olive oil in deep pan to 180°C (oil sizzles with a potato piece).",
      "Fry potatoes in batches 4-5 minutes until pale yellow. Remove, drain on paper towels.",
      "Increase oil temperature. Fry potatoes again 3-4 minutes until golden and crispy.",
      "For bravas sauce: Sauté garlic in olive oil 1 minute.",
      "Add tomato sauce, paprika, cayenne, vinegar. Simmer 5-7 minutes until thickened.",
      "For aioli: mix mayonnaise, minced garlic, lemon juice.",
      "To serve: Arrange crispy potatoes on plate, drizzle bravas sauce, then aioli.",
      "Serve immediately while potatoes are still hot and crispy!"
    ]
  },
  {
    id: 15,
    name: "Peking Duck",
    country: "China",
    region: "asia",
    flag: "🇨🇳",
    image: "https://www.wildgreatwall.com/wp-content/uploads/2019/05/Beijing-Roast-Duck-Peking-Duck-History.jpg",
    shortStory: "An imperial dish dating back 600 years - Beijing's most famous export where crispy skin, thin pancakes, and hoisin sauce create perfect harmony.",
    fullStory: "Peking Duck originated in Nanjing during the Ming Dynasty before the capital moved to Beijing. Imperial chefs perfected the art of air-drying and roasting ducks to create paper-thin crispy skin. Today, it's China's national dish, with restaurants specializing in nothing else.",
    funFact: "A true Peking Duck chef trains for 5+ years just to learn the carving technique! The best ducks come from the Zhaozhuang area - raised specifically for this dish. One duck serves 2-3 people.",
    ingredients: [
      "Whole duck - 2.5kg (Pekin breed preferred)",
      "Maltose or honey - 3 tbsp",
      "Chinese black vinegar - 2 tbsp",
      "Soy sauce - 2 tbsp",
      "Five-spice powder - 1 tbsp",
      "Salt - 1 tbsp",
      "For serving:",
      "Chinese pancakes (Mandarin pancakes) - 20",
      "Hoisin sauce - 1/2 cup",
      "Cucumber - 1, julienned",
      "Scallions - bunch, cut into thin strips",
      "Sugar - for dipping crispy skin"
    ],
    steps: [
      "Day 1: Clean duck thoroughly, remove neck and giblets.",
      "Pour boiling water over duck skin 3 times to tighten pores. This creates crispy skin!",
      "Mix maltose, vinegar, soy sauce, and 500ml warm water.",
      "Brush duck with mixture. Air-dry in refrigerator uncovered 12-24 hours (crucial step!).",
      "Day 2: Preheat oven to 200°C. Stuff duck with orange slices and scallions.",
      "Roast duck breast-up for 45 minutes on a rack with water in bottom pan.",
      "Flip duck, roast another 30-40 minutes until skin is mahogany red and crispy.",
      "Let rest 10 minutes. Carve tableside - skin first, then meat slices.",
      "To eat: Spread hoisin sauce on pancake, add duck slice, skin, cucumber, scallion.",
      "Roll up like a burrito. Some dip crispy skin in sugar first (imperial style).",
      "Use leftover duck bones for soup or fried rice."
    ]
  },
  {
    id: 16,
    name: "Mapo Tofu",
    country: "China",
    region: "asia",
    flag: "🇨🇳",
    image: "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg",
    shortStory: "A Sichuan classic named after a pockmarked-faced grandmother - numbing, spicy, and addictive, this tofu dish revolutionized Chinese cooking worldwide.",
    fullStory: "Mapo Tofu was created in 1862 by Chen Mapo (Chen the Pockmarked Grandmother) who ran a small restaurant in Chengdu. Her secret was combining doubanjiang (fermented broad bean paste) with Sichuan peppercorns, creating the signature 'mala' (numbing-spicy) flavor profile.",
    funFact: "Authentic Mapo Tofu uses beef, not pork (many modern versions use pork). The sauce should coat the tofu completely. Vegetarian versions exist but purists disagree!",
    ingredients: [
      "Soft or medium-firm tofu - 500g, cut into 2cm cubes",
      "Ground beef or pork - 150g",
      "Doubanjiang (Sichuan fermented bean paste) - 2 tbsp",
      "Sichuan peppercorns - 1 tbsp (toasted and ground)",
      "Dried red chilies - 6, chopped",
      "Fermented black beans - 1 tbsp (rinsed, optional)",
      "Garlic - 4 cloves, minced",
      "Ginger - 1 inch, minced",
      "Green onions - 3, chopped",
      "Chicken stock - 1 cup",
      "Soy sauce - 1 tbsp",
      "Cornstarch slurry - 2 tsp cornstarch + 2 tbsp water",
      "Chili oil - 1 tbsp"
    ],
    steps: [
      "Blanch tofu cubes in salted boiling water 2 minutes. Drain gently (keeps shape).",
      "Toast Sichuan peppercorns in dry pan until fragrant, grind to powder.",
      "Heat wok, add 2 tbsp oil. Fry ground beef until crispy (5-6 mins). Remove.",
      "In same wok, add doubanjiang, stir-fry 1-2 minutes until oil turns red.",
      "Add garlic, ginger, fermented black beans, dried chilies. Stir-fry 30 seconds.",
      "Return beef to wok. Add chicken stock and soy sauce. Bring to simmer.",
      "Gently add tofu cubes. Simmer 5 minutes, shaking wok (don't stir - tofu breaks).",
      "Add Sichuan peppercorn powder (half at first - adjust heat).",
      "Slowly pour cornstarch slurry while shaking wok to thicken sauce.",
      "Finish with chili oil and most green onions.",
      "Serve hot over steamed rice. Top with remaining green onions and extra peppercorn powder.",
      "Warning: The numbing sensation is normal! It's the Sichuan peppercorns working."
    ]
  },
  {
    id: 17,
    name: "Borscht (Борщ)",
    country: "Ukraine",
    region: "europe",
    flag: "🇺🇦",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Borscht_served.jpg",
    shortStory: "Ukraine's iconic beetroot soup - a vibrant ruby-red bowl that warms the soul, with roots in ancient Slavic cuisine and UNESCO heritage status.",
    fullStory: "Borscht has been Ukraine's national dish for over 1000 years. The word comes from 'borshchevnik' (hogweed), the original plant used. In 2022, UNESCO added Ukrainian borscht to the Intangible Cultural Heritage list, acknowledging its central role in Ukrainian identity and hospitality.",
    funFact: "Ukrainian families each have their own borscht recipe passed through generations. Some add beans, mushrooms, apricots, or even smoked pears! The soup tastes better the next day after flavors meld.",
    ingredients: [
      "Beetroots - 400g (3 medium), peeled and julienned",
      "Potatoes - 300g (2 medium), diced",
      "Cabbage - 200g, shredded",
      "Carrots - 150g (2 small), julienned",
      "Onion - 1 large, chopped",
      "Tomato paste - 2 tbsp",
      "Beef or pork ribs - 400g (with bone)",
      "Beef stock - 2L",
      "Garlic - 3 cloves, minced",
      "Bay leaves - 2",
      "Vinegar - 1 tbsp (preserves beet color)",
      "Sugar - 1 tsp",
      "Dill - fresh, for garnish",
      "Sour cream - for serving",
      "Bacon fat or oil - for frying"
    ],
    steps: [
      "In large pot, cover meat with cold water. Bring to boil, skim foam.",
      "Reduce to simmer. Add bay leaves. Cook 1.5-2 hours until meat is tender.",
      "Remove meat, cut off bone, dice meat. Return meat to pot.",
      "In a separate pan, sauté beets with vinegar and sugar for 10 minutes (this locks the red color!).",
      "In another pan, fry bacon fat/oil. Sauté onion and carrots until soft (5 mins). Add tomato paste, cook 2 mins.",
      "Add potatoes to broth. Cook 10 minutes.",
      "Add cabbage, sautéed beets, and onion-carrot mixture. Cook 10-15 minutes.",
      "Add garlic, salt, pepper to taste. Turn off heat.",
      "Let borscht sit covered for 20 minutes (flavors marry).",
      "Serve hot with a generous dollop of sour cream and fresh dill on top.",
      "Traditional with pampushky (garlic bread rolls) on the side."
    ]
  },
  {
    id: 18,
    name: "Varenyky (Pierogi)",
    country: "Ukraine",
    region: "europe",
    flag: "🇺🇦",
    image: "https://traktirla.com/tarzana/wp-content/uploads/sites/3/2020/09/shutterstock_187635122-1.jpg",
    shortStory: "Half-moon dumplings stuffed with potato, cheese, meat, or fruit - Ukraine's ultimate comfort food, symbolizing the moon and family gatherings.",
    fullStory: "Varenyky (meaning 'boiled things') have been in Ukrainian cuisine since the 13th century. They're traditionally made during family holidays, with each member helping. In Ukrainian folklore, the moon is called 'Miesiąc varenyk' because of its shape. Christmas varenyky often have a coin in one dumpling for good luck.",
    funFact: "The world record for largest varenyk was set in Ukraine - 75kg! Ukrainians eat them with sour cream, fried onions, and salo (cured pork fat). Sweet versions with cherries or berries are popular in summer.",
    ingredients: [
      "For dough: All-purpose flour - 3 cups",
      "Warm water - 1 cup",
      "Egg - 1",
      "Salt - 1/2 tsp",
      "Oil - 2 tbsp",
      "For potato filling: Potatoes - 500g, mashed",
      "Cheddar or farmer's cheese - 200g",
      "Onion - 1, caramelized",
      "Butter - 3 tbsp",
      "For serving: Sour cream, fried onions, bacon bits, dill"
    ],
    steps: [
      "Make dough: Mix flour and salt. Make well, add egg, oil, warm water.",
      "Knead 10 minutes until smooth and elastic. Rest covered 30 minutes.",
      "Prepare filling: Mix mashed potatoes, cheese, caramelized onions, salt, pepper.",
      "Roll dough to 2-3mm thickness. Cut 4-inch circles using glass or cutter.",
      "Place 1 tbsp filling in center of each circle. Fold into half-moon.",
      "Press edges firmly to seal (use fork tines for decorative edge).",
      "Boil large pot of salted water. Drop varenyky 6-8 at a time.",
      "Cook 3-4 minutes - they're done when floating and puffy.",
      "Remove with slotted spoon, toss with butter to prevent sticking.",
      "Serve hot with sour cream, fried onions, and dill.",
      "For fried version: After boiling, pan-fry in butter until golden on both sides.",
      "Sweet version: Fill with cherries or berries, serve with honey and sour cream."
    ]
  },
  {
    id: 19,
    name: "Banh Mi",
    country: "Vietnam",
    region: "asia",
    flag: "🇻🇳",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/66/94/19/banh-mi-362.jpg?w=900&h=-1&s=1",
    shortStory: "The world's greatest sandwich - French baguette meets Vietnamese flavors, creating crispy, savory, sour, spicy, and sweet perfection in every bite.",
    fullStory: "Banh Mi was born during French colonial rule (1887-1954). Vietnamese bakers replaced wheat flour with rice flour for extra crispiness. After the fall of Saigon in 1975, banh mi vendors fled to the US, Australia, and France, taking their secret recipes global. Today, it's on UNESCO's tentative list for cultural heritage.",
    funFact: "There are 100+ banh mi fillings! The most famous are Đặc Biệt (special combination) with ham, head cheese, pâté, and pork roll. The best banh mi has a crackling crust - you should hear it break!",
    ingredients: [
      "Baguette - 1 fresh, crispy (not too dense)",
      "Pâté - 2 tbsp (pork liver)",
      "Mayonnaise - 2 tbsp",
      "Vietnamese ham (cha lua) - 3 slices",
      "Pork roll (gio thu) - 2 slices",
      "Grilled pork (thit nuong) - 100g",
      "Pickled daikon and carrot (do chua) - 1/2 cup",
      "Cucumber slices - 6-8",
      "Fresh cilantro - handful",
      "Jalapeno or red chili - slices (to taste)",
      "Maggi seasoning or soy sauce - 1 tsp"
    ],
    steps: [
      "Night before: Make do chua (pickled daikon + carrot) in vinegar, sugar, salt solution.",
      "Preheat oven to 180°C. Warm baguette 3-4 minutes until extra crispy.",
      "Slice baguette lengthwise (don't cut all the way through - create hinge!).",
      "Spread pâté on one side, mayonnaise on the other.",
      "Layer: Vietnamese ham, pork roll, grilled pork (if using multiple meats).",
      "Add generous handful of pickled carrots/daikon (drained).",
      "Add cucumber slices, cilantro sprigs, chili slices.",
      "Drizzle Maggi sauce over fillings.",
      "Close sandwich gently, press down lightly.",
      "Wrap in paper (like street vendors) or serve immediately on plate.",
      "The crispy crust should crack when bitten!",
      "Pro tip: Some vendors dip knife in chili sauce before cutting the baguette."
    ]
  }
];

// Merge additional dishes into main worldDishes array
worldDishes.push(...additionalDishes);

// Re-render if on about page
const originalFilterCountry = filterCountry;
filterCountry = function(region) {
  currentFilter = region;
  
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(region) || 
        (region === "all" && btn.textContent.includes("All")) ||
        (btn.textContent.toLowerCase().includes("asia") && region === "asia") ||
        (btn.textContent.toLowerCase().includes("europe") && region === "europe") ||
        (btn.textContent.toLowerCase().includes("americas") && region === "americas") ||
        (btn.textContent.toLowerCase().includes("middle east") && region === "middle-east")) {
      btn.classList.add("active");
    }
  });
  
  let filtered = region === "all" ? worldDishes : worldDishes.filter(dish => dish.region === region);
  renderWorldDishes(filtered);
};

// Update render function to show all dishes
if (typeof renderWorldDishes === 'function') {
  renderWorldDishes(worldDishes);
}
// Render world dishes
function renderWorldDishes(dishes = worldDishes) {
  const grid = document.getElementById("worldFoodGrid");
  if (!grid) return;
  
  grid.innerHTML = dishes.map(dish => `
    <div class="dish-card" onclick="openDishModal(${dish.id})">
      <img src="${dish.image}" alt="${dish.name}" onerror="this.src='https://placehold.co/600x400?text=${encodeURIComponent(dish.name)}'">
      <span class="country-badge">${dish.flag}</span>
      <h3>${dish.name}</h3>
      <div class="country-name">${dish.country}</div>
      <div class="short-story">${dish.shortStory.substring(0, 100)}...</div>
    </div>
  `).join("");
}

// Filter by region
let currentFilter = "all";
function filterCountry(region) {
  currentFilter = region;
  
  // Update active button
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(region) || (region === "all" && btn.textContent === "All")) {
      btn.classList.add("active");
    }
  });
  
  if (region === "all") {
    renderWorldDishes(worldDishes);
  } else {
    const filtered = worldDishes.filter(dish => dish.region === region);
    renderWorldDishes(filtered);
  }
}

// Open dish modal
function openDishModal(id) {
  const dish = worldDishes.find(d => d.id === id);
  if (!dish) return;
  
  const modal = document.getElementById("dishModal");
  const detailDiv = document.getElementById("dishDetail");
  
  detailDiv.innerHTML = `
    <div class="dish-header">
      <img class="dish-header-img" src="${dish.image}" alt="${dish.name}" onerror="this.src='https://placehold.co/250x200?text=${encodeURIComponent(dish.name)}'">
      <div class="dish-info">
        <h2>${dish.flag} ${dish.name}</h2>
        <span class="country-tag">${dish.country}</span>
        <p><strong>${dish.shortStory}</strong></p>
      </div>
    </div>
    
    <div class="story-box">
      <h3>📖 The Story Behind ${dish.name}</h3>
      <p>${dish.fullStory}</p>
    </div>
    
    <div class="fun-fact">
      💡 <strong>Fun Fact:</strong> ${dish.funFact}
    </div>
    
    <h3>🛒 Ingredients</h3>
    <ul class="ingredients-list">
      ${dish.ingredients.map(ing => `<li>${ing}</li>`).join("")}
    </ul>
    
    <h3>👨‍🍳 Cooking Steps</h3>
    <ol class="steps-list">
      ${dish.steps.map(step => `<li>${step}</li>`).join("")}
    </ol>
  `;
  
  modal.style.display = "flex";
}

function closeDishModal() {
  document.getElementById("dishModal").style.display = "none";
}

// Initialize world dishes when showing about page
const originalShowAbout = showAbout;
showAbout = function() {
  hideAllPages();
  document.getElementById("aboutPage").style.display = "block";
  if (document.getElementById("worldFoodGrid")) {
    renderWorldDishes(worldDishes);
  }
};

// Close dish modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  const dishModal = document.getElementById("dishModal");
  if (event.target === modal) closeModal();
  if (event.target === dishModal) closeDishModal();
};
