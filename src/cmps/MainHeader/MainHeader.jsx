import './MainHeader.scss'

export const MainHeader = ({ isFixed, isActiveClass }) => {
    const style = isFixed ? 'main-header fixed-header' : 'main-header';
    
    return (
        <header className={style}>
            <nav className='flex-center clean-list main-layout'>
                <li><a className={isActiveClass.home ? 'is-active' : ''}  href='#home'>HOME</a></li>
                <li><a className={isActiveClass.about ? 'is-active' : ''} href='#about'>ABOUT</a></li>
                <li><a className={isActiveClass.projects ? 'is-active' : ''} href='#projects'>PROJECTS</a></li>
                <li><a className={isActiveClass.contact ? 'is-active' : ''} href='#contact'>CONTACT</a></li>
            </nav>
        </header>
    )
}

