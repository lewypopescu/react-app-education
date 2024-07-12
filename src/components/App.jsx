import Paper from "./Paper";
import Sidebar from "./Sidebar";
import TutorsList from "./TutorsList";

import schoolImage from "../images/School1.png";

export function App() {
  const data = {
    name: "MIT",
    description:
      "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    tutors: [
      {
        firstName: "John",
        lastName: "Smith",
        phone: "+1 302-865-7394",
        email: "johnsmith@goit.global",
        city: "New York",
        options: "Group creation",
      },
      {
        firstName: "Antonio",
        lastName: "García",
        phone: "+34 456 890 302",
        email: "antonio.garcia@goit.global",
        city: "Madrid",
        options: "Group creation, editing teacher profiles",
      },
    ],
    cities: ["Kyiv", "London", "Berlin"],
    department: [
      { name: "Faculty of Computer Science" },
      { name: "Faculty of Automation" },
      { name: "Faculty of Neural Networks" },
    ],
  };

  return (
    <main>
      <Sidebar />
      {/* <Paper children={<><h1>University</h1><p>Test</p></>}> </Paper> */}

      <Paper>
        <h1>Universityyyyyyyyyy</h1>
        <p>Testtt</p>
        <img src={schoolImage} alt="School" />
        {/* <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt="School" /> */}
      </Paper>

      <TutorsList tutors={data.tutors} />
    </main>
  );
}
