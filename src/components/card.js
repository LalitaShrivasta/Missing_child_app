import React, { Component } from "react";
import Modal from "react-modal";
import "./card.css";
import CommentBox from "../components/comment.js";
import "./comment.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    return (
      <section class="details-card">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHUmsXsUkpVxuLWD_uZ7E8ZVifGne905z7EWSfKzmkvizYGH7"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Khushboo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                  <Modal isOpen={this.state.isActive}>
                    <div class="col-md-4">
                      <div class="card-content">
                        <div class="card-img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFB6devxTO4_VQRXZ3UQsidA-Q3WzPrxYKH7vci3Ac2rJQq9xsw"
                            alt=""
                          />
                        </div>
                        <div class="card-desc">
                          <h3>Khushboo</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Laboriosam, voluptatum! Dolor quo,
                            perspiciatis voluptas totam
                          </p>
                          <a href="#" class="btn-card" />
                          <button
                            onClick={this.toggleModal}
                            href="#"
                            class="btn-card"
                          >
                            hide card
                          </button>
                        </div>
                      </div>
                    </div>
                    hello deepa
                  </Modal>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFB6devxTO4_VQRXZ3UQsidA-Q3WzPrxYKH7vci3Ac2rJQq9xsw"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Priya</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  {/* <a href="#" class="btn-card"> */}
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                  <Modal isOpen={this.state.isActive}>
                    <div class="col-md-4">
                      <div class="card-content">
                        <div class="card-img">
                          <img
                            src="https://www.babynamesdirect.com/images/b/cute-child-65.jpg"
                            alt=""
                          />
                        </div>
                        <div class="card-desc">
                          <h3>Priya</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Laboriosam, voluptatum! Dolor quo,
                            perspiciatis voluptas totam
                          </p>
                          {/* <a href="#" class="btn-card">
                  </a> */}
                          <button
                            onClick={this.toggleModal}
                            href="#"
                            class="btn-card"
                          >
                            hide card
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="https://www.babynamesdirect.com/images/b/cute-child-65.jpg"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Pooja</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  {/* <a href="#" class="btn-card"> */}
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNw-YJePL0ZrV7RrbvIu7c7K2E-fNyrpLJeDFJJaL09XJnYdjZA"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Rani</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  {/* <a href="#" class="btn-card"> */}
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                </div>
              </div>
            </div>
            <Modal isOpen={this.state.isActive}>
              <div class="col-md-4">
                <div class="card-content">
                  <div class="card-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8APzybVXk9Cc5YW10mx-4UeDrmQCVPjypiwRD8wDk9YTlUvm_"
                      alt=""
                    />
                  </div>
                  <div class="card-desc">
                    <h3>Kajal</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                      totam
                    </p>
                    {/* <a href="#" class="btn-card">
                  </a> */}
                    <button
                      onClick={this.toggleModal}
                      href="#"
                      class="btn-card"
                    >
                      hide card
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="http://i1.wp.com/lh3.googleusercontent.com/-fABeTyxwoKk/V_gHOk9p2tI/AAAAAAAAWLc/eo92cxr3Y8kzDNOX7LKXDSlYL2F9k-DRACJoC/w540-h960/mk.jpg?resize=540%2C960&ssl=1"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Lalita</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  {/* <a href="#" class="btn-card"> */}
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                </div>
              </div>
            </div>
            <Modal isOpen={this.state.isActive}>
              <div class="col-md-4">
                <div class="card-content">
                  <div class="card-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qIMqCxP88KEoK_deUOOu3vP57i-b_qqbzZsmuu3R0B8D1kMa8w"
                      alt=""
                    />
                  </div>
                  <div class="card-desc">
                    <h3>Kanika</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                      totam
                    </p>
                    <a href="#" class="btn-card" />
                  </div>
                </div>
              </div>
              {/* <CommentBox /> */}
            </Modal>
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpr_gW0rEq0OHLuwgQMjR1FW_C46tDOcX9LJL24h0bPWdkz1HLkw"
                    alt=""
                  />
                </div>
                <div class="card-desc">
                  <h3>Anjali</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  {/* <a href="#" class="btn-card"> */}
                  <button onClick={this.toggleModal} href="#" class="btn-card">
                    MissingChild
                  </button>
                </div>
              </div>
            </div>
            <Modal isOpen={this.state.isActive}>
              <div class="col-md-4">
                <div class="card-content">
                  <div class="card-img">
                    <img
                      src="https://www.georgianewsday.com/thumbnail.php?file=assets-2016/Adriana_Coronado_433645525.jpeg&size=article_large"
                      alt=""
                    />
                  </div>
                  <div class="card-desc">
                    <h3>Komal</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                      totam
                    </p>
                    {/* <a href="#" class="btn-card"> */}
                    {/* </a> */}
                    <button
                      onClick={this.toggleModal}
                      href="#"
                      class="btn-card"
                    >
                      hide card
                    </button>
                  </div>
                </div>
                <CommentBox />
              </div>
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}
export default Card;
