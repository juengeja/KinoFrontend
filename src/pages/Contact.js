import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import ContactIcons from '../components/ContactIcons';
import Title from '../components/Title';

export default function Contact() {
    return (
        <>
            <Hero hero="programHero">
                <Banner title="Kontakt" />
            </Hero>

            <section className="contact">
                Bitte beachte, dass wir keine Reservierungen per E-Mail oder Kontaktformular entgegen nehmen können. Nutze dazu bitte unser Onlineticketing.
                <br />
                <br />
                Die Kinokasse erreichst du täglich ab ca. 15 min. vor der ersten Vorstellung unter der oben angegebenen Rufnummer. Bitte habe Verständnis dafür, dass es unseren Mitarbeitern nicht immer möglich ist (beispielsweise zu Vorstellungsbeginn), deinen Anruf entgegenzunehmen.
                <br />
                <br />
                Die telefonische Programmansage erreichst du unter der Rufnummer 0229-73263-401.
                <br />
                <br />
                Unsere Öffnungszeiten orientieren sich am Programm. Die Kasse ist i. d. R. 30 min. vor dem ersten Filmbeginn besetzt.
            </section>

            <ContactIcons />

            <section className="contact">
                <Title title="Anfahrt" />
                Bitte beachte, dass zu normalen Vorlesungszeiten die Parkplätze am und um das Kino knapp werden können. Wir empfehlen eine zeitige Anreise bzw. die Benutzung der öffentlichen Verkehrsmittel.
                <br />
                <br />
                Mit den öffentlichen Verkahrsmitteln erreichst du uns per Bus oder Straßenbahn. Hier kannst du dir den Linienplan der RVN herunterladen. Die INDIGO BW befindet sich an der Haltestelle "Duale Hochschule" - unschwer zu finden in der Nähe der DHBW.
            </section>

            

            <section className="slide-show">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304432.0324541556!2d6.856442213048547!3d50.31583929932359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c8be397add6f%3A0xe9445ca638828a81!2sKino%201%20%2B%202!5e0!3m2!1sde!2sde!4v1633861463929!5m2!1sde!2sde"
                    title="trailer"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0" />
            </section>

        </>
    );
}