import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

export default class News extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
        this.setState({ loading: true })
        // pentru erori, modifica textul de la request in ceva gresit
        const response = await axios.get('/search?query=react');
        this.setState({ articles: response.data.hits, error: null });
    } catch (error) {
        console.error(error.message);
        this.setState({ error: 'Incarcarea stirilor nu a functionat.' })
    } finally {
        this.setState({ loading: false });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}

        {articles.length > 0 ? (
          <ul>
            {articles.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}
