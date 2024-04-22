import BrowserStartUpIcon from "../Icons/BrowserStartUpIcon";
import DashboardIcon from "../Icons/DashboardIcon";
import ExchangeCurrencyIcon from "../Icons/ExchangeCurrencyIcon";
import PortfolioIcon from "../Icons/PortfolioIcon";
import TopStartUpIcon from "../Icons/TopStartUpIcon";

export const sidebarConst = [
    {
        name: "Dashboard",
        icon: DashboardIcon ,
        path:"/"
        
    },
    {
        name: "Top Startups",
        icon: TopStartUpIcon ,
        path:"/top-startup"
    },
    {
        name: "Browse Startups",
        icon: BrowserStartUpIcon ,
        path:"/browse-startup"
    },
    {
        name: "Portfolio",
        icon: PortfolioIcon ,
        path:"/portfolio"
    },
    {
        name: "Exchange",
        icon: ExchangeCurrencyIcon ,
        path:"/exchange"
    },
];
