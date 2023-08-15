import "./MainTheme.css"
import text from "../../data/text.json"
function MainTheme() {
    return (
        <div className="MainThemecontainer">
            <h2>
                Evolution in Action: How the Past Shapes the Future
            </h2>
            <p>
                {text.MainTheme}
            </p>
        </div>
    )
}

export default MainTheme;