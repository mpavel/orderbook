import { useEffect, useState } from 'react';
import { updateOrders } from './Orderbook';
import { Order, Sort } from './Types';

const WEB_SOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';

export const useOrderbook = () => {
    const [bids, setBids] = useState<Order[]>([]);
    const [asks, setAsks] = useState<Order[]>([]);

    useEffect(() => {
        const ws = new WebSocket(WEB_SOCKET_URL);
        const subscribeEvent = {
            event: 'subscribe',
            feed: 'book_ui_1',
            product_ids: ['PI_XBTUSD'],
        };
        ws.onopen = () => {
            ws.send(JSON.stringify(subscribeEvent));
        }

        ws.onmessage = (message) => {
            const data = JSON.parse(message.data);
            setBids(updateOrders(bids, data?.bids ?? [], Sort.ASC));
            setAsks(updateOrders(asks, data?.asks ?? [], Sort.DESC));
        }

        return () => {
            ws.close();
        }
    }, []);

    return {
        bids,
        asks,
    };
}
