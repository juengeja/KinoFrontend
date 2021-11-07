import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Title from '../components/Title';

export default function Contact() {
    return (
        <>
            <Hero hero="programHero">
                <Banner title="Gastronomie" />
            </Hero>

            <section className="home">
                <Title title="Mit unseren Menüs zu einem kulinarischen Kinoerlebnis!" />
                Wir haben für dich unsere beliebtesten Gastronomie-Artikel in einigen Menüs zusammengestellt. So sparst du im Vergleich zum Einzelkauf bis zu 17 %.
                <br />
                <br />
                Selbstverständlich erhältst du durch unsere freundlichen Mitarbeiterinnen und Mitarbeiter in der Gastronomie automatisch die für dich günstigste Kombination! Informiere dich hier über unsere verschiedenen Menü-Angebote.

              </section>

        </>
    );
}