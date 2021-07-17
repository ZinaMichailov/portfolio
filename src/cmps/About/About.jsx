import { SkillList } from '../SkillList'
import './About.scss'

export const About = ({ isActive }) => {
    
    return (
        <section id='about' className='about main-layout'>
            <h1>About</h1>
            <div className='bottom-line'></div>
            <p>
                Knowledgeable and experienced in composing single-page web apps,
                I'm creative thinker who's always after new challenges in front end or full stack development.
            </p>
            {!isActive && <SkillList /> }
            {isActive && <SkillList /> }
        </section>
    )
}

