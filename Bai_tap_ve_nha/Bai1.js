function tinhTong() {
    let a = Number(document.getElementById("NBA_input").value);
    let b = Number(document.getElementById("NBB_input").value);

    let tong = a + b;

    hienThi(tong);
}

function tinhHieu() {
    let a = Number(document.getElementById("NBA_input").value);
    let b = Number(document.getElementById("NBB_input").value);

    let hieu = a - b;

    hienThi(hieu);
}

function tinhTich() {
    let a = Number(document.getElementById("NBA_input").value);
    let b = Number(document.getElementById("NBB_input").value);

    let Tich = a * b;

    hienThi(Tich);
}


function tinhThuong() {
    let a = Number(document.getElementById("NBA_input").value);
    let b = Number(document.getElementById("NBB_input").value);

    let Thuong = a / b;

    hienThi(Thuong);
}

function hienThi(Kq) {
    document.getElementById("Kq").value = Kq;
}