import axios from "axios";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"
import { getSearchNewsFailedAction, getSearchNewsRequestAction, getSearchNewsSuccessAction } from "../store/slices/searchNewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { NewsDetails } from "../store/slices/newsSlice";
import NewsCard from "../components/news-card.component";
import Spinner from "../components/spinner.component";
import { envUrl } from "../assets/environment.dev";
import exportAsImage, { delay } from "../components/news-download.component";

function SearchPage() {
    const [searchText, setSearchText] = useState('');
    const searchItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const lang = useSelector((state: RootState) => state.newsLang.newsLang);
    const news = useSelector((state: RootState) => state.searchNews.newsSearch);
    const isLoading = useSelector((state: RootState) => state.searchNews.isLoading);
    const newsArr = news.map((res: NewsDetails) => <NewsCard key={res.publishedAt} title={res.title} content={res.content} description={res.description} image={res.image} url={res.url} publishedAt={res.publishedAt} source={res.source} />)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (searchText && searchText.length > 0) {
            dispatch(getSearchNewsRequestAction(null));
            axios.get(`${envUrl.search}?searchTerm=${searchText}&lang=${lang}`)
                .then(response => {
                    setSearchText('');
                    dispatch(getSearchNewsSuccessAction(response.data));
                })
                .catch(error => {
                    dispatch(getSearchNewsFailedAction([]))
                    console.error(error);
                });
        }
    }

    useEffect(() => {
        if (newsArr && newsArr.length > 0) {
            dispatch(getSearchNewsSuccessAction([]))
        }
    }, [])

    const downloadImg = () => {
        const el = document.getElementById('newsImg');
        delay(300).then(() => exportAsImage(el!, 'InShortClone'));
    }

    return <div className="newsGrid">
        <div className="search-container">
            <div className="search_bar_div">
                <input type="search" name="search" placeholder="Search..." className="search_bar_style" value={searchText} onChange={searchItem} />
            </div>
            <div className="search_button_div">
                <button type="submit" className="search_button_style" onClick={() => handleSubmit()}><FaMagnifyingGlass /></button>
            </div>
        </div>

        {newsArr && newsArr.length > 0 ? <button type="button" className="downloadButton" onClick={() => downloadImg()}> Export as Image</button> : null}

        <div style={{ paddingTop: newsArr && newsArr.length > 0 ? '100px' : '65px' }} id="newsImg">
            {!isLoading ? (newsArr && newsArr.length > 0 ? newsArr : <center style={{ color: "red", fontWeight: 'bold', backgroundColor: '#EBF1F4' }}>CURRENTLY NO NEWS TO SHOW. PLEASE SEARCH NEWS OR IF FACING ISSUE TRY AFTER SOMETIME....</center>) : <Spinner />}
        </div>
    </div>
}

export default SearchPage