export function MySkill() {
  return (
    <div className="mx-5  md:mx-60">
      <div className="header-session">
        <h3>MY SKILLS</h3>
        <h4></h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {myskill.map((item, index) => {
          return (
            <div className="w-full flex-col flex justify-start items-center my-3 p-4">
              <div className="w-20 h-20 rounded-full">
                <img src={item.img} alt="" />
              </div>
              <div className="header py-2">
                <h3>{item.title}</h3>
              </div>
              <div className="caption">{item.desciption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const myskill = [
  {
    title: "TEAMWORK",
    img: "images/skill1.svg",
    desciption: (
      <p>
        I have been working in groups since I was at school, I always listen to
        and absorb people's opinions
      </p>
    ),
  },
  {
    title: "RESEARCH",
    img: "images/skill2.svg",
    desciption: (
      <p>
        What I know is what I learn by myself and learn from the internet, my
        friends, my lecturers. I have the ability to learn very quickly
      </p>
    ),
  },
  {
    title: "ENGLISH",
    img: "images/skill3.svg",
    desciption: (
      <p>
        My English is only in reading and writing. I often read English
        documents to learn
      </p>
    ),
  },
  {
    title: "PROGRAMMING LANGUAGES",
    img: "images/skill4.svg",
    desciption: <p>HTML5, CSS3, Javascript ES6, Java, C/C++, Python</p>,
  },
  {
    title: "FRAMEWORKS & PLATFORMS",
    img: "images/skill5.svg",
    desciption: (
      <p>
        <b>Style: </b>Bootstrap, SASS, Material UI
        <br />
        <b>Framework: </b>NextJS (ReactJS), Redux, Router
        <br />
        <b>Database: </b>MySQL, SQL Server, Firebase
        <br />
        <b>Version Control: </b>Git
        <br />
      </p>
    ),
  },

  {
    title: "IDE & EDITOR",
    img: "images/skill6.svg",
    desciption: (
      <p>
        <b>Code IDE: </b> Visual Studio, Visual Studio Code, Sublime Text,
        Netbeans, Eclipse, Dev C<br />
        <b>Design Tool: </b> Adobe Photoshop, Adobe Illustrator, Adobe Premiere
        <br />
      </p>
    ),
  },
];
