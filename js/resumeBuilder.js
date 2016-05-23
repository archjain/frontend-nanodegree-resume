/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills=["Java","Javascript","HTML","CSS"];

 
var bio = {
	"name":"Archit Jain",
	"role":"Software Developer",
	"image":"images/dp.jpg",
	"skills":["Java","Javascript","HTML","CSS"]
}

var workex = {

	"employers":[
	{
		"company":"MFS",
		"start_year":2012,
		"end_year":2015,
		"title":"ASE",
		"desc":"worked as software developer. majorly in java"
	},
	{
		"company":"Misys",
		"start_year":2012,
		"end_year":2012,
		"title":"Intern",
		"desc":"worked as intern. majorly in javascript"
	}

	]
}


var education = {

"schools":[
{
	"school":"Arizona State University",
	"degree":"Masters",
	"major":"Computer Science"
},
{
	"school":"VIT",
	"degree":"Bachelors",
	"major":"Computer Science"
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
  		"description":"implemneted page rank algorithm"
  	},
  	{
  		"title":"GradeBook Application",
  		"description":"done by implementing REST API"
  	}

  ]



}


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
		$("#skills").append(formattedSkill);
}

}


//workex s
console.log(workex.employers.length);

function displayWork(){
if(workex.employers.length>0){
	for(emp in workex.employers){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",workex.employers[emp].company);
		var formattedTitle = HTMLworkTitle.replace("%data",workex.employers[emp].title);
		var formattedDesc = HTMLworkDescription.replace("%data",workex.employers[emp].desc)
		var formattedEmpTitle = formattedEmployer + "  " + formattedTitle;
		$(".work-entry:last").append(formattedEmpTitle);
		$(".work-entry:last").append(formattedDesc);
			
	}
}
}
displayWork();