// viết hàm lấy thông tin nhân viên rồi in ra bảng
/**
 * hàm này nhận vào 1 mảng sau đó xuất ra chuỗi html chứa thông tin của mảng đó nđược lồng trong các thẻ <tr> > <td>
 * @param {*} mangNhanVien mảng chứa thông tin nhân viên [{thông tin NV1},{thông tin NV2},{...},...]
 * @return trả về dạng html = <tr>...</td>  <tr>...</td>  <tr>...</td> 
 */
function renderTableNhanVien(mangNhanVien) {
    var html = '';

    // duyệt mảng và lồng thông tin vào
    for (var index = 0; index < mangNhanVien.length; index++) {
        // tạo biến để giữ thông tin nhân viên thứ INDEX, mỗi lần duyệt lấy ra thông tin 1 nhân viên
        var nv = mangNhanVien[index];

        // tạo ra chuỗi html
        html += `           
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tinhTongLuong()}</td>
                <td>${nv.xepLoaiNhanVien()}</td>
                <td><button class="btn btn-primary" onclick="hienThiSuaNhanVien('${nv.taiKhoan}', mangNhanVien)" data-toggle="modal" data-target="#myModal">Sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}', mangNhanVien)">Xoá</button></td>
            </tr>
        `
    }

    // DOM den the tbody của bảng
    document.querySelector('#tableDanhSach').innerHTML = html;
    return html;
}

/**
 * hàm để kiểm tra ô input có để trống hay không
 * @param {*} value  giá trị của ô input   
 * @param {*} selectorError id hoặc class của nơi muốn in ra lỗi 
 * @param {*} name tên của thuôc tính bị lỗi
 * @returns trả về true nếu ô có giá trị, false nếu ô rỗng
 */
function kiemTraRong(value, selectorError, name) {
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML = name + ' không để trống <br> ';
        return false;
    }
}

/**
 * Ham kiem tra rỗng nhưng dành cho Ô Chức vụ, người dùng phai chọn chức vụ khác mặc định
 * @param {*} value giá trị chức vụ mà người dùng chọn
 * @param {*} selectorError nơi in ra lỗi
 * @param {*} name 
 * @returns 
 */
function kiemTraRongChucVu(value, selectorError, name) {
    if (value === 'Chọn chức vụ') {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML = 'Hãy chọn ' + name;
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

}


/**
 * Hàm kiểm tra ký số của tài khoản Nhân viên, phải từ 4-6 chữ số
 * @param {*} value 
 * @param {*} selectorError 
 * @param {*} name 
 * @returns 
 */
function kiemTraKySo(value, selectorError, name) {
    var regex = /^[0-9]{4,6}$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML += name + ' có 4-6 ký số';
        return false;
    }
}


/**
 * Hàm kiểm tra có phải ký tự hay không
 * @param {*} value giá trị của ô input ký tự   
 * @param {*} selectorError nơi in ra lỗi
 * @param {*} name tên nơi lỗi
 * @returns trả về true nếur tất cả là ký tự chữ, còn ko thì false
 */
function kiemTraChu(value, selectorError, name) {
    var regex = /^[A-Z a-z]+$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML += name + ' phải là chữ ';
        return false;
    }
}

/**
 * hàm kiểm tra Email
 * @param {*} value giá trị email mà ngươi dùng nhập vào
 * @param {*} selectorError Nơi in ra lỗi
 * @return trả về true nếu email đúng định dạng aaa@email.com
 */
function kiemTraEmail(value, selectorError) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML += 'Email phải đúng định dạng';
        return false;
    }
}

function kiemTraMatKhau(value, selectorError) {
    var regex = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML += 'Mật khẩu 6-10 kí tự: có số, có chữ, có ký tự đặc biệt';
        return false;
    }
}
/**
 * hàm kiểm tra giá trị có nằm trong 1 khoảng cho phép nào đó hay không
 * @param {*} value giá trị truyền vào: number
 * @param {*} selectorError nơi in ra lỗi
 * @param {*} name đối tượng bị lỗi
 * @param {*} minRange 
 * @param {*} maxRange 
 * @returns 
 */
function kiemTraRange(value, selectorError, name, minRange, maxRange) {
    if ((value >= minRange) && (value <= maxRange)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML += name + ' phải từ ' + minRange + ' đến ' + maxRange;
        return false;
    }
}

/**
 * 
 * @param {*} taiKhoanNhanVienClick 
 */
function xoaNhanVien(taiKhoanNhanVienClick, mangNhanVien) {
    // cờ hiệu để tìm vị trí tài khoản nhân viên cẦN xoá
    var indexDel = -1;

    // duyệt các nhân viên trong mảng, tìm đến nhân viên có tài khoản trùng với người dùng chọn
    for (var index = 0; index < mangNhanVien.length; index++) {
        var nv = mangNhanVien[index];
        if (nv.taiKhoan === taiKhoanNhanVienClick) {
            indexDel = index;
        }
    }

    //Xoá tại vị trí index tìm được
    mangNhanVien.splice(indexDel, 1);

    // In lại bảng mới đã xoá nhân viên
    renderTableNhanVien(mangNhanVien);
}

/**
 * 
 * @param {*} taiKhoanNhanVienClick 
 * @param {*} mangNhanVien 
 */
function hienthiSuaNhanVien(taiKhoanNhanVienClick, mangNhanVien) {
    // tìm ra vị trí nhân viên được click
    var indexEdit = mangNhanVien.findIndex(nv => nv.taiKhoan === taiKhoanNhanVienClick);
    // lấy thông tin nhân viên cần chỉnh sửa và in lên Modal
    var nvEdit = mangNhanVien[indexEdit];

    document.querySelector('#tknv').disabled = true;

    document.querySelector('#name').value = nvEdit.hoTen;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.matKhau;
    document.querySelector('#datepicker').value = nvEdit.ngayLam;
    document.querySelector('#luongCB').value = nvEdit.luongCoBan;
    document.querySelector('#chucvu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLamTrongThang;

}