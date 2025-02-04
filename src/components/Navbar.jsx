// NavigationBar.jsx

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom'; // Import Link z react-router-dom
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './NavigationBar.css';

const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const NavigationBar = ({ sections }) => (
    <Navbar className="custom-navbar" expand="lg">
        <Container>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
                    <Navbar.Brand as={RouterLink} to="/">Szkolny Bezpiecznik</Navbar.Brand> {/* Użyj Link z react-router-dom */}
                    {sections.map(section => (
                        <motion.div
                            key={section}
                            variants={navLinkVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="nav-item"
                        >
                            <Nav.Link
                                as={Link}
                                to={section}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={400}
                                className="nav-link"
                                whileHover={{ backgroundColor: 'var(--primary-color)' }} // Zmiana koloru tła przy najechaniu
                            >
                                {section === '/' ? 'Strona główna' :
                                    section === 'about' ? 'O projekcie' :
                                        section === 'team' ? 'Zespół' :
                                            section === 'schedule' ? 'Harmonogram' :
                                                    ''}
                            </Nav.Link>
                        </motion.div>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavigationBar;
