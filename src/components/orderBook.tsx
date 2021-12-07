import { useApp } from "./context";
export default function OrderBook() {
  const app = useApp();
  console.log(app.snapshotBids);
  console.log(app.snapshotAsks)

  

    return (
      <div>
        <table  className='order-book'>
          <thead>
            <tr>
              <th>TOTAL</th>
              <th>SIZE</th>
              <th>PRICE</th>
              <th>PRICE</th>
              <th>SIZE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {(app.snapshotBids ? app.snapshotBids.map((a, i) => (
              <tr>
                <td>{a[1] + (i>0?app.snapshotBids[i-1][1]:0)}</td>
                <td>{a[1]}</td>
                <td>{a[0]}</td>
                <td>{app.snapshotAsks[i][0]}</td>
                <td>{app.snapshotAsks[i][1]}</td>
                <td>{app.snapshotAsks[i][1] + (i>0?app.snapshotAsks[i-1][1]:0)}</td>
              </tr>
            )): '')}
          </tbody>
        </table>
      </div>
      
    );
  }