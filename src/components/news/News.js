import React from 'react';
import Heading from "../layout/Heading";
import NewsList from '../layout/NewsList';

export function Home() {
    return (
        <div>
            <Heading content="News"/>
        <NewsList />
        </div>
    );
}

export default Home;