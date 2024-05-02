function clearList() {
  const itemList = document.getElementById("item_list");
  itemList.textContent = "";
}
function fetchData() {
  const itemList = document.getElementById("item_list");
  axios
    .get("http://localhost:4500/products")
    .then((response) => {
      clearList();
      const arr = response.data;
      for (let x of arr) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `${x.itemname} ${x.description} ${x.price} ${x.quantity} <button class="btn btn-primary" onclick="edit('${x.id}','1')">Buy 1</buttton>   <button class="btn btn-primary"onclick="edit('${x.id}','2')">Buy 2</buttton>    <button class="btn btn-primary"onclick="edit('${x.id}','3')">Buy 3</buttton>`;
        itemList.appendChild(li);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function edit(id, number) {
  axios
    .put(`http://localhost:4500/products/edit/${id}/${number}`)
    .then((resp) => {
      console.log(resp);
      fetchData()
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchData();
function addItem(event) {
  event.preventDefault();
  const itemname = event.target.item_name.value;
  const description = event.target.item_description.value;
  const price = event.target.item_price.value;
  const quantity = event.target.item_quantity.value;
  const obj = {
    itemname,
    description,
    price,
    quantity,
  };
  postData(obj);
}
function postData(Obj) {
  axios
    .post("http://localhost:4500/products/add-product", Obj)
    .then((response) => {
      fetchData();
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
