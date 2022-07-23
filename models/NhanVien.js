// định  nghĩa đối tượng Nhân viên
function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCoBan = 0;
    this.chucVu = '';
    this.gioLamTrongThang = 0;
    this.tongLuong = 0;

    this.tinhTongLuong = function() {
        var tongLuong = 0;
        if (this.chucVu === 'Sếp') {
            tongLuong = this.luongCoBan * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            tongLuong = this.luongCoBan * 2;
        } else if (this.chucVu === 'Nhân viên') {
            tongLuong = this.luongCoBan;
        } else {
            tongLuong = 0;
        }
        return tongLuong;
    }
    this.xepLoaiNhanVien = function() {
        if (this.gioLamTrongThang >= 192) {
            this.loaiNhanVien = 'xuất sắc';
        } else if ((this.gioLamTrongThang < 192) && (this.gioLamTrongThang >= 176)) {
            this.loaiNhanVien = 'giỏi';
        } else if ((this.gioLamTrongThang < 176) && (this.gioLamTrongThang >= 160)) {
            this.loaiNhanVien = 'khá';
        } else {
            this.loaiNhanVien = 'trung bình';
        }
        return this.loaiNhanVien;
    }
    this.loaiNhanVien = '';
}