import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getSearchedArticles, getTopHeadlines } from '../services/news-utils';

export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: [],
    loading: true,
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
    this.setState({ articles, loading: false });
  }

  render() {
    const { search, articles, loading } = this.state;
    if(loading) return <h1>Loading...</h1>;

    return (
      <>
        <Search 
          search={search}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          onSubmit={this.handleSubmit}
        />

        <ArticleList articles={articles}/>
      </>
    );
  }
}
