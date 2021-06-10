import Article from './Article'

const newsArticles = [
  {
    title: "Winning at Life!",
    article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  {
    title: "Losing at Life",
    article: "There are many ways to do so...but the best is just give up"
  },
  {
    title: "React with a twist",
    article: "React is interesting and helps create fulls applications with minimal effort"
  },
  {
    title: "The Spaceforce SDI takes over",
    article: "Students from the Spaceforce SDI cohort have taken over the web development job market"
  },
  {
    title: "Spaceforce finally changes their ranks",
    article: "The Spaceforce has gotten rid of their generic ranks and adobted Jedi ranks"
  },
  {
    title: "Spaceforce adds their first outer space base",
    article: "The spaceforce has launched their spacestation base and Guardians have been assigned to the base for the first time"
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