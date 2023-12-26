const baseUrl1 = "https://cms.istad.co/api/ost-contact-uses";
let card1 = document.getElementById("tbody");
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl1,
        success: function (response) {
           template=response.data;
           console.log(template)
           template.map((res)=>{
            $('#table').append(`
                <tr class="bg-white dark:bg-gray-800" table>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${res.attributes.email}
                </th>
                <td class="px-6 py-4">
                    ${res.attributes.name}
                </td>
                 <td class="px-6 py-4">
                    ${res.attributes.phoneNumber}
                </td>
                <td class="px-6 py-4">
                    ${res.attributes.address}
                </td>
                <td class="px-6 py-4">
                    ${res.attributes.message}
                </td>
            </tr>
            `)
           })
        }
    });
});