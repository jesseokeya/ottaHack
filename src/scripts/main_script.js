// // Grabbing ajax function to get json info
// $.get("/outfit", (data, status) => {
//   $('col_1').text(data)
//   console.log(data.outfit_1);
// });



// TODO:
// HAVE TO ADD TO LOWER CASE



function format_url(){
  initial_url = "http://localhost:3000/"
  var store = document.getElementById('store').value.toLowerCase()
  var sex = document.getElementById('sex').value.toLowerCase()
  var choice = document.getElementById("choice").value
  var type_of_clothing = document.getElementById('type_of_clothing').value.toLowerCase()
  var final_url = initial_url + store + '?' + 'sex=' + sex + '&' + 'category=' + choice + '&' + 'type=' + type_of_clothing
  console.log(final_url)
  return final_url
}



const getCard = (data) => {
  return `<div class="col-sm-8 col-md-6 col-lg-4 ">
  <div class="card shadow">
    <img class="card-img-top" src=${data.image} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.price}</p>
      <!-- 
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      -->
    </div>
  </div>
</div>`
}

// $(document).ready(() => {
//   const data = null;
//   $.get("/uniqlo?sex=men&category=outerwear&type=jacketsandblazers", (data, status) => {
//     data = data;
//     for (let i in data) {
//       $('.card-deck').append(getCard(data[i]));
//     }
//   });
// })


// Test this function and properly redo it


function output_outfit(){
  url = format_url()
  $.get(url, (data, status) =>{
    $('.card-deck').empty();
    for (let i in data) {
      $('.card-deck').append(getCard(data[i]));
    }
  })
  $.get(url, (data,status) =>{


  })
}

function good_func(){
  if (document.getElementById('special')){
    $('option_1').val('asdasdasd')
  }
  
}