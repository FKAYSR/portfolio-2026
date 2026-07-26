import heroImg from "../assets/hero-img.jpg"

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <article>
        <img src={heroImg} alt="" />
      </article>
    </div>
  );
}