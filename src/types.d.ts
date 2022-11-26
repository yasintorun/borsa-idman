import { DrawerScreenProps } from "@react-navigation/drawer";
import { PRESENTATION_ROUTES } from "./utils/constants";

declare module '*.png' {
    const src: string
    export default src
}

declare type ScreenParamList = {
    [key in PRESENTATION_ROUTES]:  undefined;
    [key in ROUTES]: undefined;
};

declare type ScreenProps<T extends ROUTES> = NativeStackScreenProps<ScreenParamList, T>
// export type KodDrawerScreenProps<T extends ROUTES> = DrawerScreenProps<DrawerNavParamList, T>

