function fn_ValForm() {
    var sMsg = "";
    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    if (nama === "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email === "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid";
    }
    if (pesan === "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg !== "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }
    return true;
}
