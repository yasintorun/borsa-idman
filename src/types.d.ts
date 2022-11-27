import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PRESENTATION_ROUTES, ROUTES } from "./utils/constants";

declare module '*.png' {
    const src: string
    export default src
}

declare type ScreenParamList = {
    [key in ROUTES | PRESENTATION_ROUTES]: undefined;
};

declare type ScreenProps<T extends ROUTES | PRESENTATION_ROUTES> = NativeStackScreenProps<ScreenParamList, T>
// export type KodDrawerScreenProps<T extends ROUTES> = DrawerScreenProps<DrawerNavParamList, T>

