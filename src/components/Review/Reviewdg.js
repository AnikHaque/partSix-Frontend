import React from 'react'


const Reviewdg = ({review}) => {
    const {quote,name,  img} = review

  return (
    <div>
         <figure class="reviewmain">
          <blockquote>
            {quote}
            <div class="arrow"></div>
          </blockquote>
          <img
             src={img}
            alt="imaage"
          />
          <div class="author">
            <h5>
             {name}
            </h5>
          </div>
        </figure>
    </div>
  )
}

export default Reviewdg