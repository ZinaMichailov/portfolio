import { useEffect, useRef, useState } from 'react';
import { MainHeader } from '../../cmps/MainHeader'
import { About } from '../../cmps/About'
import { ProjectList } from '../../cmps/ProjectList'
import { Contact } from '../../cmps/Contact'
import Typist from 'react-typist';
import CV from '../../assets/media/Zina Michailov CV .docx'
import './HomePage.scss'

export const HomePage = (props) => {
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();
    const [isFixed, setIsFixed] = useState(false);
    const [isActiveClass, setIsActiveClass] = useState({ home: true, about: false, projects: false, contact: false })

    useEffect(() => {
        const handleScroll = () => {
            const { offsetTop } = aboutRef.current;
            if (window.pageYOffset >= (offsetTop - 130) && !isFixed) {
                setIsFixed(true);
            } else if (window.pageYOffset < (offsetTop - 130) && isFixed) {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);

    useEffect(() => {
        const handleScroll = () => {
            const aboutLength = homeRef.current.offsetHeight + aboutRef.current.offsetHeight;
            const projectsLength = homeRef.current.offsetHeight + aboutRef.current.offsetHeight + projectsRef.current.offsetHeight;
            const contactLength = homeRef.current.offsetHeight + aboutRef.current.offsetHeight + projectsRef.current.offsetHeight + contactRef.current.offsetHeight;

            if (window.pageYOffset >= 0 && window.pageYOffset < homeRef.current.offsetHeight) {
                setIsActiveClass({ home: true, about: false, projects: false, contact: false })
            } else if (window.pageYOffset + 150 >= aboutRef.current.offsetTop && window.pageYOffset < aboutLength) {
                setIsActiveClass({ home: false, about: true, projects: false, contact: false })
            } else if (window.pageYOffset + 60 >= projectsRef.current.offsetTop && window.pageYOffset < projectsLength) {
                setIsActiveClass({ home: false, about: false, projects: true, contact: false })
            } else if (window.pageYOffset + 60 >= contactRef.current.offsetTop && window.pageYOffset < contactLength) {
                setIsActiveClass({ home: false, about: false, projects: false, contact: true })
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActiveClass])

    return (
        <section className='homepage'>
            <div id='home' ref={homeRef} className='homepage-header'>
                <MainHeader isFixed={isFixed} isActiveClass={isActiveClass} />
                <div className='header-content main-layout'>
                    <span>I Am Zina Michailov,</span>
                    <Typist className='typing' startDelay={1500} avgTypingDelay={90}>
                        <span>A Programer</span>
                        <Typist.Backspace count={11} delay={1500} />
                        <span>A Developer</span>
                    </Typist>
                    <p>Junior Frontend / Full Stack Web Developer</p>
                    <a href={CV} download><button className='btn main-btn'>Download My Resume</button></a>
                </div>
            </div>
            <div ref={aboutRef}>
                <About isActive={isActiveClass.about} />
            </div>
            <div ref={projectsRef}>
                <ProjectList />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </section>
    )
}

