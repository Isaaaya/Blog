import { useParams, Link } from 'react-router-dom'
import MacContainer from '../components/common/MacContainer'
import useArticle from '../hooks/useArticle';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { formatDate } from '../helpers/formatDate';
import Markdown from 'markdown-to-jsx'
import { markdownOptions } from '../constants';
import Loader from '../components/common/Loader';
import Prism from "prismjs";
import "../prism.css";
import { useEffect } from 'react';

const ArticlePage = () => {
  const {slug} = useParams();
  const {article, isLoading} = useArticle(slug!);
  useDocumentTitle(article?.title || '');

  useEffect(() => {
    if (article?.content) Prism.highlightAll();
  }, [article?.content])

  return (
    <MacContainer customStyles='space-y-2'>
        <p className='text-4xl font-semibold tracking-wide min-h-10'>{article?.title}</p>
        <div className='flex items-center gap-4'>
          <p className='font-semibold text-yellow-200 min-w-[105px]'>
            {article?.createdAt && formatDate(article?.createdAt)}
          </p>
        <div className='flex items-center gap-2 overflow-x-auto w-content'>
          {article?.tags?.map((tag) => <Link to={`/blog/${tag}`} className='px-2 py-1 rounded bg-primary h-fit' key={tag}>
            {tag}
          </Link>)}
        </div>
        </div> 
        <div className='h-10' />
        {isLoading ? 
        <Loader size='medium' /> : 
        <Markdown options={markdownOptions}>
          {article?.content!}
        </Markdown>
      }
    </MacContainer>
  )
}

export default ArticlePage