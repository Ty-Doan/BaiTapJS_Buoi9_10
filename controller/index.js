// tạo sự kiện cho button thêm người dùng
document.querySelector('#btnThemNV').onclick = function() {

    // tạo biến nhanVien dựa trên prototype NhanVien 
    var nhanVien = new NhanVien();

    // lấy dữ liệu người dùng nhập
    nhanVien.taiKhoan = document.querySelector('#tknv').value;
    nhanVien.hoTen = document.querySelector('#name').value;
    nhanVien.email = document.querySelector('#email').value;
    nhanVien.matKhau = document.querySelector('#password').value;
    nhanVien.ngayLam = document.querySelector('#datepicker').value;
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.chucVu = document.querySelector('#chucvu').value;
    nhanVien.gioLamTrongThang = document.querySelector('#gioLam').value;

    // console.log(nhanVien); // test

    // tạo mangNhanVien để lưu trữ thông tin nhân viên mà người dùng nhập vào
    var mangNhanVien = [];
    // đẩy thông tin người dùng nhập vào mảng
    mangNhanVien.push(nhanVien);

    // console.log(mangNhanVien); // test 

    // gọi hàm
    renderTableNhanVien(mangNhanVien);
}