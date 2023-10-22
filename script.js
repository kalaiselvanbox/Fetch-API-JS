let cardContainer = document.querySelector(".cardContainer");

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => showData(data));
}
fetchData();

cardContainer.innerHTML = "<h2 class='col mt-3 text-danger-emphasis'>Datas loading...</h2>";

function showData(data) {
  cardContainer.innerHTML = "";

  data.map((e) => {
    cardContainer.innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card mt-2">
            <div class="shadow-sm p-3 pb-0 pt-0 bg-success-subtle rounded-top">
                <p class="mb-0 text-warning-emphasis fw-bolder">${e.id}. ${e.name}</p>
                <p class="mb-1 ps-3 fw-lighter text-danger">- ${e.email}</p>
            </div>
            <p style="text-align: justify;"
                class="px-3 py-2 bg-warning-subtle mb-0 rounded-bottom text-success-emphasis">&nbsp;<i
                    class="fa-regular fa-message fa-fade" style="color: #2a74f4;"></i>&nbsp;${e.body}.</p>
        </div>
    </div>`;
  });
}
