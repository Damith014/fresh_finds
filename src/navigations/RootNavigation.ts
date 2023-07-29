import { Item } from "../constants/interfaces";
export type RootNavigation = {
    Splash: undefined;
    Auth: undefined;
    Mobile: undefined;
    OTP: undefined;
    Register: undefined;
    Drawer: undefined;
    Home: undefined;
    Details: {item?: Item, isMange: boolean, callBack: any};
    Profile: undefined;
    Ads: undefined;
    Favorite: undefined;
    Notification: undefined;
    Post: undefined;
    Search: undefined;
    EditPost: {item?: Item};
};