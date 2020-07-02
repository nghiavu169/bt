
function calculate(pheptinh){
    var sothu1=parseFloat(document.getElementById("sothu1").value);
    var sothu2=parseFloat(document.getElementById("sothu2").value);
    var result=0;
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
    document.getElementById('messageDiv').innerHTML = result;
    }

