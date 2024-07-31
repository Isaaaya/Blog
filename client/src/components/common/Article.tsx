import { Link } from "react-router-dom"
import IArticle from "../../interfaces/article.interface"
import { getTimeAgoFormat } from "../../helpers/getTimeAgoFormat"

const Article = ({article}: {article: IArticle}) => {
  return (
    <Link to={`/${article.slug}`} className='flex items-center rounded-lg min-h-[4.5rem] hover:bg-primary cursor-pointer px-[1rem] gap-2'>
      <div className='flex items-center justify-start w-12 h-12 mt-1 overflow-hidden rounded-lg'>
        <img src={article.icon} alt={article.slug} className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col justify-center ml-2'>
        <p className="text-xl font-semibold tracking-wider text-purple-300">{article.title}</p>
        <p className="text-sm">{getTimeAgoFormat(article?.createdAt)}</p>
      </div>
    </Link>
  )
}

export default Article