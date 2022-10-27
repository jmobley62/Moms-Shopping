const form = document.addItem;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = form.title.value;

  form.title.value = "";

  // Create elements
  const li = document.createElement("li");
  const div = document.createElement("div");
  const edit = document.createElement("button");
  const del = document.createElement("button");

  //Create button
  edit.textContent = "edit";
  del.textContent = "X";

  // Add to list
  div.textContent = item;
  li.append(div, edit, del);
  document.getElementById("list").append(li);

  //styling
  li.classList.add("item");
  edit.classList.add("edit");

  // Button functionality
  del.addEventListener("click", () => {
    li.remove();
  });

  edit.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = div.textContent;
    div.replaceWith(input);
    edit.textContent = "save";

    edit.addEventListener("click", () => {
      div.textContent = input.value;
      input.replaceWith(div);
      edit.textContent = "edit";
    });
  });
});
