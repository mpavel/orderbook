import { useEffect, useState } from 'react';
import { Order, Sort } from './Types';
import { updateOrders } from './Orderbook';

const WEB_SOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';

export const useOrderbook = (paused: boolean) => {
    const [bids, setBids] = useState<Order[]>([]);
    const [asks, setAsks] = useState<Order[]>([]);

    useEffect(() => {
        const ws = new WebSocket(WEB_SOCKET_URL);
        const subscribeEvent = {
            event: 'subscribe',
            feed: 'book_ui_1',
            product_ids: ['PI_XBTUSD'],
        };

        if (paused) {
            ws.close();
        } else {
            ws.onopen = () => {
                ws.send(JSON.stringify(subscribeEvent));
            }
        }

        ws.onmessage = (message) => {
            const data = JSON.parse(message.data);
            console.log('*** data', data);

            if (data.feed === 'book_ui_1_snapshot') {
                setBids(data?.bids ?? []);
                setAsks(data?.asks ?? []);
            }
            if (data.feed === 'book_ui_1') {
                setBids(updateOrders(bids, data?.bids ?? [], Sort.ASC));
                setAsks(updateOrders(asks, data?.asks ?? [], Sort.DESC));
            }
        }

        return () => {
            ws.close();
        }
    }, [paused]);

    return {
        bids,
        asks,
    };
}
