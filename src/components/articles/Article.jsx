import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description  }) => (
  <>
    <h2>{title}</h2>
    {author 
      ? (<h3>By {author}</h3>)
      : (<h3>By Unknown Author</h3>)
    }
    {description
      ? (<h3>{description}</h3>)
      : (<h3>No description available.</h3>)}
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;

