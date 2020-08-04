import {TANG_GIAM} from "../constants/GameBauCuaConstants";
export function tangGiamAction(id, tangGiam) {
    return {
        type: TANG_GIAM,
        id,
        tangGiam
    };
}