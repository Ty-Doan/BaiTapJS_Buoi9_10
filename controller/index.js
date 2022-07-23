 // biến toàn cục
 // tạo mangNhanVien để lưu trữ thông tin nhân viên mà người dùng nhập vào
 var mangNhanVien = [];

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

     // ========== VALIDATION ==========

     // cờ hiệu dừng form 
     var valid = true;

     // Kiểm tra rỗng
     valid &= kiemTraRong(nhanVien.taiKhoan, '#tbTKNV', 'Tài khoản') &
         kiemTraRong(nhanVien.hoTen, '#tbTen', 'Tên nhân viên') &
         kiemTraRong(nhanVien.email, '#tbEmail', 'Email') &
         kiemTraRong(nhanVien.matKhau, '#tbMatKhau', 'Mật khẩu') &
         kiemTraRong(nhanVien.luongCoBan, '#tbLuongCB', 'Lương Cơ Bản') &
         kiemTraRong(nhanVien.gioLamTrongThang, '#tbGiolam', 'Giờ Làm');

     valid &= kiemTraRongChucVu(nhanVien.chucVu, '#tbChucVu', 'chức vụ');

     // Kiểm tra Ký số  - tài khoản NV
     valid &= kiemTraKySo(nhanVien.taiKhoan, '#tbTKNV', 'Tài khoản');

     // Kiểm tra chữ - họ tên Nhân Viên
     valid &= kiemTraChu(nhanVien.hoTen, '#tbTen', 'Tên nhân viên');

     //kiểm tra Email
     valid &= kiemTraEmail(nhanVien.email, '#tbEmail');

     // kiểm tra Mật khẩu
     valid &= kiemTraMatKhau(nhanVien.matKhau, '#tbMatKhau');

     // kiểm tra Luong và Giờ làm 
     valid &= kiemTraRange(nhanVien.luongCoBan, '#tbLuongCB', 'Lương', 1000000, 20000000) & kiemTraRange(nhanVien.gioLamTrongThang, '#tbGiolam', 'Giờ làm', 80, 200);

     // dừng form lại khi sai bất kỳ điều kiện
     if (valid != true) { return; }



     // đẩy thông tin người dùng nhập vào mảng
     mangNhanVien.push(nhanVien);

     // console.log(mangNhanVien); // test 

     // gọi hàm
     renderTableNhanVien(mangNhanVien);
 }

 // Xoá nhân viên


 // tìm nhân viên theo loại
 document.querySelector('#btnTimNV').onclick = function() {
     var loaiNhanVienCanTim = document.querySelector('#searchName').value;

     var mangNhanVienTheoLoai = [];

     for (var index = 0; index < mangNhanVien.length; index++) {
         var nv = mangNhanVien[index];
         if (nv.loaiNhanVien === loaiNhanVienCanTim) {
             mangNhanVienTheoLoai.push(nv);
         }
     }
     renderTableNhanVien(mangNhanVienTheoLoai);
 }


 // Sửa thông tin nhân viên
 // Lấy thông tin hiện lên MoDal

 // sửa thông tin và render lại bảng