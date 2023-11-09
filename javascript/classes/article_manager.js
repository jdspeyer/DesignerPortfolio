class ArticleManager {
  /// Wrappers for the articles
  static colWrapperId = 'colWrapper'
  static rowWrapperId = 'rowWrapper'
  static fullWrapperId = 'fullWrapper'

  /// Types of articles
  static imageArticleId = 'imageArticle'
  static textArticleId = 'textArticle'
  static htmlArticleId = 'htmlArticle'
  static videoArticleId = 'videoArticle'
  static titleArticleId = 'titleArticle'
  static slideArticleId = 'slideArticle'

  static generateArticleList (articles) {
    const articleListWrapper = document.createElement('div')

    articles.forEach(article => {
      const newArticle = ArticleManager.#processArticleEntry(article)
      newArticle.classList.add('animate-object-up')
      articleListWrapper.appendChild(newArticle)
    })

    return articleListWrapper
  }

  /// HIGH LEVEL - THIS IS 1 COMPLETED ARTICLE
  static #processArticleEntry (entry) {
    switch (entry.id) {
      case ArticleManager.colWrapperId:
        return ArticleManager.#generateColWrapper(entry)
      case ArticleManager.rowWrapperId:
        return ArticleManager.#generateRowWrapper(entry)
      case ArticleManager.fullWrapperId:
        return ArticleManager.#generateFullWrapper(entry)
      case ArticleManager.imageArticleId:
        return ArticleManager.#generateImageArticle(entry.url, entry.aspectRatio, entry.contain)
      case ArticleManager.textArticleId:
        return ArticleManager.#generateTextArticle(entry.text)
      case ArticleManager.htmlArticleId:
        return ArticleManager.#generateHtmlArticle(entry.html)
      case ArticleManager.videoArticleId:
        return ArticleManager.#generateVideoArticle(entry.url)
      case ArticleManager.titleArticleId:
        return ArticleManager.#generateTitleArticle(entry.title)
      case ArticleManager.slideArticleId:
        return ArticleManager.#generateSlideArticle(entry.urls)
      default:
        break
    }
  }

  /// MID LEVEL - WRAPPERS
  static #generateRowWrapper (object) {
    const articleRowWrapper = document.createElement('div')
    articleRowWrapper.classList = ['article_row_wrapper']
    if (object.padded === true) {
      articleRowWrapper.classList.add('article_padding_horizontal')
    }
    if (object.parent === true) {
      articleRowWrapper.classList.add('article_padding_vertical')
    }
    if (object.lighten === true) {
      articleRowWrapper.classList.add('background-lighten')
    }

    object.children.forEach(child => {
      articleRowWrapper.appendChild(ArticleManager.#processArticleEntry(child))
    })
    return articleRowWrapper
  }

  /// MID LEVEL - WRAPPERS
  static #generateColWrapper (object) {
    const articleColumnWrapper = document.createElement('div')
    articleColumnWrapper.classList = ['article_col_wrapper']
    if (object.padded === true) {
      articleColumnWrapper.classList.add('article_padding_horizontal')
    }

    if (object.parent === true) {
      articleColumnWrapper.classList.add('article_padding_vertical')
    }

    if (object.lighten === true) {
      articleColumnWrapper.classList.add('background-light')
    }

    object.children.forEach(child => {
      articleColumnWrapper.appendChild(ArticleManager.#processArticleEntry(child))
    })
    return articleColumnWrapper
  }

  /// MID LEVEL - WRAPPERS
  static #generateFullWrapper (object) {
    const articleFullWrapper = document.createElement('div')
    articleFullWrapper.classList = ['article_full_wrapper']
    if (object.padded === true) {
      articleFullWrapper.classList.add('article_padding_horizontal')
    }
    articleFullWrapper.appendChild(ArticleManager.#processArticleEntry(object.child))
    return articleFullWrapper
  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the image article
  static #generateImageArticle (imageUrl, aspectRatio, contain) {
    const imageArticle = document.createElement('div')
    imageArticle.classList = ['image_article']
    imageArticle.style.aspectRatio = aspectRatio
    if (contain) {
      imageArticle.style.backgroundSize = 'contain'
    }
    imageArticle.style.backgroundImage = `url(${imageUrl})`
    return imageArticle
  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the text article
  static #generateTextArticle (text) {
    const textArticle = document.createElement('div')
    textArticle.classList = ['text_article']
    const textContent = document.createElement('p')
    textContent.innerHTML = text

    textArticle.appendChild(textContent)
    return textArticle
  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the html article
  static #generateHtmlArticle (html) {
    const htmlArticle = document.createElement('div')
    htmlArticle.classList = ['html_article']

    const parser = new DOMParser()
    const htmlDoc = parser.parseFromString(html, 'text/html')

    htmlDoc.body.childNodes.forEach(node => {
      htmlArticle.appendChild(node)
    })

    return htmlArticle
  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the video article
  static #generateVideoArticle (videoUrl) {

  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the title article
  static #generateTitleArticle (title) {
    const titleArticle = document.createElement('div')

    const titleArticleDivider = document.createElement('div')
    titleArticleDivider.classList = ['relative-divider background-teal']

    const titleArticleText = document.createElement('h2')
    titleArticle.classList = ['title_article']
    titleArticleText.innerHTML = title
    titleArticle.appendChild(titleArticleText)
    titleArticle.appendChild(titleArticleDivider)
    return titleArticle
  }

  /// LOWEST LEVEL - ARTICLE
  /// Generate the slide article
  static #generateSlideArticle (text) {

  }
}

export default ArticleManager
