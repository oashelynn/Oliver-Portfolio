import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "As a full-stack developer, I'm like a circus performer 🎪, juggling frontend and backend tasks with flair. With the creativity of Picasso 🖌️ and the precision of a Swiss watchmaker ⌚, I bring concepts to life. Turning coffee into code ☕💻 and chaos into order, I tame wild servers and weave intricate webs of logic. Into the bug-hunting jungle 🕷️🌳, I dive with gusto and come out victorious! For me, every line of code is a step towards digital harmony 🎶.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
