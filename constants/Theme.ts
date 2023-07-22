import { extendTheme, useColorModeValue } from 'native-base'
import type { Theme } from '@react-navigation/native/src/types';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  background: 'transparent'
};

const colors = {
	primary: {
	  50: "#fff5f7",
	  100: "#ffe6ea",
	  200: "#ffccd6",
	  300: "#ffa4b4",
	  400: "#fe4365",
	  500: "#e9012c",
	  600: "#a7011f",
	  700: "#7a0117",
	  800: "#47000d",
	  900: "#240007",
	  950: "#140004"
	},
	secondary: {
	  50: "#fff5f5",
	  100: "#fee7e6",
	  200: "#fdcfce",
	  300: "#fca9a6",
	  400: "#fc9d9a",
	  500: "#e40e07",
	  600: "#a30a05",
	  700: "#770804",
	  800: "#450402",
	  900: "#230201",
	  950: "#140101"
	},
	tertiary: {
	  50: "#fef9f6",
	  100: "#fdf0e7",
	  200: "#fbe2d0",
	  300: "#f9cbaa",
	  400: "#f29654",
	  500: "#da6410",
	  600: "#9d480c",
	  700: "#723409",
	  800: "#421f05",
	  900: "#210f02",
	  950: "#130901"
	},
	warmGray: {
	  50: "#fbfbf9",
	  100: "#f5f5ef",
	  200: "#ebebe0",
	  300: "#dbdbc7",
	  400: "#b7b78f",
	  500: "#8f8f5b",
	  600: "#676742",
	  700: "#4b4b30",
	  800: "#2c2c1c",
	  900: "#16160e",
	},
	green: {
	  50: "#f9fbfa",
	  100: "#eff5f3",
	  200: "#e0ebe6",
	  300: "#c7dbd2",
	  400: "#8fb7a5",
	  500: "#5b8f78",
	  600: "#426756",
	  700: "#304b3f",
	  800: "#1c2c24",
	  900: "#0e1612",
	}
}

export const DarkTheme: Theme = {
	dark: true,
	colors: {
	  primary: colors.primary[500],
	  background: 'rgb(0, 0, 0)',
	  card: 'rgb(0, 0, 0)',
	  text: colors.tertiary[50],
	  border: 'rgb(39, 39, 41)',
	  notification: 'rgb(58, 193, 255)',
	},
};

export const DefaultTheme: Theme = {
	dark: false,
	colors: {
	  primary: 'rgb(0, 122, 255)',
	  background: 'white',
	  card: 'rgb(255, 255, 255)',
	  text: 'rgb(28, 28, 30)',
	  border: 'rgb(216, 216, 216)',
	  notification: 'rgb(255, 59, 48)',
	},
  };

export const theme = extendTheme({ config, colors });