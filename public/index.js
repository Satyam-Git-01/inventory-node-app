function clearList() {
    const itemList = document.getElementById("item_list");
    itemList.textContent = "";
  }
  function fetchData() {
    const itemList = document.getElementById("item_list");
    axios
      .get("https://crudcrud.com/api/43137b4d837d4e4b8ebdc89b6046578f/inventory")
      .then((response) => {
        clearList();
        const arr = response.data;
        for (let x of arr) {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.innerHTML = `${x.itemName} ${x.itemDesc} ${x.price} ${x.quantity} <button class="btn btn-primary" onclick="edit('${x._id}','1')">Buy 1</buttton>   <button class="btn btn-primary"onclick="edit('${x._id}','2')">Buy 2</buttton>    <button class="btn btn-primary"onclick="edit('${x._id}','3')">Buy 3</buttton>`;
          itemList.appendChild(li);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function edit(id, quantity) {
    axios
      .get(
        `https://crudcrud.com/api/43137b4d837d4e4b8ebdc89b6046578f/inventory/${id}`
      )
      .then((r) => {
        console.log(r.data);
        let obj = {
          itemName: r.data.itemName,
          itemDesc: r.data.itemDesc,
          price: r.data.price,
          quantity: r.data.quantity - quantity,
        };
        console.log(obj);
        axios
          .put(
            `https://crudcrud.com/api/43137b4d837d4e4b8ebdc89b6046578f/inventory/${id}`,
            obj
          )
          .then((response) => {
            clearList();
            fetchData();
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }
  fetchData();
  function addItem(event) {
    event.preventDefault();
    const itemName = event.target.item_name.value;
    const itemDesc = event.target.item_description.value;
    const price = event.target.item_price.value;
    const quantity = event.target.item_quantity.value;
    const obj = {
      itemName,
      itemDesc,
      price,
      quantity,
    };
    postData(obj);
    clearList();
    fetchData();
  }
  function postData(Obj) {
    axios
      .post(
        "https://crudcrud.com/api/43137b4d837d4e4b8ebdc89b6046578f/inventory",
        Obj
      )
      .then((response) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  