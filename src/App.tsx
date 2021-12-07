import OrderBook from "./components/orderBook";
import TogggleFeed from "./components/togglefeed";
import KillFeed from "./components/killFeed";
import SelectBox from "./components/selectBox";

export default function App() {
  return (
    <div className='app'>
      <h3 className ='title'>Order Book </h3>
      <SelectBox />
      <OrderBook />
      <div className='a'>
        <TogggleFeed />
        <KillFeed />
        </div>

    </div>
  );
}
