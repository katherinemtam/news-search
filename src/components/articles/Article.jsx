import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description  }) => (
  <> 
    {title
      ? <h2>{title}</h2>
      : <h2>There is no title for some reason...</h2>
    }
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
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;

