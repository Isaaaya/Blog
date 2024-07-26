import {useState, useEffect} from 'react';
import IArticle from '../interfaces/article.interface';
import axios from 'axios';
import { BASE_URL } from '../constants';

const useArticles = (tag?: string) => {
    const [articles, setArticles] = useState<IArticle[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getArticles = async() => {
        setIsLoading(true);
          try {
            const res = await axios(`${BASE_URL}/articles`);
            setArticles(res.data);
          } catch (error) {
            console.log(error);
          };
        setIsLoading(false);
        }
        getArticles();
    }, []);

    return { 
        posts: articles.filter((article) => article.type === 'post'),
        projects: articles.filter((article) => article.type === 'project'),
        isLoading,
        filteredByTag:  tag && articles.filter((article) => article.tags?.includes(tag)),
    };
}

export default useArticles