import emailjs from 'emailjs-com'
import './Contact.scss'

export const Contact = (props) => {

    const onContact = async (ev) => {
        ev.preventDefault();
        try {
            await emailjs.sendForm('service_4zxgr91', 'template_petkm2g', ev.target, 'user_HcnpAmaHMQBCF87FUGvaE');
            ev.target.from_name.value = '';
            ev.target.from_email.value = '';
            ev.target.message.value = '';
        } catch (err) {
            console.log(err.text);
        }
    };

    return (
        <section id='contact' className='contact'>
            <svg preserveAspectRatio='none' viewBox='0 0 100 102' height='75' width='100%' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 0 L50 100 L100 0 Z' fill='#f5f5f5' stroke='#f5f5f5'></path>
            </svg>
            <h1>Contact</h1>
            <div className='bottom-line'></div>
            <p>Feel free to reach out</p>
            <form className='flex-column main-layout' onSubmit={onContact}>
                <input type="hidden" name="contact_number" />
                <input type='text' placeholder='Enter Name' name='from_name' required />
                <input type='email' placeholder='Enter Email' name='from_email' required />
                <textarea placeholder='Your Message' name='message' rows='6' required></textarea>
                <button className='btn light-btn'>Submit</button>
            </form>
        </section>
    )
}

