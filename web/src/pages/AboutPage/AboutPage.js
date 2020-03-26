import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>Redwood Blog</h1>
      </header>
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </div>
  )
}

export default AboutPage
