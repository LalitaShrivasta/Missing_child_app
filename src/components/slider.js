import React, { Component } from 'react';
import './slider.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images-eu.ssl-images-amazon.com/images/I/51Jcx8ttQOL.jpg',
  },
  {
    src: 'https://www.advocate.com/sites/advocate.com/files/2018/04/17/hart-familycrash750x422.jpg',
  },
  {
    src: 'https://i0.wp.com/kznwatch.co.za/wp-content/uploads/2018/09/miguel.jpg?zoom=2.625&resize=372%2C209&ssl=1',
  }
];

class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  
  export default Slider;
  