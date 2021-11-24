import useTheme from '../../Hook/useTheme';
import useLang from '../../Hook/useLang';
import content from '../../Localization/Content';

function Footer () {

    let {theme} = useTheme()
    let [lang] = useLang()

    return(<>
        <footer className={`footer ${theme}`}>
            {/* <h1>{content[lang].footer}</h1> */}
        </footer>
    </>)
}

export default Footer;