import { Carousel } from "react-bootstrap"

const CarouselInicio = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://factorialhr.es/wp-content/uploads/2021/04/07154848/gestion-de-proyectos-min.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://www.yunbitsoftware.com/blog/wp-content/uploads/2021/02/21430-scaled-e1614339566329.jpg" alt=""/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://www.esan.edu.pe/images/blog/2021/12/13/1500x844-viabilidad-13-12-2021.jpg" alt=""/>
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