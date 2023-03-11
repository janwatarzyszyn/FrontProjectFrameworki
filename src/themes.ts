import { DefaultTheme } from "styled-components";

export const colorTheme: DefaultTheme = {
color: {
darkTint: "#2F3D2F",
darkest: "#284728",
dark: "#336633",
medium: "#6B8F6B",
tint: "#9ACD9A",
lightest: "#F6F6F4",
},
};

export type IColorThemeType = typeof colorTheme;