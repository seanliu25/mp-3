
import Main from "./main";
import { STYImage } from "./mystyle";

// Import your components (assuming you created separate files for each component)

function Index () {
  return (
      <Main>
        <h2>About Me</h2>
        {/* <img src="myself.jpg" alt="Shangwei Liu" /> */}
        <STYImage src = "/myself.jpg" />
        <p>
          Hello, my name is Shangwei Liu, and I am a senior at Boston University. I
          am currently studying computer science and have experience in web
          development, AI, and digital human interaction technologies.
          <br />
          I have interned at Paranvous, where I help develop AI-driven solutions. I
          am passionate about technology's potential to improve lives and enjoy
          solving complex problems through code.
          <br />
          In my free time, I like exploring new tech trends and working on personal
          projects to further hone my skills. 
        </p>
      </Main>
  );
};

export default Index;
