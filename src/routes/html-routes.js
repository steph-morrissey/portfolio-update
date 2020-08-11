const express = require("express");
const router = express.Router();
const projectsData = [
  {
    name: "Weather Dashboard",
    description:
      "An in browser weather application, that allows a user to search for a current day and 7 day forecast based off a specified location. Users can see previously searched locations for easy access to popular searched locations.",
    technologies: ["jQuery", "Bootstrap", "MomentJS", "OpenWeatherAPI"],
    imageName: "WEATHER_DASHBOARD.png",
    repoLink: "",
    deployedLink: "",
  },
  {
    name: "Day Scheduler",
    description:
      "An in browser application whereby users can input the upcoming events that they have scheduled throughout the day, and understand what events are past/present and future based off colour coding. Events can be added or deleted by the user.",
    technologies: ["Bootstrap", "jQuery", "MomentJS"],
    imageName: "DAY_PLANNER.png",
    repoLink: "",
    deployedLink: "",
  },
  {
    name: "README Markdown Generator",
    description:
      "A CLI application whereby users can create their own fully formatted README for a project by specifying their github username and answering a series of questions.",
    technologies: ["Inquirer", "Axios"],
    imageName: "README.png",
    repoLink: "",
    deployedLink: "",
  },
  {
    name: "PowerUp",
    description:
      "PowerUp is a game where users can play in either a SuperHero or Pokemon universe and battle against a series of characters, which each round symbolising a play made by the user, either choosing a power property (SuperHero) or through and attack/defend (Pokemon) play.",
    technologies: ["Semantic UI", "Anime JS", "SuperHero API", "Poke API"],
    imageName: "POWERUP.png",
    repoLink: "",
    deployedLink: "",
  },
  {
    name: "Meal Joy: Recipes Made Easy",
    description:
      "An application that allows users to search for a list of recipes based off a search keyword. Users have the option of saving and favouriting recipes that they can re-visit at another time.",
    technologies: [
      "Node JS",
      "Express",
      "Express Handlebars",
      "Passport",
      "Axios",
      "Tailwind",
    ],
    imageName: "MEALJOY.png",
    repoLink: "",
    deployedLink: "",
  },
];
router.get("/", async (req, res) => {
  const projects = projectsData.map((project) => {
    const name = project.name;
    const description = project.description;
    const technologies = project.technologies.join(" | ");
    const imageName = project.imageName;
    return { name, description, technologies, imageName };
  });

  res.render("index", { projects });
});

module.exports = router;
