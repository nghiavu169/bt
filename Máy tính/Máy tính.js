
function tinhtoan(sothu1,sothu2,pheptinh) {
    var result=parseFloat();
    if(pheptinh=="cong") {
        result = sothu1 + sothu2;
    }
    if(pheptinh=="tru") {
        result = sothu1 - sothu2;
    }
    if(pheptinh=="nhan") {
        result = sothu1 * sothu2;
    }
    if(pheptinh=="chia") {
        result = sothu1 / sothu2;
    }
    return result;
}
function calculate(){
    var pheptinh=document.getElementById("pheptinh").value;
    var sothu1=parseFloat(document.getElementById("sothu1").value);
    var sothu2=parseFloat(document.getElementById("sothu2").value);
    var result=tinhtoan(sothu1,sothu2,pheptinh);
    document.getElementById('messageDiv').innerHTML = result;

}

