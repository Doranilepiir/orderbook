import React, { useContext, useState, useEffect, ReactNode } from "react";

const Context = React.createContext({snapshotAsks: [], snapshotBids: []});

interface ContextProps {
  children?: ReactNode;
}

export function useApp() {
  return useContext(Context);
}

export const Provider = ({ children }: ContextProps) => {
  const [snapshotBids, setSnapshotBids] = useState([]);
  const [snapshotAsks, setSnapshotAsks] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('wss://www.cryptofacilities.com/ws/v1');
    socket.addEventListener('open', function (event) {
      socket.send('{"event":"subscribe","feed":"book_ui_1","product_ids":["PI_XBTUSD"]}');
    });

    socket.addEventListener('message', function (event) {
      const data = JSON.parse(event.data);
      const asks = data.asks;
      const bids = data.bids;
      const feed = data.feed;

      if (feed === 'book_ui_1_snapshot') {
        setSnapshotAsks(asks);
        setSnapshotBids(bids);
      }
    });
  })



  return (
    <Context.Provider
      value={{ snapshotAsks, snapshotBids }}
    >
      {children}
    </Context.Provider>
  );
};