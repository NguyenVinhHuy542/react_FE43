import { getRandomInt } from '../../TIEN_ICH_Utill/Mathrandom';
import {TANG_GIAM} from '../constants/GameBauCuaConst'

const initialState = {
    tongTien: 100,
    danhSachCuoc: [
        { id: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
        { id: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
        { id: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
        { id: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0 },
        { id: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0 },
        { id: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0 }
    ],
    xucXac: [
        { id: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
        { id: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
        { id: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
    ]
}
const GameBauCuaReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case TANG_GIAM:
            let danhSachCuoc = [...state.danhSachCuoc];
            let index = danhSachCuoc.findIndex(item => item.id === actions.id);
            let tongTien = state.tongTien;
            if (index != -1) {
                if (actions.tangGiam) {
                    if (tongTien > 0) {
                        danhSachCuoc[index].giaCuoc += 10;
                        tongTien -= 10;
                    }
                } else {
                    if (danhSachCuoc[index].giaCuoc > 0) {
                        danhSachCuoc[index].giaCuoc -= 10;
                        tongTien += 10;
                    }
                }
            }
            return { ...state, danhSachCuoc, tongTien };
        case "CHOI_GAME": {
            let danhSachCuoc = [...state.danhSachCuoc];
            let {tongTien} = state;
            // Tạo xúc sắc ngẫu nhiên
            let xucXac = [
            danhSachCuoc[getRandomInt(6)],
            danhSachCuoc[getRandomInt(6)],
            danhSachCuoc[getRandomInt(6)]
            ];
            // Lấy những con cược
            danhSachCuoc = danhSachCuoc.filter((ele)=> ele.giaCuoc>0);
            
             // Xử lý trả lại tiền
             for(let ele of danhSachCuoc) {
                 let tralaiTien = xucXac.find(item => item.id === ele.id);
                 console.log(tralaiTien)
                 if(tralaiTien) {
                     tongTien += ele.giaCuoc;
                 }
             }
            //  Trúng THưởng
            for(let ele of xucXac) {
                let trungThuong = danhSachCuoc.find((item)=> item.id === ele.id);
                if(trungThuong) {
                    tongTien +=trungThuong.giaCuoc;
                }
            }
            // Reset giá cược về không
            let updateDanhSachCuoc = [...state.danhSachCuoc];
            updateDanhSachCuoc = updateDanhSachCuoc.map((ele)=> ({
                ...ele,
                giaCuoc: 0,
            }));
            return {...state, xucXac, tongTien, danhSachCuoc: updateDanhSachCuoc};
           
            
        }

        default:
            break;
    }
    return { ...state };

}

export default GameBauCuaReducer;

