import React from 'react';
import Counter from './counter.mjs';

export default function App() {
    console.log("rendering the server app");
    return <div>
        <h1>Hello SSR World!</h1>
        <Counter id="1" />
        <Counter id="2" />
        </div>;
}
