import OutsideClickHandler from 'react-outside-click-handler'
import github from '../../assets/img/github.svg'
import website from '../../assets/img/website.png'
import { ImageSwiper } from '../ImageSwiper/ImageSwiper'
import { motion, AnimatePresence } from 'framer-motion'
import './ProjectDetails.scss'

export const ProjectDetails = ({ selectedProject, showModal, handleClose }) => {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const modal = {
        visible: {
            opacity: 1,
            transition: { delay: 0.3 }
        },
        hidden: {
            opacity: 0 
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className='backdrop' 
                    variants={backdrop} 
                    initial='hidden' 
                    animate='visible'
                    exit='hidden'
                >
                    <OutsideClickHandler
                        onOutsideClick={handleClose}
                    >
                        <motion.div 
                            className='modal' 
                            variants={modal} 
                            initial='hidden' 
                            animate='visible'
                            // type='crossfade'
                        >
                            <button className='close-btn flex-center' onClick={handleClose}>X</button>
                            <div className='img-container'>
                                <ImageSwiper imgUrls={selectedProject.imgUrl} />
                            </div>
                            <div className='modal-content'>
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.subtitle}</p>
                                <p>{selectedProject.desc}</p>
                                <div>
                                    {selectedProject.github.map((link, idx) => (
                                        <a
                                            href={link}
                                            target='_blank'
                                            rel='noreferrer'
                                            onClick={(ev) => ev.stopPropagation()}
                                            key={idx}
                                        >
                                            <img className='link' src={github} alt='github' />
                                        </a>
                                    ))}
                                    <a
                                        href={selectedProject.url}
                                        target='_blank'
                                        rel='noreferrer'
                                        onClick={(ev) => ev.stopPropagation()}
                                    >
                                        <img className='link' src={website} alt='website' />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </OutsideClickHandler>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

