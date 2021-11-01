import { useEffect, useState } from 'react';

const WEB_SOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';

export const useOrderbook = () => {
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);

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
            setBids(data?.bids ?? []);
            setAsks(data?.asks ?? []);
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
