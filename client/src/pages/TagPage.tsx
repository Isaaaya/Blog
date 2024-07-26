import { useParams } from 'react-router-dom'
import ArticlesList from '../components/common/ArticlesList';
import MacContainer from '../components/common/MacContainer'
import useArticles from '../hooks/useArticles';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TagPage = () => {
  const {tag} = useParams();
  const {filteredByTag} = useArticles(tag);
  useDocumentTitle(`#${tag}` || '');

  return (
    <MacContainer customStyles='space-y-2'>
      <p className='text-2xl'>Articles, tagged with #{tag}</p>
      <ArticlesList articles={filteredByTag || []} />
    </MacContainer>
  )
}

export default TagPage