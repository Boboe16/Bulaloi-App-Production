export default function DropdownMenuButtonsForNavbar({ category, handleButtonClick } ) {
	return (
	    <>
		    <li>
		    	<button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive" 
                onClick={() => handleOnClickButton}
                  { category }
                </button>
			</li>
		</>
	)
}