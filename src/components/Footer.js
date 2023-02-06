export default function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Главная</a></li>
                <li className="nav-item"><a href="/docs" className="nav-link px-2 text-muted">Документация</a></li>
                <li className="nav-item"><a href="/examples" className="nav-link px-2 text-muted">Примеры</a></li>
                <li className="nav-item"><a href="/login" className="nav-link px-2 text-muted">Вход</a></li>
                <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">Справка</a></li>
            </ul>
            <p className="text-center text-muted">©2023 Детский технопарк Альтаир</p>
        </footer>
    )
}
