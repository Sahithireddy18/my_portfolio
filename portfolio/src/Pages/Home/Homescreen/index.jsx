import Intro from "../Intro";
import Skills from "../Skills";
import Education from "../Education";
import WorkExperience from '../WorkExperience';
import SkillSet from '../SkillSet';
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <WorkExperience />
      <SkillSet />
      <Education />
      <Footer />
    </>
  );
}
