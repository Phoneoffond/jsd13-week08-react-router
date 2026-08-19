import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div className = "text-center"><h1 >Welcome to Our App</h1>
    <button>Go to About</button>
    <Link>Go to Contact</Link>
    </div>
  )
}


