// // Grabbing ajax function to get json info
// $.get("/outfit", (data, status) => {
//   $('col_1').text(data)
//   console.log(data.outfit_1);
// });



// TODO:
// HAVE TO ADD TO LOWER CASE



function format_url(){
  initial_url = "http://localhost:3000/"
  var sex = document.getElementById('store').value
  var store = document.getElementById('store').value
  var budget = document.getElementById('budget').value
  var choices = document.getElementById("choice").value
  var type_of_clothing = document.getElementById('type_of_clothing').value
  var final_url = initial_url + store + '?' + 'sex=' + sex + '&' + 'category=' + choices + '&' + 'type=' + type_of_clothing
  console.log(budget, store)
  console.log(final_url)
  return final_url
}




