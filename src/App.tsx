import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Movies from './Components/TrendingNow'

function App() {

  return (
    <main>
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Header />
        <Hero />
        <Movies />
      </div>
    </main>
  );
}

export default App
