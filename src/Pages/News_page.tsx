import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../components/spinner.component";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { NewsDetails, getNewsFailedAction, getNewsRequestAction, getNewsSuccessAction } from "../store/slices/newsSlice";
import NewsCard from "../components/news-card.component";
import { envUrl } from "../assets/environment.dev";

function NewsPage() {
    const lang = useSelector((state: RootState) => state.newsLang.newsLang);
    const news = useSelector((state: RootState) => state.getNews.news);
    const isLoading = useSelector((state: RootState) => state.getNews.isLoading)

    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(getNewsRequestAction(null));
        axios.get(`${envUrl.headline}?category=${pathname.slice(1)}&lang=${lang}`)
            .then(response => {
                dispatch(getNewsSuccessAction(response.data))
            })
            .catch(error => {
                dispatch(getNewsFailedAction([]))
                console.error(error);
            });
    }, [dispatch, pathname, lang]);

    const newsArr = news.map((res: NewsDetails) => <NewsCard key={res.publishedAt} title={res.title} content={res.content} description={res.description} image={res.image} url={res.url} publishedAt={res.publishedAt} source={res.source} />)

    return (
        <div className="newsGrid">
            {!isLoading ? (newsArr && newsArr.length > 0 ? newsArr : <center style={{ color: "red", fontWeight: 'bold', backgroundColor: '#EBF1F4' }}>CURRENTLY NO NEWS TO SHOW. PLEASE TRY AFTER SOMETIME....</center>) : <Spinner />}
        </div>
    )
}

export default NewsPage