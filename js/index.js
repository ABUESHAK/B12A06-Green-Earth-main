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

//remove active
const removeActive = () => {
  const categoriesButtons = document.querySelectorAll(".category-btn");
  categoriesButtons.forEach((btn) => btn.classList.remove("active"));
};

//load tree details function

const loadTreeDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayTreeDetails(details.plants);
};
//display tree details
const displayTreeDetails = (treeDetails) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `<div class="bg-white p-4 rounded-lg shadow flex flex-col h-full">
  <!-- Image -->
  <div class="h-40 rounded mb-3 overflow-hidden">
    <img src="${treeDetails.image}" 
         alt="${treeDetails.name}" 
         class="w-full h-full object-cover">
  </div>

  <!-- Name -->
  <h4 onclick="loadTreeDetail(${treeDetails.id})" class="font-semibold">${
    treeDetails.name
  }</h4>

  <!-- Description -->
  <p class="text-sm text-gray-600 mb-3">
    ${treeDetails.description || "No description available."}
  </p>

  <!-- Category & Price -->
  <div class="flex items-center justify-between mb-3 mt-auto">
    <span class="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
      ${treeDetails.category}
    </span>
    <span class="font-bold">৳${treeDetails.price}</span>
  </div>

  <!-- Button -->
  <button class="bg-green-600 text-white w-full py-2 rounded">
    Add to Cart
  </button>
</div>`;
  document.getElementById("tree_modal").showModal();
};

// display categories wise trees
const loadCategoriesTree = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`active-btn-${id}`);
      clickBtn.classList.add("active");

      displayCategoriesTree(data.plants);
    });
};

const displayCategoriesTree = (categoriesTrees) => {
  const categoriesCard = document.getElementById("categories-plants-card");
  categoriesCard.innerHTML = "";

  categoriesTrees.forEach((tree) => {
    const categoriePlant = document.createElement("div");
    categoriePlant.innerHTML = `

<div class="bg-white p-4 rounded-lg shadow flex flex-col h-full">
  <!-- Image -->
  <div class="h-40 rounded mb-3 overflow-hidden">
    <img src="${tree.image}" 
         alt="${tree.plant_name}" 
         class="w-full h-full object-cover">
  </div>

  <!-- Name -->
  <h4 onclick="loadTreeDetail(${tree.id})" class="font-semibold">${
      tree.name
    }</h4>

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
    <a id= "active-btn-${categorie.id}" 
    onclick = "loadCategoriesTree('${categorie.id}')" class="block px-3 py-2 rounded hover:bg-green-100 text-green-700 font-medium bg-green-50 category-btn ">${categorie.category_name}</a>
    `;
    categoriesList.appendChild(catBtn);
  }
};

loadCategories();
loadAllTrees();
