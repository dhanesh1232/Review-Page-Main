// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexPage: 0}

  previousReviewer = () => {
    const {indexPage} = this.state
    if (indexPage > 0) {
      this.setState(prevState => ({indexPage: prevState.indexPage - 1}))
    }
  }

  nextReviewer = () => {
    const {indexPage} = this.state
    const {personReviews} = this.props
    if (indexPage < personReviews.length - 1) {
      this.setState(prevState => ({indexPage: prevState.indexPage + 1}))
    }
  }

  displayPersonReviewsRender = () => {
    const {personReviews} = this.props
    const {indexPage} = this.state
    const {imgUrl, username, companyName, description} = personReviews[
      indexPage
    ]
    console.log(username)
    return (
      <div className="review">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner">
          <h1 className="head">Reviews</h1>
          <div className="review-page">
            <button
              type="button"
              className="btn"
              onClick={this.previousReviewer}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="img"
              />
            </button>
            {this.displayPersonReviewsRender()}
            <button
              type="button"
              className="btn"
              onClick={this.nextReviewer}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="img"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
