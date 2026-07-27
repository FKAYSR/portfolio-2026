import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <header>
        <h1 className="not-found-title">404</h1>
      </header>
      <main className="not-found">
        <p>The page you are searching for doesn't exist...</p>
        <Link to="/" className="not-found-link">
          Go back to the front page
        </Link>
      </main>
    </>
  );
}
