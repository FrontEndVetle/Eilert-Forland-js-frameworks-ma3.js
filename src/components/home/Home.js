import React from 'react';
import Heading from "../layout/Heading";
import HomeContent from "../layout/HomeContent";

export function Home() {
    return (
        <div>
        <Heading content="Home" />
        <HomeContent children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, volutpat a massa at, lacinia pharetra nisi. Quisque vestibulum dolor non quam lacinia elementum. Morbi vitae magna eu metus ornare varius. Praesent id dolor vitae " />
        </div>
    );
}

export default Home;