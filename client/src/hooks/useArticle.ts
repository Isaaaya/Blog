import {useState, useEffect} from 'react';
import IArticle from '../interfaces/article.interface';
import axios from 'axios';
import { BASE_URL } from '../constants';

const useArticle = (slug: string) => {
    const [article, setArticle] = useState<IArticle | null>(null);

    useEffect(() => {
        const getArticle = async() => {
            try {
              const res = await axios(`${BASE_URL}/articles/${slug}`);
              setArticle(res.data);
            } catch (error) {
              console.log(error);
            }
        }
        getArticle();
    }, [slug]);
    
    return { article };
}

export default useArticle