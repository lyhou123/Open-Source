const baseUrl = "https://cms.istad.co";
  $(function(){
    console.log(window.location.href)
    let url=window.location.href.split('?')
    let id=url[1].substr(3,url[1].length-3) //cut and get only id
    view(id)
  })
  const loadingElement1 = document.getElementById('loading');
function showLoading() {
  loadingElement1.style.display = 'flex';
}

function hideLoading() {
  loadingElement1.style.display = 'none';
}
  function view(id)
  {
     showLoading();
      $.ajax({
        url:`https://cms.istad.co/api/ost-templates/${id}?populate=%2A`,
        method:"GET",
        success:function(res)
        {
          hideLoading();
          const template=res.data.attributes
          const imageUrl = baseUrl +template.thumbnail.data.attributes.formats.thumbnail.url;
          $('#showing').append(`
               <div class="max-w-xl group rounded-lg">
      <div class="relative overflow-hidden flex justify-start items" id="show">
        <img class="max-w-xl w-[1000px]  rounded-lg" src="${imageUrl}" alt="">
        <div class="absolute h-full w-full backdrop-blur-sm bg-white/20 cursor-pointer flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
          <a href="${template.livePreviewUrl}" class="bg-blue-700 rounded-lg text-white py-2 px-5" target="_blank">Preview</a>
        </div>
      </div>
  </div>
  <div class="border-solid border-[1px] md:mt-[10px] border-blue-600 rounded-lg xl:mr-[124px] lg:mr-[100px] max-sm:mt-[50px] flex mx-auto sm:mt-10 ">
    <div class="lg:p-[50px] md:p-[20px] sm:p-[50px] max-sm:p-[50px]">
    <p class="text-center text-blue-600 text-[30px] mt-[-20px] mb-[40px] font-bold">ឥតគិតថ្លៃ</p>
    <p class="text-[15px] leading-9"><span><i class="fa-solid fa-check"></i></span>Quality checked by ZEIKKI Team</p>
    <p class="text-[16px] leading-9"><span><i class="fa-solid fa-check"></i></span>6 months technical support</p>
    <p class="text-[16px] leading-9"><span><i class="fa-solid fa-check"></i></span>Life time free updates</p>
    <div class="text-center">
        <br>
        <a href="${template.gitUrl}" target="_blank" class="bg-blue-700 text-white text-[12px] font-bold px-[14px] py-[10px] rounded-[10px] hover:bg-black hover:text-white">ទាញយកគំរូ</a>
    </div>
    <br>
    <div>
        <p class="text-center text-[16px]">Updated: 1 month ago</p>
    </div>
  </div>
</div>
          `)
      }})
  }
