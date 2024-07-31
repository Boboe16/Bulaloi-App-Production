import AppGameSection from './AppGameSection.js'
import Footer from '../GlobalComponents/Footer.js';

function Content({ data }) {
  return (
    <>
      <div id='Content'className='row'>
        <AppGameSection data={data}/>
      </div>
      <Footer />
    </>
  )
}

export default Content
