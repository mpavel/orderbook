import React from 'react';
import './App.scss';
import { OrderbookContainer } from '../orderbook/OrderbookContainer';

function App() {
    /*
    const ws = new WebSocket('wss://www.cryptofacilities.com/ws/v1');
    ws.onopen = (event) => {
        const subscribeEvent = {
            'event': 'subscribe',
            'feed': 'book_ui_1',
            'product_ids': ['PI_XBTUSD'],
        };
        ws.send(JSON.stringify(subscribeEvent));
    }

    ws.onmessage = (message) => {
        console.log('Message received', message.data);
    }
     */

    return (
        <div className='App'>
            <OrderbookContainer />
        </div>
    );
}

export default App;
