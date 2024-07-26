import IArticle from '../../interfaces/article.interface'
import Article from './Article'

const ArticlesList = ({type, articles}: {type?: 'post' | 'project', articles: IArticle[] | []}) => {
  return (
    <section className=''>
       {type && <p className='text-2xl font-semibold tracking-wider capitalize text-heading'>{type}s</p>}
        <div>
            {articles.map((article) => <Article key={article._id} article={article}  />)}
        </div>
    </section>
  )
}

export default ArticlesList