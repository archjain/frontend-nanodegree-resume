/*
This is empty on purpose! Your code to build the resume will go here.
 */





var skills=["Java","Javascript","HTML","CSS"];

 
var bio = {
	"name":"Archit Jain",
	"role":"Software Developer",
	"image":"images/dp.jpg",
	"skills":["Java","Javascript","HTML","CSS"],
	"contacts":{
				"Mobile":1111111,
				"mail":"jain.archit04@yahoo.com",	
				"location":"Tempe"	

	}
}

var workex = {

	"employers":[
	{
		"company":"MFS",
		"start_year":2012,
		"end_year":2015,
		"title":"ASE",
		"desc":"worked as software developer. majorly in java",
		"location":"New York"
	},
	{
		"company":"Misys",
		"start_year":2012,
		"end_year":2012,
		"title":"Intern",
		"desc":"worked as intern. majorly in javascript",
		"location":"Phoenix"
	}

	]
}


var education = {

"schools":[
{
	"school":"Arizona State University",
	"degree":"Masters",
	"major":"Computer Science",
	"location":"Tempe"
},
{
	"school":"VIT",
	"degree":"Bachelors",
	"major":"Computer Science",
	"location":"India"
}

],

"online_course":[
  { 
  	"course_name":"Javascript",
  	"website":"udacity"
  }

]

} 

var projects = {
  
  "projs":[
   {
  		"title":"Search Engine",
  		"year":2015,
  		"description":"implemneted page rank algorithm"
  	},
  	{
  		"title":"GradeBook Application",
  		"year":2016,
  		"description":"done by implementing REST API"
  	}

  ]



}


//displaying projects
projects.display = function(){
	for(i=0;i<projects.projs.length;i++){
		
		$("#projects").append(HTMLprojectStart);
		var projTitle =  HTMLprojectTitle.replace("%data%",projects.projs[i].title);
		$(".project-entry:last").append(projTitle);
		var projYear =  HTMLprojectDescription.replace("%data%",projects.projs[i].year);
		$(".project-entry:last").append(projYear);
		

		var projDesc =  HTMLprojectDescription.replace("%data%",projects.projs[i].description);
		$(".project-entry:last").append(projDesc);
		
		}
}

projects.display();


//header information
var formattedPic = HTMLbioPic.replace("%data%",bio.image);
$("#header").prepend(formattedPic);


var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);


console.log(bio.skills.length);




//skills
if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill])	;
		$("#skills:last").append(formattedSkill);
		$("#skills:last").append("</br>");
}

}


//workex s
console.log(workex.employers.length);

function displayWork(){
if(workex.employers.length>0){
	for(emp in workex.employers){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",workex.employers[emp].company);
		var formattedTitle = HTMLworkTitle.replace("%data%",workex.employers[emp].title);
		var formattedDesc = HTMLworkDescription.replace("%data%",workex.employers[emp].desc)
		var formattedEmpTitle = formattedEmployer + "  " + formattedTitle;
		$(".work-entry:last").append(formattedEmpTitle);
		$(".work-entry:last").append(formattedDesc);
			
	}
}
}

displayWork();




// to identify click coordnates
$(document).click(function(event){

var x = event.pageX;
var y = event.pageY;
logClicks(x,y);
});

$("#map").append(googleMap);