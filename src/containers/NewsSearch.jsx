import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getArticles } from '../services/news-utils';

export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: [],
    // loading: true,
  };

  // async componentDidMount() {
  //   const articles = await getArticles(this.state.search);
  //   this.setState({ articles });
  // }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const articles = await getArticles(this.state.search);
    this.setState({ articles });
  }

  render() {
    const { search, articles, loading } = this.state;
    // if(loading) return <h1>Loading...</h1>;

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
