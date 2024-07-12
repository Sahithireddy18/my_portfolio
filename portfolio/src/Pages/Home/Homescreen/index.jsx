import Intro from "../Intro";
import Skills from "../Skills";
import Education from "../Education";
import WorkExperience from '../WorkExperience';
import SkillSet from '../SkillSet';
import Footer from "../Footer";
import VolunteerWork from "../VolunteerWork";

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <WorkExperience />
      <SkillSet />
      <Education />
      <VolunteerWork />
      <Footer />
    </>
  );
}
