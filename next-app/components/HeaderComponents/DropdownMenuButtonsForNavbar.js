export default function DropdownMenuButtonsForNavbar({isDesktop, category, handleOnClickButton } ) {
	return (
    <>
	    <li>
				<button 
				  type="button" 
				  className="btn btn-secondary"
				  data-bs-dismiss={isDesktop ? null : "offcanvas"}
				  data-bs-target={isDesktop ? null : "#offcanvasResponsive"}
				  onClick={handleOnClickButton}>
				  { category }
				</button>
			</li>
		</>
	)
}