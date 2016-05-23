/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var formattedName =  HTMLheaderName.replace("%data%","Archit Jain");	
 var formattedRole =  HTMLheaderRole.replace("%data%", "Software Developer"); 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 //adding bio
 
 var skills = ["Java", "JS","HTML"];
 var bio = {
	name : "Archit Jain",
	role : "software developer",
	pictureurl : "images/dp.jpg",
	skills : skills,
	welcomemsg : "Hey ! sup"



 };
 var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomemsg);
 var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureurl);
 var skillset = HTMLskills.replace("%data%",bio.skills);

 $("#header").append(welcomeMsg);
 $("#header").append(formattedBioPic);
 $("#header").append(skillset);