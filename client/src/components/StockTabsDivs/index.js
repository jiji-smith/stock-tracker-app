import moment from "moment"
import StockGraphs from "../StockGraphs";

function StockTabsDivs(props) {

    let today = moment().format("YYYY-MM-DD");
    console.log("TODAY IS: ", today);

    // console.log("STOCK DATA PASSED INTO TABS DIVS", props.stockData);
    // console.log("GRAB THE TIME SERIES SECTION: ", props.stockData["Time Series (Daily)"]);
    // console.log("GRAB THE CURRENT DAY: ", props.stockData["Time Series (Daily)"][today]);

    // let dataObject = props.stockData["Time Series (Daily)"];

    // console.log("LIST OF KEYS: ", Object.keys(dataObject));

    // setTimeout(function(){ console.log("GRAB THE CURRENT DAY: ", props.stockData["Time Series (Daily)"][today]); }, 6000);

    return (
        <div id={props.symbol} className="col s12">
            <h5>{props.company} &#40;{props.symbol}&#41;</h5>
            <button className="waves-effect waves-light btn" onClick={() => props.onClick(props.id)}>
                Delete Stock
            </button>
            <button className="waves-effect waves-light btn" value={props.newStatus} id={props.id} onClick={props.onUpdate}>
                Move to {props.newStatus}
            </button>
            <StockGraphs
                xValues={props.xValues}
                yValues={props.yValues}
            />
            {/* <ul>
                <li><strong>Open:</strong> {props.stockData["Time Series (Daily)"][today]["1. open"]} <br /> <strong>High:</strong> {props.stockData["Time Series (Daily)"][today]["2. high"]} <br /> <strong>Low:</strong> {props.stockData["Time Series (Daily)"][today]["3. low"]} <br /> <strong>Close:</strong> {props.stockData["Time Series (Daily)"][today]["4. close"]}</li>
            </ul> */}
        </div>
    )
}

export default StockTabsDivs;