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