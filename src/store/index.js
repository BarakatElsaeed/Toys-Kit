import { atom } from "recoil";

export const $Current_Width = atom({
  key:"$Current-Width",
  default:window.innerWidth,
});
export const $Current_Height = atom({
  key:"$Current-Height",
  default:window.innerHeight,
});

export const $Side_Menu_Index = atom({
  key:"$Side_Menu_Index",
  default:false,
});

export const CartArr = atom({
  key: 'CartArr', 
  default:[], 
});


export const wishListState = atom({
  key: 'wishListState',
  default: [],
});
export const authData = atom({
  key: 'auth',
  default: {
    isauth:false,
    userId:null

  },
});

export const Drop_Menue = atom({
  key:" Drop_Menue",
  default:false,
});