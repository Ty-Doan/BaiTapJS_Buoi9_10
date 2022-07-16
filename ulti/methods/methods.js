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
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td><button class="btn btn-primary">Sửa</button></td>
                <td><button class="btn btn-danger">Xoá</button></td>
            </tr>
        `

    }

    // DOM den the tbody của bảng
    document.querySelector('#tableDanhSach').innerHTML += html;

    return html;
}