import "./Portfoliopage.scss";
import Portfolio from "../../components/portfolio/Portfolio";

export default function Portfoliopage() {
    return (
        <div className="portfoliopage" id="portfolio">
            <h1>Portfolio</h1>
            <Portfolio/>
        </div>
    )
}