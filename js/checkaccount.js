function kiemtra(email,name) {
	var addressValue = document.getElementById("address").value;
    var emailValue = document.getElementById("email").value;
    var fullnameValue = document.getElementById("fullname").value;

    if (emailValue === "") {
        alert("Chưa nhập Email. Vui lòng nhập lại !");
        return false;
    }
    if (fullnameValue === "") {
        alert("Chưa nhập họ và tên !");
        return false;
    }
    if (fullnameValue.length < 6) {
        alert("Họ và tên quá ngắn! Không hợp lệ.");
        return false;
    }
	if (addressValue === "") {
        alert("Chưa nhập địa chỉ !");
        return false;
    }
	alert("Form được gửi thành công, nhân viên sẽ liên hệ bạn.");
    event.preventDefault();
    return true; }