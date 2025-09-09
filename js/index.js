const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};
//display all plants
const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayCategoriesTree(data.plants));
};

// display categories wise trees
const loadCategoriesTree = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoriesTree(data.plants));
};

const displayCategoriesTree = (categoriesTrees) => {
  const categoriesCard = document.getElementById("categories-plants-card");
  categoriesCard.innerHTML = "";

  categoriesTrees.forEach((tree) => {
    const categoriePlant = document.createElement("div");
    categoriePlant.innerHTML = `

 <div class="bg-white p-4 rounded-lg shadow flex flex-col">
      
      <!-- Image -->
      <div class="h-40 rounded mb-3 overflow-hidden">
        <img src="${tree.image}" alt="${
      tree.plant_name
    }" class="w-full h-full object-cover">
      </div>

      <!-- Name -->
      <h4 class="font-semibold">${tree.name}</h4>

      <!-- Description -->
      <p class="text-sm text-gray-600 mb-3">
        ${tree.description || "No description available."}
      </p>

      <!-- Category & Price -->
      <div class="flex items-center justify-between mb-3 mt-auto">
        <span class="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
          ${tree.category}
        </span>
        <span class="font-bold">৳${tree.price}</span>
      </div>

      <!-- Button -->
      <button class="bg-green-600 text-white w-full py-2 rounded">
        Add to Cart
      </button>
    </div>

    `;
    categoriesCard.appendChild(categoriePlant);
  });
};

//display categories
const displayCategories = (categories) => {
  const categoriesList = document.getElementById("categories-list");
  categoriesList.innerHTML = "";

  for (let categorie of categories) {
    const catBtn = document.createElement("div");
    catBtn.innerHTML = `
    <a onclick = "loadCategoriesTree('${categorie.id}')" class="block px-3 py-2 rounded hover:bg-green-100 text-green-700 font-medium bg-green-50">${categorie.category_name}</a>
    `;
    categoriesList.appendChild(catBtn);
  }
};

loadCategories();
loadAllTrees();
