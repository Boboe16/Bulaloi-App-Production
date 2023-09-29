import AppGameSection from './AppGameSection.js'

function Content({ data }) {
  return (
    <>
      <div id='Content'className='row'>
        <AppGameSection data={data}/>
      </div>
    </>
  )
}

export default Content
