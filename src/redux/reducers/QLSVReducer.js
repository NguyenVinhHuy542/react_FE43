// rexreducer (mã lệnh gọi phần dưới)

const initialState = {
    mangNguoiDung: [

    ],
    nguoiDungEdit: {
        taiKhoan: '', matKhau: '', email: '', soDt: '', hoTen: '', maNhom: '',

    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'THEM_NGUOI_DUNG': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];

            return { ...state, mangNguoiDung: mangNguoiDungUpdate }
            // return{...state, mangNguoiDung:[...state.mangNguoiDung, action.mangNguoiDung]} : Cách 2 không dùng let trên
        }
        case 'CHINH_SUA': {
            // Lấy người dùng được click gán vào nguoiDungEdit
            state.nguoiDungEdit = action.nguoiDung;
            return { ...state }
        }
        case 'CAP_NHAT': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            // Mooxilaafn click cập nhật sẽ đưa giá trị người dùng nhập vào qua asction.nguoiDung
            let index = mangNguoiDungUpdate.findIndex(nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
            // Nếu tim thấy vị trí người dùng trong mảng
            if (index !== -1) {
                // Gán giá trị người dungg trong mảng =  ngưởi dùng gửi lên
                mangNguoiDungUpdate[index] = action.nguoiDung;

            }
            // Gán lại người dùng hiện tại =  mảng người dùng đã cập nhật
            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state };
        }
        case 'XOA': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];
            mangNguoiDungUpdate.splice(action.index, 1);
            return { ...state,mangNguoiDung: mangNguoiDungUpdate };
        }

        default:
            return state
    }
}
