import FavoriteButton from "../FavoriteButton";


export const stockCols = [
	{
		field: "companyName",
	},
	{ field: "stockSymbol" },
	{ field: "price", filter: "agNumberColumnFilter" },
	{
		field: "change",
		filter: "agNumberColumnFilter",
		cellClassRules: {
			"positive-change": (params: { value: number; }) => params.value > 0, // تغییرات مثبت
			"negative-change": (params: { value: number; }) => params.value < 0, // تغییرات منفی
		},
		valueFormatter: (params: { value: number; }) =>
			`${params.value >= 0 ? "+" : ""}${params.value.toFixed(2)}`, // فرمت تغییرات
	},
	{
		field: "percentageChange",
		filter: "agNumberColumnFilter",
		cellClassRules: {
			"positive-change": (params: { value: number; }) => params.value > 0, // تغییرات مثبت
			"negative-change": (params: { value: number; }) => params.value < 0, // تغییرات منفی
		},
		valueFormatter: (params: { value: number; }) =>
			`${params.value >= 0 ? "+" : ""}${params.value.toFixed(1)}%`, // فرمت تغییرات
	},
	{ field: "favorite", cellRenderer: FavoriteButton },
]