// Grabbing ajax function to get json info 
$.ajax({
    type: 'POST',
    url: url,
    data: postedData,
    dataType: 'json',
    success: callback
  });