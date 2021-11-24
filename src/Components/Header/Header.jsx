import useTheme from "../../Hook/useTheme";
import useLang from '../../Hook/useLang'
import content from '../../Localization/Content'

function Header () {

    let {theme, setTheme} = useTheme()
    let [lang, setLang] = useLang()

    return(<>
        <header className={`header ${theme}`}>
            {/* <h1>{content[lang].header}</h1> */}
        
        <select onChange={(e)=>{
            setTheme(e.target.value)
        }} defaultValue={theme}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
        
        <select onChange={(e)=>{
            setLang(e.target.value)
        }} defaultValue={lang}>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
        </select>
        </header>
        </>)
    }
    
export default Header;