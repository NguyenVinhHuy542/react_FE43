import {TANG_GIAM} from '../constants/GameBauCuaConst'

export function tangGiamAction(id,tangGiam) {
    return {
        type: TANG_GIAM,
        id : id,
        tangGiam: tangGiam,
    };
}