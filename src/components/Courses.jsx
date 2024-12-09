import MainCont from './courses-components/MainCont'
import Intro from './courses-components/Intro'
import CoursesList from './courses-components/CoursesList'
import CoursesFeatures from './courses-components/CoursesFeatures'
import Testimonials2 from './courses-components/Testimonials2'
import Faqs from './courses-components/Faqs'
import Connect from './courses-components/Connect'

const Courses = () => {
  return (
    <div>
      <MainCont />
      <Intro />
      <CoursesList />
      <CoursesFeatures />
      <Faqs />
      <Connect />
      <Testimonials2 />
    </div>
  )
}

export default Courses