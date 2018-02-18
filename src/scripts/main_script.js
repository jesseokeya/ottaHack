// Grabbing ajax function to get json info

const getCard = (data) => {
  return `<div class="col-sm-8 col-md-6 col-lg-4 ">
  <div class="card shadow">
    <img class="card-img-top" src=${data.image} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>`
}

$(document).ready(() => {
  const data = null;

  $.get("/uniqlo?sex=men&category=outerwear&type=jacketsandblazers", (data, status) => {
    data = data;
    $('.card-deck').empty();
    for (let i in data) {
      $('.card-deck').append(getCard(data[i]));
    }
  });
})
