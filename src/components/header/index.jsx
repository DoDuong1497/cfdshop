import HeaderMain from './headermain'
import HeaderNav from './headernav'
import HeaderTop from './headertop'
import './style.scss'

export default function index() {
    return (
        <>
        <div className='container'>
            <HeaderTop />
            <HeaderMain />
        </div>
            <HeaderNav />
        </>
    )
}
