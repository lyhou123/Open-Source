const baseUrl = "https://cms.istad.co";
const loadingElement = document.getElementById('loading');
function showLoading() {
  loadingElement.style.display = 'flex';
}

function hideLoading() {
  loadingElement.style.display = 'none';
}
let url=[]
function view() {
  $.ajax({
    url: `${baseUrl}/api/ost-categories/20/?populate=%2A`,
    method: "GET",
    success: function (res) {
const images = res.data.attributes.thumbnail.data;
const imageUrls = images.map((template) => {
  return baseUrl + template.attributes.formats.thumbnail.url;
});
showLoading();
const template = res.data.attributes.templates.data;
template.forEach((template, index) => {
  hideLoading();
  const templateName = template.attributes.name;
  const templateDescription = template.attributes.description;
  const livePreviewUrl = template.attributes.livePreviewUrl;
  const imageUrl = imageUrls[index];
  $('#templates').append(`
    <div class="group w-[366px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
      <div class="bg-blue-700 px-[14px] py-[10px] absolute end-0 buttom-0 mt-[200px] me-2 z-50  rounded-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a href="${livePreviewUrl}" class="text-white text-[16px]" target="_blank">Preview</a>
      </div>
      <a onclick="gotodetail(${template.id})">
        <img
          src="${imageUrl}" 
          alt="Admin Dashboard" class="h-[247px] w-[366px] object-cover rounded-t-xl" />
        <div class="p-5" id="eng">
          <a href="#">
            <div class="flex justify-between ">
              <p class="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white inline-block">
                ${templateName}</p>
              <a href="#" class="text-[18px] text-blue-700 ml-[39px]"> Free</a>
            </div>
          </a>
          <p class="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">${templateDescription}</p>
        </div>
      </a>
    </div>
  `);
})}
})
};
$(document).ready(function () {
  view();
});
function gotodetail(id)
{
  window.location.href =`../html/view_template.html?id=${id}`
}
