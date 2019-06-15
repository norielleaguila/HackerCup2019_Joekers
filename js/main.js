
const projectTitles = [
	"VistaGreen",
	"iBoost",
	"Twine",
	"SMC_Clinic_System",
	"Platter_Framework",
];

const projectDescription = {
	"VistaGreen": "Vista Green Group is a parent company with subsidiary corporations. They need a website to promote their services and previous projects. Harvey is the sole developer of the site. The whole system is connected to a database where he also developed a system that enables them to add, edit, or remove posts on their own. This site is accessible under the company's domain, http://vistagreen.net/.",

	"iBoost": "iBoost Systems Limited needs a website to update and improve their existing website found on http://iboostsystems.com/.  Harvey is the lead developer of the team where they developed the soon to be home site of iBoost Systems which will display what their company is about, the different products and services they offer, and the different means of contacting them.",

	"Twine": "Twine is a local school project wherein Harvey is the lead developer. This is a social networking site that enables different users to share images publicly or privately within their contacts. Users can also search desired images through its corresponding tags.",

	"SMC_Clinic_System": "The SMC System is a highly scalable clinic management system. Patrick Latorre, the lead developer, initially deployed SMC as a solution for storing medical records but has since grown to provide powerful management tools such as report generation and support for multiple clients including mobile.",

	"Platter_Framework": "Project Description",
};

const images = {
	"VistaGreen": ["homepage", "vbi1", "vbi2", "vbi3", "vc1", "vc2", "vc3"],
	"iBoost": ["home", "about", "downloads", "offshoring", "iStream"],
	"Twine": ["account", "home", "editPhoto"],
	"SMC_Clinic_System": ["home-", "add-", "client-", "details-"],
	"Platter_Framework": [],
};


$(document).ready(function(){

		// projectTitles.forEach((title) => {
			// addProject(title);
		// });

  $('#users').mouseenter(function () {

        var x = document.getElementById('clickedNavBarLinks');
        x.innerHTML = "<div>" +
                      "<input id = \"username-input\" type = \"text\"  placeholder=\"Username\">" +
                      "</div>" +
                      "<div>" +
                      "<input id = \"password-input\" type = \"password\" placeholder=\"Password\">" +
                      "</div>" +
                      "<button class=\"input-box\" id = \"loginButton\">Log In</button>";

      x.style.display =  'block';
         $('#clickedNavBarLinks').show();
       });

   $(' #clickedNavBarLinks').mouseleave(function () {
       $('#clickedNavBarLinks').hide();
       }
   ).mouseleave();//trigger mouseleave to hide second div in beginning

    $('#users').hover(function(){
});


		$('.expand').click(function(e){
			if($('#' + this.id).text() == 'Collapse Post'){
				$('#desc' + this.id).css('display', 'none');
				$('#' + this.id).text('Expand Post');
			}
			else{
				$('#desc' + this.id).css('display', 'block');
				$('#' + this.id).text('Collapse Post');
			}

		});
});


function addProject(title) {

	// Add project's description
	projectSnippet =
		`	<div class="bg-light px-5 py-5 my-5 rounded">` +
		`	<div class="section row" id ="${title}Project">` +
		`		<div class="projectDescription col-sm-5">` +
		`			<h3 class="">${title.replace(/_/g, ' ')}</h2>` +
		`			<p>${projectDescription[title]}</p>` +
		`		</div>`;


	// Add project's image container (carousel)
	projectSnippet +=
		`<div id="${title}_carousel" class="carousel slide carousel-fade col-sm-7" data-ride="carousel">` +
		`	<div class="carousel-inner rounded">`;


	// Add project's images
	if (images[title] != null)
		images[title].forEach((fileName, i) => {
			projectSnippet +=
				`		<div class="carousel-item ${(i == 0 ? 'active' : '')}">` +
				`			<img src="./media/${title}/${fileName}.png" class="d-block w-100" alt="...">` +
				`		</div>`;
		});


	// Close project's image container tag & the whole project tag
	projectSnippet += `	</div> </div> </div>`;


	// Append the project to the head of the project snippet
	$('#projectList').append(projectSnippet);


	// Add project's carousel controls
	projectSnippet =
		`	<a class="carousel-control-prev" href="#${title}_carousel" role="button" data-slide="prev">` +
		`		<span class="carousel-control-prev-icon" aria-hidden="true"></span>` +
		`		<span class="sr-only">Previous</span>` +
		`	</a>` +
		`	<a class="carousel-control-next" href="#${title}_carousel" role="button" data-slide="next">` +
		`		<span class="carousel-control-next-icon" aria-hidden="true"></span>` +
		`		<span class="sr-only">Next</span>` +
		`	</a>`;


	// Prepend the controls of the project's carousel to its existing element
	document.getElementById(`${title}_carousel`).innerHTML += projectSnippet;

	$(`#${title}_carousel`).carousel();
}
