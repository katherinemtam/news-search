import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  if(articles) {
    const articleElements = articles.map(article => (
      <li key={article.title}>
        <Article
          title={article.title}
          author={article.author}
          description={article.description}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  } return <ul>Sorry! Something went wrong...</ul>;
};
ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string
    })
  ),
};

export default ArticleList;

