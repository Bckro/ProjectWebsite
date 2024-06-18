import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="about-section"
    >
        <Container className="mb-5" id="about">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="about-content">
                        <h2 className="about-title">O projekcie</h2>
                        <p class="about-description">Nasza aplikacja do anonimowego zgłaszania problemów w szkołach wyróżnia się jako narzędzie wspierające tworzenie bezpiecznych i inspirujących środowisk edukacyjnych dla uczniów, nauczycieli i rodziców. Pragniemy udostępnić platformę opartą na pełnej anonimowości zgłoszeń, aby umożliwić płynne i bezpieczne raportowanie różnorodnych problemów, takich jak:
                            <ul>
                                <li>Przemoc fizyczna i słowna</li>
                                <li>Cyberprzemoc</li>
                                <li>Problemy zdrowotne i emocjonalne</li>
                                <li>Niewłaściwe zachowania</li>
                            </ul>
                            Nasza aplikacja oferuje kompleksową gamę funkcji zalet, które wspierają naszą misję:
                            <ul>
                                <li><strong>Anonimowość i poufność</strong>: Zapewniamy pełną poufność i anonimowość zgłoszeń, co pozwala użytkownikom na swobodne i bezpieczne dzielenie się swoimi obawami, eliminując obawy o potencjalne reperkusje.</li>
                                <li><strong>Intuicyjny interfejs i szybkość działania</strong>: Nasz interfejs użytkownika został starannie zaprojektowany, aby być intuicyjnym i łatwym w obsłudze, co umożliwia szybkie i wygodne zgłaszanie problemów bez zbędnych opóźnień.</li>
                                <li><strong>Natychmiastowa reakcja i skuteczność</strong>: Każde zgłoszenie jest traktowane priorytetowo i natychmiast przekazywane odpowiednim osobom, co umożliwia szybką reakcję i skuteczne rozwiązanie problemów, zgodnie z naszym zaangażowaniem w zapewnienie bezpiecznego środowiska szkolnego.</li>
                                <li><strong>Wsparcie dla różnorodnych potrzeb</strong>: Nasza aplikacja nie tylko umożliwia zgłaszanie problemów, ale także wspiera różnorodne potrzeby uczniów, nauczycieli i rodziców, abyśmy mogli wspólnie tworzyć szkoły, w których każdy czuje się szanowany, chroniony i zainspirowany do osiągania swojego pełnego potencjału.</li>
                            </ul>
                            Dzięki naszej aplikacji chcemy stworzyć szkoły, które stanowią oazę wspierającego i twórczego rozwoju, przyczyniając się do budowania społeczeństwa, w którym każdy głos jest usłyszany i każda obawa jest rozwiązana z szacunkiem i troską.</p>
                    </div>
                </Col>
            </Row>
            <Row className="image-row mt-4">
                <Col md={12}>
                    <h2 className="gallery-title">Galeria</h2>
                </Col>
            </Row>
            <Row className="image-row mt-2">
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/YtdqFLk/testphoto1.jpg" fluid className="about-image" />
                    <p className="image-caption">Opis obrazka 1</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/Mc9Zjkm/testphoto2.jpg" fluid className="about-image" />
                    <p className="image-caption">Opis obrazka 2</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/CzyNLk9/testphoto3.jpg" fluid className="about-image" />
                    <p className="image-caption">Opis obrazka 3</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/9V1RJdq/testphoto4.jpg" fluid className="about-image" />
                    <p className="image-caption">Opis obrazka 4</p>
                </Col>
            </Row>
        </Container>
    </motion.div>
);

export default About;
