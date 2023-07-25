import { extendTheme, useColorModeValue } from 'native-base'
import type { Theme } from '@react-navigation/native/src/types';

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
	background: 'transparent'
};

const colors = {
	primary: { //laser-lemon - 300
		50: '#feffe5',
		100: '#faffc7',
		200: '#f3ff95',
		300: '#e9ff70',
		400: '#d3f625',
		500: '#b5dd05',
		600: '#8db100',
		700: '#698605',
		800: '#54690b',
		900: '#46590e',
		950: '#243201',
	},
	secondary: { //kournikova - 200
		50: '#fff9eb',
		100: '#ffefc6',
		200: '#ffd670',
		300: '#ffc54a',
		400: '#ffae20',
		500: '#f98a07',
		600: '#dd6402',
		700: '#b74406',
		800: '#94330c',
		900: '#7a2b0d',
		950: '#461402',
	},
	tertiary: { //atomic-tangerine - 300
		50: '#fff3ed',
		100: '#ffe3d4',
		200: '#ffc3a9',
		300: '#ff9770',
		400: '#fe6339',
		500: '#fc3a13',
		600: '#ed2109',
		700: '#c51309',
		800: '#9c1210',
		900: '#7e1210',
		950: '#440607',
	},
	pink: { //hot-pink - 400
		50: '#fef1f6',
		100: '#fee5ef',
		200: '#ffcbe1',
		300: '#ffa1c7',
		400: '#ff70a6',
		500: '#fa3a7d',
		600: '#ea1856',
		700: '#cc0a3f',
		800: '#a80c34',
		900: '#8c0f2f',
		950: '#560117',		
	},
	cyan:{ // malibu - 300
		50: '#f0faff',
		100: '#dff3ff',
		200: '#b8e9ff',
		300: '#70d6ff',
		400: '#33c6fd',
		500: '#09afee',
		600: '#008ccc',
		700: '#0070a5',
		800: '#045f88',
		900: '#0a4f70',
		950: '#06314b',		
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
	custom: {
		darkBG: "rgba(5,5,5,1)",
		liteBG: "rgb(240,240, 240)"
	}
}

export const arrayOfColors = [
	"primary.50", "secondary.50", "tertiary.50", "pink.50", "cyan.50", 
	"primary.100", "secondary.100", "tertiary.100", "pink.100", "cyan.100",
	"primary.200", "secondary.200", "tertiary.200", "pink.200", "cyan.200"
];

export const arrayOfDarkColors = [
	"primary.900", "secondary.900", "tertiary.900", "pink.900", "cyan.900",
	"primary.950", "secondary.950", "tertiary.950", "pink.950", "cyan.950",
	"primary.950", "secondary.950", "tertiary.950", "pink.950", "cyan.950",
];	


export const DarkTheme: Theme = {
	dark: true,
	colors: {
		primary: 	  	colors.primary[500],
		background: 	colors.custom["darkBG"],
		card: 	  		colors.custom["darkBG"],
		text: 	  		colors.tertiary[50],
		border: 	  	colors.custom["darkBG"],
		notification: 	colors.primary[500],
	},
};

export const DefaultTheme: Theme = {
	dark: false,
	colors: {
		primary: 		colors.primary[700],
		background: 	colors.custom["liteBG"],
		card: 			colors.custom["liteBG"],
		text: 			colors.custom["darkBG"],
		border: 		colors.custom["liteBG"],
		notification: 	colors.primary[700],
	},
  };

export const theme = extendTheme({ config, colors });