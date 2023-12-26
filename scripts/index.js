const baseUrl1 = "https://cms.istad.co";
let productAPI1 = "https://cms.istad.co/api/ost-templates?pagination%5BpageSize%5D=12&populate=%2A";
let card1 = document.querySelector("#template");
const loadingElement = document.getElementById('loading');
function showLoading() {
  loadingElement.style.display = 'flex';
}

function hideLoading() {
  loadingElement.style.display = 'none';
}
let templates1 = [];
console.log(templates1)
function renderTemplates1(templatesToRender) {
  templatesToRender.forEach((template) => {
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
function getAllProduct1() {
  showLoading();
  fetch(productAPI1)
    .then((resp) => resp.json())
    .then((response) => {
      if (Array.isArray(response.data)) {
        hideLoading();
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
