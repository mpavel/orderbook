import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { delayedResponse } from './DemoService';

interface Props {}

export const Demo: React.FC<Props> = ({}) => {
    console.log('*** Demo Render');

    const [data, setData] = useState('');
    const numbers = useRef<number[]>([]);

    useEffect(() => {
        let number = 1;

        const timer = setInterval(() => {
            console.log('*** Number', number);
            numbers.current.push(number);
            number += 1;
        }, 100);

        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        console.log('*** Parsing data');

        const parseData = async (numbers: MutableRefObject<number[]>) => {
            const result = await delayedResponse(numbers.current);
            console.log('*** Setting Data', result);
            numbers.current = [];
            setData(result);
        }

        parseData(numbers);
    }, [data]);

    return (
        <div>
            <p>
                This is a demo to experiment with delayed responses via promises.

                <ul>
                    <li>I want to make sure parsing of the data is fully done</li>
                    <li>While parsing is happening, the new data is stored for the next run</li>
                    <li>When parsing completes, the result is stored in state and a re-render
                        triggered
                    </li>
                    <li>useRef is used to keep track of the incoming data.</li>
                </ul>
            </p>
            <p>Sum: {data}</p>
        </div>
    );
}
