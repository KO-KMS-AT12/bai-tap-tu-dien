var en = ["hello", "apple", "today", "love"];
var vni = ["xin chào", "quả táo", "hôm nay", "thích"];

function dich() {
    var txtValue = document.getElementById("txt_value").value;
    var txtResult = document.getElementById("txt_result");
    for (let i = 0; i < en.length; i++) {
        if (txtValue == en[i]) {
            txtResult.innerHTML = "Nghia la : "+vni[i];
            break;
        }else {
            txtResult.innerHTML = "Khong tim thay";
        }
    }
}