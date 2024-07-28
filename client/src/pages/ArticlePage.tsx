import { useParams, Link } from 'react-router-dom'
import MacContainer from '../components/common/MacContainer'
import useArticle from '../hooks/useArticle';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { formatDate } from '../helpers/formatDate';
import Markdown from 'markdown-to-jsx'
import { markdownOptions } from '../constants';
import Loader from '../components/common/Loader';

const ArticlePage = () => {
  const {slug} = useParams();
  const {article, isLoading} = useArticle(slug!);
  useDocumentTitle(article?.title || '');

  return (
    <MacContainer customStyles='space-y-2'>
        <p className='text-4xl font-semibold tracking-wide min-h-10'>{article?.title}</p>
        <div className='flex items-center gap-4 mb-10'>
          <p className='font-semibold text-yellow-200'>
            {article?.createdAt && formatDate(article?.createdAt)}
          </p>
          <div className='flex items-center gap-2 min-h-12'>
            {article?.tags?.map((tag) => <Link to={`/blog/${tag}`} className='px-2 py-1 rounded bg-primary tooltip h-fit' key={tag}>
              <span className='tooltiptext'>
                Go to {tag} articles
              </span>
              {tag}
            </Link>)}
          </div>
        </div> 
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