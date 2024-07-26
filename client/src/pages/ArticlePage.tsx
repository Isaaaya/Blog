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
      {isLoading ? 
      <Loader size='medium' /> : 
      <>
        <p className='text-4xl font-semibold tracking-wide'>{article?.title}</p>
        <div className='flex items-center gap-4'>
          <p className='font-semibold text-yellow-200'>
            {formatDate(article?.createdAt!)}
          </p>
          <div>
            {article?.tags?.map((tag) => <Link to={`/blog/${tag}`} className='px-2 py-1 rounded bg-primary tooltip' key={tag}>
              <span className='tooltiptext'>Go to {tag} articles</span>
              {tag}
            </Link>)}
          </div>
        </div>
        <Markdown options={markdownOptions}>
          {article?.content!}
        </Markdown>
      </>}
    </MacContainer>
  )
}

export default ArticlePage