// Useful links
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
// https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
// https://stackoverflow.com/questions/42106000/the-image-exceed-to-the-padding-area-of-the-parent-div

import { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav'

const tileInfoList = [
  {imagePath: "/IMG_4111.jpeg", imageTitle: "Derp Ollie"},
  {imagePath: "/IMG_3945.jpg", imageTitle: "Ollie at the lighthouse"},
  {imagePath: "/IMG_4774.jpg", imageTitle: "Ollie in his rain jacket"},
  {imagePath: "/IMG_4226.jpg", imageTitle: "Ollie sleeping next to dad working"},
  {imagePath: "/IMG_3091.jpg", imageTitle: "Ollie running on the beach with a stick"},
  {imagePath: "/IMG_3285.jpg", imageTitle: "Derp Ollie"},
  {imagePath: "/IMG_4216.jpeg", imageTitle: "Cool Ollie"},
  {imagePath: "/IMG_4136.jpeg", imageTitle: "Ollie spread eagle on momma"},
  {imagePath: "/IMG_3091.jpeg", imageTitle: "Ollie by the campfire"},
  {imagePath: "/IMG_2985.jpeg", imageTitle: "Mom, Dad, and Ollie at Timberwolf Mountain"},
  {imagePath: "/IMG_2848.jpeg", imageTitle: "Ollie took over Dad's spot"},
  {imagePath: "/IMG_2846.jpeg", imageTitle: "Ollie tongue out"},
  {imagePath: "/IMG_2717.jpeg", imageTitle: "Ollie's Cone of Shame"},
  {imagePath: "/IMG_2652.jpeg", imageTitle: "Ollie in the wind"},
  {imagePath: "/IMG_2314.jpeg", imageTitle: "Baby Ollie in a blanket"},
  {imagePath: "/IMG_3644.jpeg", imageTitle: "Ollie in the car"},
  {imagePath: "/IMG_3591.jpeg", imageTitle: "Ollie at the beach"},
  {imagePath: "/IMG_3190.jpeg", imageTitle: "Ollie rocket"},
  {imagePath: "/IMG_2818.jpeg", imageTitle: "Ollie with a stick at the beach"},
  {imagePath: "/IMG_2781.jpeg", imageTitle: "Ollie hanging out in the breeze"},
  {imagePath: "/IMG_2758.jpeg", imageTitle: "Ollie in his dignity donut"},
  {imagePath: "/IMG_1651.jpeg", imageTitle: "First day with Ollie!"},
  {imagePath: "/IMG_1672.jpeg", imageTitle: "Car ride home with Ollie"},
  {imagePath: "/IMG_1666.jpeg", imageTitle: "Car ride home with Ollie 2"},
]

const PhotoTile = (props) => {
  const ref = useRef()

  useEffect(() => {
    const handleResize = () => props.setHeight(ref.current?.offsetWidth || 0)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div
      ref={ref}
      className="flex justify-center items-center p-1"
      style={{height: `${props.height}px`}}>
      <div className="rounded h-full overflow-hidden">
        <img 
          className="object-center object-cover min-h-full min-w-full h-auto w-auto" 
          src={props.imagePath}
          alt={props.imageTitle}/>
      </div>
    </div>
  )
}

const PhotoContainer = (props) => {
  return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-1">
    {props.children}
  </div>
}

export default function IndexPage() {
  const [height, setHeight] = useState()

  return (
    <div>
      <Nav/>
      <PhotoContainer>
        {tileInfoList.map((tileInfo, idx) => {
          return (
            <PhotoTile 
              key={idx}
              imagePath={tileInfo.imagePath}
              imageTitle={tileInfo.imageTitle}
              setHeight={setHeight}
              height={height}/>
          )
        })}
      </PhotoContainer>
    </div>
  )
}
