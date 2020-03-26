import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </div>
  )
}

export default HomePage
