import { useParams } from 'react-router-dom'
import ArticlesList from '../components/common/ArticlesList';
import Loader from '../components/common/Loader';
import MacContainer from '../components/common/MacContainer'
import useArticles from '../hooks/useArticles';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TagPage = () => {
  const {tag} = useParams();
  const {filteredByTag, isLoading} = useArticles(tag);
  useDocumentTitle(`#${tag}` || '');

  return (
    <MacContainer customStyles='space-y-2'>
      <p className='text-2xl'>Articles, tagged with #{tag}</p>
      {isLoading ? 
      <Loader size='small' /> : 
      <ArticlesList articles={filteredByTag || []} />}
    </MacContainer>
  )
}

export default TagPage