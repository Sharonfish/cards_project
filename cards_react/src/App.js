import './App.css';
import Card from './components/Card/Card';
import { blogSlideData } from './Data/Data'

function App() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className='flex flex-col items-center justify-center mb-16 w-full'>
        <h1 className="text-3xl font-bold mt-0 mb-6">Current Events</h1>
        <p className='text-gray-500'>Here are our current events at coding lounge. They are bala bala ...</p>
        <p className='mb-8 text-gray-500'>Bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala bala ...</p>
        <div className='w-full flex flex-wrap justify-center gap-11'>
          {blogSlideData.map((data, index) => (
            <Card key={`blog-slide-${index}`} title={data.title} author={data.author} date={data.date} background_image={data.background_image} description={data.description}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
