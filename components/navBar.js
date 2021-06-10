import NavButton from "./NavButton";
import utilStyles from '../styles/utils.module.css'

const NavBar = props => (
    <div className={utilStyles.navbar}>
        {props.navButtons.map(button => (
            <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
            />
        ))}
    </div>
);

export default NavBar;