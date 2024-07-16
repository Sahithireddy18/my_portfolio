import Intro from "../Intro";
import Skills from "../Skills";
import Education from "../Education";
import WorkExperience from '../WorkExperience';
import SkillSet from '../SkillSet';
import Footer from "../Footer";
import VolunteerWork from "../VolunteerWork";
import AboutMe from "../AboutMe";

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <AboutMe />
      <WorkExperience />
      <SkillSet />
      <Education />
      <VolunteerWork />
      <Footer />
    </>
  );
}
