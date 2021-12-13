import './style.scss'

export default function headertop() {
    return (
        <div className="header__top">
            <div className="header__top-left">
            <a href="#" className="top-left__contact">Chat with us</a>
            <p className="top-left__phone">+420 336 775 664</p>
            <p className="top-left__email">info@freshnesecom.com</p>
            </div>
            <div className="header__top-right">
            <a href="#" className="top-right__blog">Chat with us</a>
            <a href="#" className="top-right__aboutus">Chat with us</a>
            <a href="#" className="top-right__carrers">Chat with us</a>
            </div>
        </div>
    )
}
