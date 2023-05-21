import './news.css'

export const News = () => {
    return (
        <div className="news-details">
            <div>
                <h3 className="title">
                    This is cringe lol
                </h3>
                <h6 className="date-container">
                    <span className="material-symbols-sharp">
                        calendar_month
                    </span>
                    <span className="date">
                        18 Nov 2000
                    </span>
                </h6>
                <h5 className="info">
                    This is the story of musashi miyato. He is well known in Japan to be the best samurai of all time.
                    This is the story of musashi miyato. He is well known in Japan to be the best samurai of all time.
                    This is the story of musashi miyato. He is well known in Japan to be the best samurai of all time.
                </h5>
            </div>


            <div className="card-footer">
                <button type={"button"} className="read-more-button">
                    Read more
                    <span className="material-symbols-sharp next-arrow">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    );
}
