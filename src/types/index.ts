export interface StockProps {
	companyName: string;
	stockSymbol: string;
	price: number | string;
	change: number | string;
	percentageChange: number | string;
	favorite?: boolean;
}