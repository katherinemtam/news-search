import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getSearchedArticles, getTopHeadlines } from '../services/news-utils';
import './NewsSearch.css';

export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: [],
    loading: true,
    initialLoad: true,
  };

  async componentDidMount() {
    const articles = await getTopHeadlines();
    this.setState({ articles, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ articles, loading: true });
    const articles = await getSearchedArticles(this.state.search);
    this.setState({ articles, loading: false, initialLoad: false });
  }

  render() {
    const { search, articles, loading, initialLoad } = this.state;
    if(loading) return <h1>Loading...</h1>;

    return (
      <div>
        <h1>Daily Tribune</h1>
        <Search 
          search={search}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {initialLoad
          ? <h1>Top Headlines</h1>
          : <h1>Here's your search results for '{search}':</h1>
        }
        <ArticleList search={search} articles={articles}/>
      </div>
    );
  }
}
