import { useState, useEffect } from "react";
import "./carousel.scss";
import React from "react";

interface CarouselProps {
  children: React.ReactNode;
  title: string;
  itemWidth: number;
  itemGap: number;
  elementsPerGroup: number;
}

function Carousel({
  children,
  title,
  itemWidth,
  itemGap,
  elementsPerGroup,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [offset, setOffset] = useState(0);
  const [childGroups, setChildGroups] = useState<React.ReactNode[][]>([]);
  const reviewCount = React.Children.count(children);
  const reviewLineWidth =
    itemWidth * elementsPerGroup + itemGap * (elementsPerGroup - 1);
  const slidesCount = childGroups.length;

  useEffect(() => {
    const childArray = React.Children.toArray(children);
    const groups: React.ReactNode[][] = [];
    for (let i = 0; i < childArray.length; i += elementsPerGroup) {
      groups.push(childArray.slice(i, i + elementsPerGroup));
    }
    setChildGroups(groups);
  }, [children]);

  const prevSlide = () => {
    setOffset((prev) => {
      let newOffset = prev - reviewLineWidth;
      if (newOffset < 0) {
        newOffset = reviewLineWidth * (slidesCount - 1);
      }
      return newOffset;
    });
    setCurrentSlide((prev) => {
      return prev > 1 ? prev - 1 : slidesCount;
    });
  };

  const nextSlide = () => {
    setOffset((prev) => {
      let newOffset = prev + reviewLineWidth;
      if (newOffset > reviewLineWidth * (slidesCount - 1)) {
        newOffset = 0;
      }
      return newOffset;
    });
    setCurrentSlide((prev) => {
      return prev < slidesCount ? prev + 1 : 1;
    });
  };

  return (
    <div className="conatiner-slider">
      <div className="title">
        <h1>{title}</h1>

        <div className="pagination">
          <p>
            {currentSlide < 10 ? "0" + currentSlide : currentSlide.toString()} /
            {slidesCount < 10 ? "0" + slidesCount : slidesCount.toString()}
          </p>
          <div>
            <span onClick={prevSlide} className="prev">
              ⟵
            </span>
            <span onClick={nextSlide} className="next">
              ⟶
            </span>
          </div>
        </div>
      </div>
      <div
        className="slider"
        style={{
          width: `${reviewLineWidth}px`,
        }}
      >
        <div
          style={{
            width: `${itemWidth * reviewCount + itemGap * (reviewCount - 1)}px`,
            left: `-${offset}px`,
          }}
          className="slider-line"
        >
          {childGroups.map((item, index) => {
            return (
              <div
                style={{ gap: `${itemGap}px` }}
                key={index}
                className="reviews"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
