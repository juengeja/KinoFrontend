import React, {useEffect} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ProgramContainer from '../components/ProgramContainer';

const Program = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Hero hero="programHero">
            <Banner title="Programm" />
        </Hero>
        <ProgramContainer />
    </>
    );
};

export default Program