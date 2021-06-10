function Article({ article }) {
  return(
    <div>
      <h1>
        {article.title}
      </h1>
      <p>
        {article.article}
      </p>
    </div>
  )
}

export default Article