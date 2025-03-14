import { useNavigate } from 'react-router-dom';
import sunreal from '../assets/sunreal.jpeg';

function SunAccPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/', { replace: true }); // Replaces the history entry to prevent flicker
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#A23223] text-white px-4 sm:px-6 py-12">
      <div className="w-full max-w-4xl px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Sun/acc</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-center">The Sun is Life, Power and Order.</h2>

        <img src={sunreal} alt="sunreal" className="mt-8 mx-auto w-1/2" />

        <p className="mt-4 text-justified">For millennia, civilizations have understood that the Sun dictates the rhythms of existence—energy, timekeeping, and the cycles that structure life itself. It is the ultimate source of power, driving not just biological life but also human innovation, from agriculture to modern energy systems.</p>
        <p className="mt-4 text-justified"><strong>Sun/acc</strong> explores the relationship between solar energy, technological acceleration, and synchronization. As computation and coordination advance, the Sun remains the fundamental reference point—a force of stability in an era of rapid change.</p>
        <p className="mt-4 text-justified">This concept is still under exploration, with ongoing research into its implications for energy, time systems, and the acceleration of human progress.</p>        

        <button onClick={goToHome} className="mt-8 text-white underline">Back to Home</button>
      </div>
    </div>
  );
}

export default SunAccPage;
