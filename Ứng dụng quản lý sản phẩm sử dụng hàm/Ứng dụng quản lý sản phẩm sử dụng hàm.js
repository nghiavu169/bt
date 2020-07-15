let productArr = []
function DisplayProduct() {
    let data = "<table>"

    for (let i = 0; i < productArr.length ; i++) {
        let EditButton = "<input class='Button' type='button' value='Edit' onclick='EditProduct("+i+")'>";
        let DeleteButton = "<input class='Button' type='button' value='Delete' onclick='DeleteProduct("+i+")'>";
        data = data + "<tr><td class='productDisplay'>"+productArr[i]+"</td><td>"+EditButton+"</td><td>"+DeleteButton+"</td></tr>"
    }
    document.getElementById("DisplayTable").innerHTML = data + "</table>"
    countProduct();
}

function AddProduct() {
    let newProduct = document.getElementById("inputNew").value;
    if (newProduct !== "" && !CheckLap()){
        productArr.push(newProduct);
        DisplayProduct();
        document.getElementById("inputNew").value ="";
    }
}
function CheckLap() {
    let newProduct = document.getElementById("inputNew").value;
    if (newProduct !== ""){
        for (let i = 0; i < productArr.length ; i++) {
            if (productArr[i] === newProduct){
                alert("Sản phẩm đã tồn tại");
                return true;
            }
        }
    }
    return false;
}
function EditProduct(num) {
    let newName = prompt("Nhập tên mới cho sản phẩm");
    if (newName !== "" && newName !== null){
        for (let i = 0; i < productArr.length ; i++) {
            if (productArr[i] === newName){
                alert("Tên sản phẩm này đã tồn tại, chọn tên khác");
                return;
            }
        }
    } else return;
    productArr[num] = newName;
    DisplayProduct();
}
function DeleteProduct(num) {
    productArr.splice(num,1);
    DisplayProduct();
}
function countProduct() {
    let num = productArr.length;
    document.getElementById("countProduct").innerHTML = "Product Name: "+num+" sản phẩm."
}