import './PortfolioPage.scss'

export const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <div className="portfolio-title">
                <h2>Some of my projects:</h2>
                <div className="bar"></div>
            </div>
            <div className="portfolio-container">
                <a className="portfolio-project proj-img taskman" target="_blank" rel="noreferrer" href="http://taskman-app.herokuapp.com/#/"><div >
                    <h4>Taskman</h4>
                    <p>Project Management Tool</p>
                </div>
                </a>
                <a className="portfolio-project proj-img jukify" target="_blank" rel="noreferrer" href="http://jukify-music-app.herokuapp.com/"><div>
                    <h4>Jukify</h4>
                    <p>Song Player Based On Spotify And Jukebox</p>
                </div> </a>
                <a className="portfolio-project proj-img appsus" target="_blank" rel="noreferrer" href="https://oshriyoktan.github.io/Appsus/#/"><div>
                    <h4>Appsus</h4>
                    <p>Notes And Mailbox</p>
                </div></a>
                <a className="portfolio-project proj-img mister-bit" target="_blank" rel="noreferrer" href="https://mister-toys-app.herokuapp.com/#/"><div >
                    <h4>Mister Toy</h4>
                    <p>Toys Shopping Website</p>
                </div></a>
            </div>
        </div>
    )

}
