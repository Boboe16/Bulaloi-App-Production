function AppInfo({ appName, appCategory, appVersion, appRequirement, appSize }) {
	return (
		<>
			<div id='App-Info-h4' className='row'>
				<h4 className='col'>App Info</h4>
			</div>
			<div id='App-Info-p' className='row'>
				<p id='App-Name' className='col-5'>App Name</p>
				<p className='col-5'>{appName}</p>
				<p id='Category' className='col-5'>Category</p>
				<p className='col-5'>{appCategory}</p>
				<p id='Version' className='col-5'>Version</p>
				<p className='col-5'>{appVersion}</p>
				<p id='Requirement' className='col-5'>Requirement</p>
				<p className='col-5'>{appRequirement}</p>
				<p id='File-Size' className='col-5'>File Size</p>
				<p className='col-5'>{appSize}</p>
			</div>
		</>
	)
}

export default AppInfo
