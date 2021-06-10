import Article from './Article'

const newsArticles = [
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  }
]

const Home = () => {
  return(
    <div>
      {newsArticles.map((article) => (
        <Article article={article}/>
      ))}
    </div>
  )
}

export default Home;