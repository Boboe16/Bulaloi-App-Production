import AppGameSection from './AppGameSection.js'

function Content({ title, id, data }) {
	return (
		<>
		 <div id='Content'className='row'>
				<AppGameSection id={ id } title={ title } data={data}/>
		 </div>
		</>
	)
}

export default Content
