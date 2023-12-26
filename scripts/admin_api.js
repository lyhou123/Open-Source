const baseUrl = "https://cms.istad.co";
let productAPI = "https://cms.istad.co/api/ost-templates?pagination%5Blimit%5D=31&populate=%2A";
let card = document.querySelector("#template");
let info=document.getElementById('404')
const searchbar = document.getElementById('search-navbar');
console.log(searchbar);
let templates = [];
console.log(templates)
searchbar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredTemplates = templates.filter((template) => {
    return (
      template.attributes.name.toLowerCase().includes(searchString) ||
      template.attributes.description.toLowerCase().includes(searchString)
    );
  });
  renderTemplates(filteredTemplates);
});
function renderTemplates(templatesToRender) {
  // Clear the card content
  card.innerHTML = "";
  if (templatesToRender.length === 0 && searchbar.value.trim() !== "") {
    // If no templates match the search criteria, display a message
    info.innerHTML = `
    <div class="rounded-lg bg-white p-8 text-center  mt-[-50px]">
      <h1 class="mb-4 text-4xl font-bold">404</h1>
      <p class="text-gray-600">Could not find any themes with your selection</p>
      <a href="/" class="mt-4 inline-block rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
  </div>`;
    return;
  }
  // Hide the info message when there are templates to render
  info.innerHTML = "";
  // Render templates
  templatesToRender.forEach((template) => {
    console.log(template)
   const imageUrl =baseUrl+template.attributes.thumbnail.data.attributes.formats.thumbnail.url;
    const templateId = template.id;
    card.innerHTML += `
                        <div class="group w-[366px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                      <div
                        class="bg-blue-700 px-[14px] py-[10px] absolute end-0 buttom-0 mt-[200px] me-2 z-50  rounded-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a href="${template.attributes.livePreviewUrl}" class="text-white  text-[16px]" target="_blank">Preview</a>
                      </div>
                      <a onclick="gotodetail(${templateId})">
                        <img
                          src="${imageUrl}"
                          alt="Product" class="h-[247px] w-[366px] object-cover rounded-t-xl" />
                        <div class="p-5" id="eng">
                          <a href="#">
                            <div class="flex justify-between ">
                              <p class="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                                ${template.attributes.name}</p>
                                 <a href="#" class="text-[18px] text-blue-700 ml-[39px]"> Free</a>
                            </a>
                          </div>
                          </a>
                          <p class="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">${template.attributes.description}</p>
                        </div>
                    </div>
                    </a>
                    </div>
    `;
  });
}
function getAllProduct() {
  fetch(productAPI)
    .then((resp) => resp.json())
    .then((response) => {
      if (Array.isArray(response.data)) {
        // Store all templates
        templates = response.data.map((item) => item);
        // Render all templates initially
        renderTemplates(templates);
      } else {
        console.error("The response is not an array", response.data);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
getAllProduct();

function gotodetail(id) {
  window.location.href = `../html/view_template.html?id=${id}`;
}

//beacus the search nar we have two type big screen and dropdown menu
// when respone sive navbar search section
const baseUrl1 = "https://cms.istad.co";
let productAPI1 = "https://cms.istad.co/api/ost-templates?populate=%2A";
let card1 = document.querySelector("#template");
const searchbar1 = document.getElementById('search-navbar1');
const loadingElement = document.getElementById('loading');
console.log(searchbar1);
let templates1 = [];
console.log(templates1)
searchbar1.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredTemplates = templates1.filter((template) => {
    return (
      template.attributes.name.toLowerCase().includes(searchString) ||
      template.attributes.description.toLowerCase().includes(searchString)
    );
  });
  renderTemplates1(filteredTemplates);
});
function renderTemplates1(templatesToRender) {
  // Clear the card content
  card1.innerHTML = "";
  if (templatesToRender.length === 0 && searchbar1.value.trim() !== "") {
    // If no templates match the search criteria, display a message
    info.innerHTML = `  <div class="rounded-lg bg-white p-8 text-center mt-[-50px]">
    <h1 class="mb-4 text-4xl font-bold">404</h1>
    <p class="text-gray-600">Could not find any themes with your selection</p>
    <a href="/" class="mt-4 inline-block rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
</div>`;
    return;
  }
  // Hide the info message when there are templates to render
  info.innerHTML = "";
  // Render templates
  templatesToRender.forEach((template) => {
    console.log(template)
   const imageUrl =baseUrl1+template.attributes.thumbnail.data.attributes.formats.thumbnail.url;
    const templateId = template.id;
    card1.innerHTML += `
                        <div class="group w-[366px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                      <div
                        class="bg-blue-700 px-[14px] py-[10px] absolute end-0 buttom-0 mt-[200px] me-2 z-50  rounded-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a href="${template.attributes.livePreviewUrl}" class="text-white  text-[16px]" target="_blank">Preview</a>
                      </div>
                      <a onclick="gotodetail(${templateId})">
                        <img
                          src="${imageUrl}"
                          alt="Product" class="h-[247px] w-[366px] object-cover rounded-t-xl" />
                        <div class="p-5" id="eng">
                          <a href="#">
                            <div class="flex justify-between ">
                              <p class="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                                ${template.attributes.name}</p>
                                 <a href="#" class="text-[18px] text-blue-700 ml-[39px]"> Free</a>
                            </a>
                          </div>
                          </a>
                          <p class="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">${template.attributes.description}</p>
                        </div>
                    </div>
                    </a>
                    </div>
                   
    `;
  });
}
function showLoading() {
  loadingElement.style.display = 'flex';
}

function hideLoading() {
  loadingElement.style.display = 'none';
}
function getAllProduct1() {
  showLoading();
  fetch(productAPI1)
    .then((resp) => resp.json())
    .then((response) => {
      hideLoading(); 
      if (Array.isArray(response.data)) {
        // Store all templates
        templates1 = response.data.map((item) => item);
        // Render all templates initially
        renderTemplates1(templates1);
      } else {
        console.error("The response is not an array", response.data);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
getAllProduct1();

function gotodetail(id) {
  window.location.href = `../html/view_template.html?id=${id}`;
}