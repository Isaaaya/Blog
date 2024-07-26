import { useParams, Link } from 'react-router-dom'
import MacContainer from '../components/common/MacContainer'
import useArticle from '../hooks/useArticle';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { formatDate } from '../helpers/formatDate';
import Markdown from 'markdown-to-jsx'
import { markdownOptions } from '../constants';

const ArticlePage = () => {
  const {slug} = useParams();
  const {article} = useArticle(slug!);
  useDocumentTitle(article?.title || '');

  return (
    <MacContainer customStyles='space-y-2'>
        <p className='text-4xl font-semibold tracking-wide'>{article?.title}</p>
        <div className='flex gap-4'>
          <p className='font-semibold text-yellow-200'>
            {formatDate(article?.createdAt!)}
          </p>
          <div>
            {article?.tags?.map((tag) => <Link to={`/blog/${tag}`} className='px-2 py-1 rounded bg-primary' key={tag}>
              {tag}
            </Link>)}
          </div>
        </div>
        <Markdown options={markdownOptions}>
          {article?.content!}
        </Markdown>
    </MacContainer>
  )
}

export default ArticlePage