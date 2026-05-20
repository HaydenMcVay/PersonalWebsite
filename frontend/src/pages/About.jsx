import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the about page</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
