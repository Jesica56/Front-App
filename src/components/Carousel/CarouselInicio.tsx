import { Carousel } from "react-bootstrap"

const CarouselInicio = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming.jpg?itok=6bRkryO5" alt=""/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg" alt=""/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselInicio