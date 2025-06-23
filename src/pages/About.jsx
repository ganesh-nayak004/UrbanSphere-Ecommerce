import React from 'react'
import {assets} from"../assets/assets"
import Title from '../components/Title'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta distinctio nulla repellat, saepe repudiandae in perspiciatis aspernatur quisquam. Rerum, suscipit laudantium possimus unde distinctio ab perferendis necessitatibus assumenda asperiores ex culpa. Molestias quaerat maiores illum eum omnis mollitia aperiam magni facilis. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita aperiam illo iusto harum quia, laudantium, totam fuga animi consequatur tempora? Sapiente hic, at voluptatibus fugit quia molestias ipsum accusamus et natus, neque, id odio harum necessitatibus. Porro quisquam quas vel accusantium nobis quia veritatis voluptatem.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam impedit nesciunt quas, dolores totam voluptas similique tenetur delectus. Animi, velit odio laborum ipsum sed enim veniam voluptas distinctio? Nisi non et, velit enim fugiat doloremque sint? Natus eligendi quia ipsum repellendus praesentium veritatis culpa cumque.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illo aliquam, praesentium nam voluptas vero numquam! Quas placeat assumenda adipisci?</p>
        </div>
        <div className="border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convineince: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illo aliquam, praesentium nam voluptas vero numquam! Quas placeat assumenda adipisci?</p>
        </div>
        <div className="border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illo aliquam, praesentium nam voluptas vero numquam! Quas placeat assumenda adipisci?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
