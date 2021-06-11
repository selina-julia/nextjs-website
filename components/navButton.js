import Link from "next/link";
import utilStyles from '../styles/utils.module.css'


const NavButton = props => (
    <Link href={props.path}>
        <div className="NavButton">
            <span className={utilStyles.nav_label}>{props.label}</span>
        </div>
    </Link>
);

export default NavButton;