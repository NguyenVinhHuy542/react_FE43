// rexreducer (mã lệnh gọi phần dưới)

const initialState = {
    mangNguoiDung: [
        {taiKhoan:'123', matKhau: '123',email: '123', soDt:'123',hoTen: '123',maNhom:'GP01'}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'THEM_NGUOI_DUNG': {
        let mangNguoiDungUpdate =[...state.mangNguoiDung, action.nguoiDung];

        return{...state, mangNguoiDung: mangNguoiDungUpdate}
        // return{...state, mangNguoiDung:[...state.mangNguoiDung, action.mangNguoiDung]} : Cách 2 không dùng let trên
    }

    default:
        return state
    }
}
