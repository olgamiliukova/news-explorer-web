import BlockComponent from './BlockComponent';

export default class ResultsComponent extends BlockComponent {
  getLoadingElement() {
    if (!('loadingElement' in this)) {
      this.loadingElement = this.createElement('loading');
    }

    return this.loadingElement;
  }

  renderLoading(props) {
    const loadingElement = this.getLoadingElement();
    const { loading } = this.getProps();

    return this.render({
      ...props,
      header: () => '',
      content: () => '',
      element: () => loadingElement.toHtml({
        ...loading,
        ...props,
      }),
    });
  }

  getNoResultsElement() {
    if (!('noResultsElement' in this)) {
      this.noResultsElement = this.createElement('noResults');
    }

    return this.noResultsElement;
  }

  renderNoResults(props) {
    const noResultsElement = this.getNoResultsElement();
    const { noResults } = this.getProps();

    return this.render({
      ...props,
      header: () => '',
      content: () => '',
      element: () => noResultsElement.toHtml({
        ...noResults,
        ...props,
      }),
    });
  }

  getHeaderElement() {
    if (!('headerElement' in this)) {
      this.headerElement = this.createElement('header');
    }

    return this.headerElement;
  }

  getButtonElement() {
    if (!('buttonElement' in this)) {
      this.buttonElement = this.createElement('button');
    }

    return this.buttonElement;
  }

  renderResults(props) {
    const headerElement = this.getHeaderElement();
    const buttonElement = this.getButtonElement();
    const { results = [], showMore, title } = {
      ...this.getProps(),
      ...props,
    };
    const resultsCount = results.length;

    return this.render({
      ...props,
      header: () => (
        title
          ? headerElement.toHtml({
            title,
          })
          : ''
      ),
      element: () => (
        resultsCount > showMore.limit
          ? buttonElement.toHtml({
            ...showMore,
            ...props,
          })
          : ''
      ),
    });
  }
}
