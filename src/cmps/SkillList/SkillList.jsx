import { projectService } from '../../services/projectService'
import { motion } from 'framer-motion'
import './SkillList.scss'

export const SkillList = () => {
    const skillsImg = projectService.getSkillsImgUrl()

    const container = {
        hidden: { opacity: 1, scale: 0,  when: "repeat: Infinity" },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.ul
            className="skill-list clean-list main-layout grid container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {skillsImg && skillsImg.map((skill, idx) => (
                <motion.li className='item' key={idx} variants={item}>
                    <img src={skill.imgUrl} alt={skill.skillName} title={skill.skillName} />
                </motion.li>
            ))}
        </motion.ul>
    )
}

