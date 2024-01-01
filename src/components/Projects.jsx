import Carousel from "./Carousel";

const slides = [
  "assets/photos/afdjsdjfhkj03.jpg",
  "assets/photos/afdjsdjfhkj05.jpg",
  "assets/photos/afdjsdjfhkj17.jpg",
  "assets/photos/afdjsdjfhkj30.jpg",
  "assets/photos/afdjsdjfhkj34.jpg",
  "assets/photos/afdjsdjfhkj42.jpg",
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full h-fit bg-white flex flex-col pb-32 items-center">
        <h1 className="font-bold sm:text-5xl text-4xl p-8 align-middle text-accent">
          Gallery
        </h1>
        <div className="w-[80%] rounded-lg border-2 border-accent md:w-[30%] md:aspect-auto">
          <Carousel autoslide={false} autoslideInterval={3000}>
            {slides.map((slide) => (
              <img className="rounded-lg" src={slide} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
