// Grabbing ajax function to get json info
$.get("/outfit", (data, status) => {
  $('col_1').text(data)
  console.log(data.outfit_1);
});


