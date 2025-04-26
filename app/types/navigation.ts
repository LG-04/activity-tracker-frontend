import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Main: NavigatorScreenParams<MainStackParamList>;
};

export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
};

export type MainStackParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
}; 