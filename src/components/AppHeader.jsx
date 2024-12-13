import style from "./AppHeader.module.css"

function AppHeader() {

    return (
        <header className={style.header}>
            <div className="container">
                <h1 className="text-center">Il mio blog</h1>
            </div>
        </header>
    )
}

export default AppHeader