import { useState, useEffect } from 'react';
import Header from './Header';
import "./Anime.scss";
import AnimeSidebar from './AnimeSidebar';
import MainContent from './MainContent';
import Draggable from 'react-draggable';

function Animelist() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        SetTopAnime(temp.top.slice(0, 5));
    }

    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
            .then(res => res.json());

        SetAnimeList(temp.results);
    }

    useEffect(() => {
        GetTopAnime();
    }, []);

    return (
        <Draggable>
            <div className="Animelist">
                <Header />
                <div className="content-wrap">
                    <AnimeSidebar
                        topAnime={topAnime} />
                    <MainContent
                        HandleSearch={HandleSearch}
                        search={search}
                        SetSearch={SetSearch}
                        animeList={animeList} />
                </div>
            </div>
        </Draggable>
    );
}

export default Animelist;