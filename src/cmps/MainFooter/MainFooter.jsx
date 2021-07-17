import email from '../../assets/img/email.png'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import './MainFooter.scss'

export const MainFooter = (props) => {

    return (
        <footer>
            <div className='main-layout flex-between'>
                <div>Zina Michailov © 2021</div>
                <div className='flex'>
                    <a className='flex-center' href='mailto:zinam84@gmail.com' target='_blank' rel='noreferrer'><img src={email} alt='email' /></a>
                    <a className='flex-center' href='https://github.com/ZinaMichailov' target='_blank' rel='noreferrer'><img src={github} alt='github' /></a>
                    <a className='flex-center' href='https://www.linkedin.com/in/zina-michailov/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' /></a>
                </div>
            </div>
        </footer>
    )
}

