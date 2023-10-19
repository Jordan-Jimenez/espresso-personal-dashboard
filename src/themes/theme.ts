import { PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface PaletteOptions {
		alternate?: PaletteColorOptions;
		tertiary?: PaletteColorOptions;
	}
}

export const lightTheme = createTheme({
	palette: {
		mode: "light", // setting light mode
		background: {
			default: "#fff",
		},
		primary: {
			main: "#A66E45",
		},
		secondary: {
			main: "#7B493C",
		},
		tertiary: {
			main: "#B78F76",
		},
		alternate: {
			main: "#FFB94F",
		},
		text: {
			primary: "#333",
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark", // setting dark mode
		background: {
			default: "#1D1D1D",
		},
		primary: {
			main: "#734D30",
		},
		secondary: {
			main: "#5A3226",
		},
		tertiary: {
			main: "#8E6C5A",
		},
		alternate: {
			main: "#D77A30",
		},
		text: {
			primary: "#DADADA",
		},
	},
});
