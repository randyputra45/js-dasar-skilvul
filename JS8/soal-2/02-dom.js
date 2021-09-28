function writeComment() {
  document.getElementById("comment-form-section").classList.toggle("d-none");
  document.getElementById("input-username").value = '';
  document.getElementById("input-comment").value = '';
}

function submitComment() {
  event.preventDefault();
  let username = document.getElementById("input-username").value;
  let comment = document.getElementById("input-comment").value;

  console.log(username);
  console.log(comment);

  const newList = document.createElement("li");
  newList.className = "list-group-item d-flex justify-content-between align-items-start";
  const parent = document.getElementById("comment-list");
  parent.prepend(newList);

  const newDiv = document.createElement("div");
  newDiv.className = "ms-2 me-auto";
  const newContent = document.createTextNode(comment);
  newDiv.appendChild(newContent);
  const parent2 = document.querySelector(".list-group-item");
  parent2.appendChild(newDiv);

  const newDiv2 = document.createElement("div");
  newDiv2.className = "fw-bold text-capitalize";
  const newContent2 = document.createTextNode(username);
  newDiv2.appendChild(newContent2);
  const parent3 = document.querySelector(".ms-2");
  parent3.prepend(newDiv2);

  writeComment();
}

document
  .getElementById("btn-submit")
  .addEventListener("click", () => submitComment(event));
document
  .getElementById("btn-comment")
  .addEventListener("click", () => writeComment());