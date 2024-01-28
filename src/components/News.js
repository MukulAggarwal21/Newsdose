import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const validCategories = [
  'students', 'exams', 'professor', 'teachers', 'andhrapradesh', 'arunachalpradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat', 'haryana', 'himachalpradesh', 'jharkhand', 'karnataka', 'kerala', 'madhyapradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamilnadu', 'telangana', 'tripura', 'uttarpradesh', 'uttarakhand', 'bengal', 'delhi', 'chandigarh'
];

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '8',
    category: 'general',
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchData(url) {
    try {
      this.setState({ loading: true });

      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchDataForCategory(category) {
    try {
      this.setState({ loading: true });

      let url;
      const categoryQuery = category.toLowerCase();
      const baseApiUrl = 'https://newsapi.org/v2/';

      if (validCategories.includes(categoryQuery)) {
        url = `${baseApiUrl}everything?q=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=1&pageSize=${this.props.pageSize}`;
      } else {
        url = `${baseApiUrl}top-headlines?country=${this.props.country}&category=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=1&pageSize=${this.props.pageSize}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async componentDidMount() {
    const { category } = this.props;
    this.fetchDataForCategory(category);
  }

  async componentDidUpdate(prevProps) {
    const { category } = this.props;

    if (prevProps.category !== category) {
      this.fetchDataForCategory(category);
    }
  }

  handlePrevClick = async () => {
    console.log("previous");
    if (this.state.page > 1) {
      const { category } = this.props;
      const baseApiUrl = 'https://newsapi.org/v2/';
      const categoryQuery = category.toLowerCase();
      const url = validCategories.includes(categoryQuery)
        ? `${baseApiUrl}everything?q=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        : `${baseApiUrl}top-headlines?country=${this.props.country}&category=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

      await this.fetchData(url);
      this.setState((prevState) => ({
        page: prevState.page - 1,
      }));
    }
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      const { category } = this.props;
      const baseApiUrl = 'https://newsapi.org/v2/';
      const categoryQuery = category.toLowerCase();
      const url = validCategories.includes(categoryQuery)
        ? `${baseApiUrl}everything?q=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        : `${baseApiUrl}top-headlines?country=${this.props.country}&category=${categoryQuery}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      await this.fetchData(url);
      this.setState((prevState) => ({
        page: prevState.page + 1,
      }));
    }
  };

  render() {
    console.log('render');
    return (
      <div className="container my-3 ">
        <center>
          <h1 className="text-center" style={{ margin: '40px 0px' }}>
            YOUR DAILY DOSE OF NEWS
          </h1>
        </center>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 65) : ''}
                  description={element.description ? element.description.slice(0, 75) + '.....' : 'Deep Dive into it through ReadMore to get more Updated right Now.....  '}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-sm btn-dark"
            onClick={() => this.handlePrevClick()}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-sm btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={() => this.handleNextClick()}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;









