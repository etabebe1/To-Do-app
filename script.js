const addBtn = document.querySelector("#addBtn");
const inputSpace = document.querySelector("#input-div input");
const tasks = document.querySelector("#tasks");

addBtn.addEventListener("click", function () {
  if (inputSpace.value.length == 0) {
    alert("Please enter an activity");
  } else {
    tasks.innerHTML += `
        <div class="task">
          <div class="check-input">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p class=" activity">${inputSpace.value}</p>
          </div>

          <button class="del" onclick = 'deleteFunc(event)'>delete</button>
        </div>
`;

    inputSpace.value = "";
  }
});

function deleteFunc(event) {
  event.target.parentNode.remove();
}

const checkbox = document.querySelectorAll("#checkbox");
const paragraph = document.querySelectorAll(".activity");

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].onclick = function () {
    paragraph[i].classList.toggle("stroke-active");
  };
}
