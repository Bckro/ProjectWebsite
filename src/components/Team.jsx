import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="team-section"
        >
            <Container className="members" id="team">
                <h2 className="team-title">Zespół</h2>
                {/* Pierwszy wiersz - Opiekun projektu */}
               
                {/* Drugi wiersz - Czterech członków */}
                <div className="team-row">
                    <Card className="team-member-card">
                        <Card.Body>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="team-member"
                            >                                
                                <h5>Paweł <br /> Banach</h5>
                                <p></p>
                            </motion.div>
                        </Card.Body>
                    </Card>
                    <Card className="team-member-card">
                        <Card.Body>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="team-member"
                            >
                                
                                <h5>Marcin <br /> Boinski</h5>
                                <p></p>
                            </motion.div>
                        </Card.Body>
                    </Card>
                    <Card className="team-member-card">
                        <Card.Body>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="team-member"
                            >
                               
                                <h5>Emilia <br /> Depka</h5>
                                <p></p>
                            </motion.div>
                        </Card.Body>
                    </Card>
                    <Card className="team-member-card">
                        <Card.Body>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="team-member"
                            >
                               
                                <h5>Kamil <br /> Macioszek</h5>
                                <p></p>
                            </motion.div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="team-row">
                    <Card className="team-member-card team-leader-card">
                        <Card.Body>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                                className="team-member"
                            >
                               
                                <h5>Kamil<br /> Kupcewicz</h5>
                                <p>Opiekun Projektu</p>
                            </motion.div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </motion.div>
    );
}

export default Team;
