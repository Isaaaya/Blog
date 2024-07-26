import MacContainer from "./components/common/MacContainer";
import TotoroGif from './assets/gifs/totoro-blushing.gif';
import ArticlesList from "./components/common/ArticlesList";
import useArticles from "./hooks/useArticles";

function App() {
  const {posts, projects} = useArticles();
  return (
      <MacContainer customStyles="space-y-6">
        <section className="flex">
          <div className="space-y-3">
            <p className='text-4xl font-semibold'>
              Hello, everyone!
            </p>
            <p className="text-lg">
              I'm a fullstack developer, who loves to explore the programming world, and learn about high-quality development strategies. I'm particularly interested in JS, React, Node JS, PHP, Laravel, algorithmes in general, so that's what I mainly write about.
            </p>
          </div>
          <img src={TotoroGif} alt='Totoro character blushing' className='self-center ml-5 w-36 h-36' />
        </section>
        <p className="font-semibold">
          I sincerely hope, you find this blog helpful in any way :)
        </p>
        <ArticlesList type="project" articles={projects} />
        <ArticlesList type="post" articles={posts} />
      </MacContainer>
  );
}

export default App;
