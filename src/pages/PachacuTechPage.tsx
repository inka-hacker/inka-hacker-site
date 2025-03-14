import { useNavigate } from 'react-router-dom';
import Chakana from '../assets/chakana.svg';
import Tawa_Chakana_white from '../assets/Tawa_Chakana_white.svg';
import TSS from '../assets/TSS.png';
import imagen_pachacutec from '../assets/imagen_pachacutec.jpg';
import map from '../assets/map.png';
import inka10 from '../assets/inka10.jpg';

function PachacuTechPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#00796B] text-white px-4 sm:px-6 py-12">
      <div className="w-full max-w-4xl px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Pachacu-Tech</h1>
        
        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">I. The Symbol</h2>
        <p className="mt-4 text-justify">
        The Chakana Microprocessor embodies the union of ancestral wisdom and modern technology. Taking the form of a Chakana, or Andean Cross, it is more than just a shape. This design symbolically unites the Andean understanding of cyclical time and balance with the transformative power of computation and decentralization.        
        </p>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 mb-6 mt-6">
          "Faster than all but a few now imagine, microprocessing will subvert and destroy the nation-state, creating new forms of social organization in the process."
          <br />— James Dale Davidson, <em>The Sovereign Individual</em>
        </blockquote>

        <div className="flex justify-center space-x-20">
        <a href="/pachacu-tech" className="flex flex-col items-center">
            <img src={Tawa_Chakana_white} alt="Tawa Chakana Logo" className="w-40 h-40 mb-4" />
          </a>
          <a href="/pachacu-tech" className="flex flex-col items-center">
            <img src={Chakana} alt="Chakana Logo" className="w-40 h-40 mb-4" />
          </a>

        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">II. The Meaning of "Pachacu-Tech"</h2>
        <p className="mt-4 text-justify">The name Pachacu-Tech operates on three interconnected levels.</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
          <li><strong>Pachacutik</strong> represents a world-resetting transformation, a rupture in history that overturns existing structures. Rooted in the Quechua word Pachacutik, meaning to turn, to change, or to return, it represents the cyclical collapse and renewal of civilizations—a concept deeply embedded in Andean thought.</li>
          <li><strong>"Tech" = Technology</strong> is the modern force reshaping civilization. Just as past Pachakutiks overturned old orders, today's technological revolution is dismantling centralized power and creating space for new forms of governance and coordination beyond the nation-state.</li>
          <li><strong>Pachacu-Tech as a name</strong> sounds like Pachacutec, the ninth Inca ruler whose rise coincided with a historical Pachacutik. He did not just adapt to change—he embodied it, refounding the Inca Empire through strategy, governance, and myth-making.</li>
        </ul>
        <p className="mt-4 text-justify">Each of these levels reinforces the others—a convergence of history, technology, and identity, forming a new paradigm for civilization.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">III. The Ancient Pachacutik: How the Old Andean World Was Rebuilt</h2>
  
        <p className="mt-4 text-justify">History's greatest resets are not just revolutions—they are re-foundings. The Inca Empire itself was built on one.</p>

        
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 ml-6 text-left">1. Crisis & Collapse — Betrayed by Their Own Nobility</h3>
        <p className="mt-4 text-justify">Before Pachacutec, the Inca civilization was on the brink of annihilation. The kingdom of Cusco was weak, fractured, and threatened by external enemies and internal corruption.</p>
        <p className="mt-4 text-justify">The greatest threat came from the Chancas, a powerful rival group who launched an invasion to wipe the Incas from existence. As the Chancas advanced toward Cusco, fear spread among the ruling elite. Instead of leading their people, the Inca nobility chose to abandon them.</p>
        <p className="mt-4 text-justify">Viracocha Inca, the reigning emperor, along with his heir Urco, fled the city with much of the ruling class, leaving Cusco to its fate.</p>
        <p className="mt-4 text-justify">The elites had failed. The empire was leaderless. The people were defenseless. It seemed certain that the Incas would be erased from history.</p>
        
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 ml-6 text-left">2. The Fork in History — Pachacutec's Rise to Power</h3>
        <p className="mt-4 text-justify">With the nobility gone, a young prince—Cusi Yupanqui, later known as Pachacutec ("he who turns the world upside down")—refused to surrender.</p>
        <p className="mt-4 text-justify">Rather than flee, he stayed to fight. But it was not just a battle against an external enemy—it was a battle against the cowardice and failure of the ruling elite.</p>
        <p className="mt-4 text-justify">Pachacutec reorganized Cusco's defenses, rallied the people, and forged a new system of leadership based not on birthright but on merit. Under his command, farmers, artisans, and warriors united against the Chancas.</p>
        <p className="mt-4 text-justify">Legend tells of a divine intervention: the stones themselves rose up to fight as warriors—Pururaucas—giving the Incas the strength to turn the tide. Whether myth or strategy, what mattered was that Pachacutec achieved the impossible—he crushed the Chanca invasion and saved Cusco.</p>
        <p className="mt-4 text-justify">But he did not stop there.</p>
        <p className="mt-4 text-justify">After securing victory, Pachacutec refused to return power to the same elites who had abandoned the empire. His father, Viracocha, and his brother Urco were stripped of their authority. The ruling class had proven their unworthiness, and a new order was needed.</p>
        
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 ml-6 text-left">3. The Birth of an Empire — A New Operating System for Society</h3>
        <p className="mt-4 text-justify">Pachacutec did not simply take power—<strong>he refounded andean civilization.</strong></p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
          <li>He reorganized Cusco into the model of Tawantinsuyu, the "Four Regions," creating a highly efficient and integrated empire.</li>
          <li>He developed a centralized administration, using the Quipu system for record-keeping and taxation—an early form of decentralized data management.</li>
          <li>He expanded the empire far beyond Cusco, forging alliances and integrating conquered peoples into a grander vision of Andean civilization.</li>
        </ul>
        <p className="mt-4 text-justify">What had once been a small, fragile kingdom became a vast empire.</p>
        <p className="mt-4 text-justify">This was not just a change in leadership—it was a new operating system for society.</p>
        <img src={map} alt="map" className="mt-4 mx-auto w-1/2" />

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">IV. The Modern Pachacutik: The Social Singularity</h2>
        <p className="mt-4 text-justify">The Singularity is often described as the point at which technological progress accelerates beyond human control, typically associated with artificial intelligence surpassing human intelligence. This idea envisions a future where rapid advancements reshape civilization in unpredictable ways.</p>
        <p className="mt-4 text-justify">Max Borders expands this concept by shifting the focus from AI to human organization. Instead of a world dominated by artificial superintelligence, he envisions a future where decentralized, self-organizing networks replace bureaucratic inefficiencies and centralized control.</p>
        <p className="mt-4 text-justify">He critiques modern democracy as an outdated system that fosters tribalism and stagnation, likening it to an obsolete operating system. Rather than attempting to reform failing institutions, the solution lies in "exit"—opting out of legacy systems in favor of competitive governance models and decentralized technologies. Innovations like distributed ledgers and smart contracts will enable new forms of collective intelligence and self-governance, making centralized authorities increasingly irrelevant.</p>
        <p className="mt-4 text-justify">At its core, the Social Singularity represents a shift from top-down control to bottom-up coordination. Innovation, often emerging in defiance of existing power structures, is accelerating this transformation. As jurisdiction and geography become less intertwined, people will have greater freedom to choose how they organize and govern their lives.</p>
        <p className="mt-4 text-justify">Just as Pachacutec overturned a failing aristocracy and reorganized his society, today's technological revolution is dismantling centralized power, paving the way for a new world beyond the nation-state. The Social Singularity is the modern Pachacutik—a moment of upheaval that doesn't just change who rules, but redefines the entire system of governance.</p>
        <img src={TSS} alt="TSS" className="mt-4 mx-auto w-1/2" />
        
        
        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">V. Pachacutec: The Archetype of the Refounder</h2>
        <p className="mt-4 text-justify">A civilization cannot be built without myth. Heroes and role models shape entire generations, providing a shared sense of purpose, identity, and aspiration.</p>
        <p className="mt-4 text-justify">Throughout history, cultures have enshrined their greatest figures in legend. Achilles, Odysseus, Thor, Romulus and Remus—figures whose stories have transcended time. Yet, despite his extraordinary impact on history, Pachacutec—the leader who refounded an entire civilization—remains largely unknown beyond Peru.</p>
        <p className="mt-4 text-justify">His story, one of resilience, strategy, and transformation, has never been widely told. While the world looks to Europe and Asia for legendary figures, the Americas have their own refounders—their own architects of civilization. Pachacutec is one of them.</p>
        <p className="mt-4 text-justify">But myths do more than preserve the past—they guide the future.</p>
        <img src={imagen_pachacutec} alt="imagen_pachacutec" className="mt-4 mx-auto w-1/2" />

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">VI. A New Myth for a Changing World</h2>
        <p className="mt-4 text-justify">The world is facing an existential crisis. Our relationship with nature, technology, and governance must be reimagined.</p>
        <p className="mt-4 text-justify">The Incas mastered large-scale coordination without money, cultivated nature rather than exploiting it, and designed a society that functioned through reciprocity rather than coercion. Their legacy offers a blueprint for a civilization that is neither industrial nor primitive, but symbiotic—integrating nature, technology, and human cooperation.</p>
        <p className="mt-4 text-justify">The story of Pachacutec is more relevant now than ever.</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
          <li>He rose from collapse → A new civilization can rise from today's failing systems.</li>
          <li>He refounded his society → The world today needs refounding, not reform.</li>
          <li>He adapted, expanded, and restructured → Decentralized, self-organizing systems are the new frontier.</li>
        </ul>
        <p className="mt-4 text-justify">To build a new civilization, we need a new myth.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">VII. Bringing Pachacutec's Story Back to the World</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 text-left">1. The Mission</h3>
        <p className="mt-4 text-justify">Pachacutec's story deserves to be restored to the collective imagination—not as a relic of the past, but as a blueprint for the future. Using AI-assisted storytelling, this project will reintroduce his legend in a way that resonates with modern audiences.</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 text-left">2. The Medium</h3>
        <p className="mt-4 text-justify">Storytelling has always been the foundation of civilization. From oral traditions to epic poetry, from sacred texts to national histories—myths shape identity, encode values, and inspire the future.</p>
        <p className="mt-4 text-justify">Today, the most influential myths are no longer passed down through stone carvings or parchment scrolls. They are digital, visual, and global.</p>
        <p className="mt-4 text-justify">That's why we will bring Pachacutec's story to life as a comic—a modern medium that combines historical depth with powerful visuals, making the legend accessible to a global audience.</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 text-left">3. The Plan</h3>
        <p className="mt-4 text-justify">This project is all about a story. The goal is to build a cultural ecosystem around Pachacutec's legend, supported by AI for image and video generation.</p>
        <p className="mt-4 text-justify">To achieve this, we will:</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
          <li>Research into the andean worldview and ancient inca myths.</li>
          <li>Launch a DAO to fund this project</li>
          <li>Recreate 3D digital assets of their world.</li>
          <li>Write an adaptation of Pachacutec's legend.</li>
        </ul>
        
        <p className="mt-4 text-justify">If the modern world is forgetting its purpose, then it must be retold in the language of this generation.</p>
        
        <p className="mt-4 text-justify">The refounding begins in myth—but it ends in reality.</p>
        <p className="mt-4 text-justify">A new civilization is being written—and every civilization needs its hero.</p>
        <img src={inka10} alt="inka10" className="mt-4 mx-auto w-1/2" />

        
        <button onClick={goToHome} className="mt-8 text-white underline">Back to Home</button>
      </div>
    </div>
  );
}

export default PachacuTechPage;