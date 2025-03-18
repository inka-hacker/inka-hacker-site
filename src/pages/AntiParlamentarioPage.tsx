import { useNavigate } from 'react-router-dom';
import underT from '../assets/underT.jpg';

function AntiParlamentarioPage() {
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate('/', { replace: true });
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#DADADA] text-black px-4 sm:px-6 py-12">
        <div className="w-full max-w-4xl px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Anti-Parliament</h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">I. The Current State of Peru: Representative Democracy Turned into a Particracy</h2>
          <p className="mt-4 text-justify">Since Pedro Castillo's failed self-coup and impeachment, Peru has descended into political turmoil. In just six years, the country has cycled through seven presidents—each with less legitimacy than the last. When Castillo fell, Vice President Dina Boluarte assumed power under the pretense of leading a transitional government. Instead of restoring stability, she brokered a pact with Congress, solidifying a system built on mutual preservation rather than governance.</p>
          <p className="mt-4 text-justify">Boluarte and Congress should have been checks on one another. Instead, they merged into a single political entity, shielding each other from accountability. Congress controls the judiciary, ensuring Boluarte's immunity. She, in turn, guarantees their continued dominance. The arrangement is clear: she remains in power as long as she complies. The moment she ceases to be useful, they will remove her. Meanwhile, Congress—driven by a coalition of radical left and right factions—has weaponized legislation to entrench its control.</p>
          <p className="mt-4 text-justify">When citizens protested, the state responded with force. Fifty people were killed. The international community condemned the crackdown, yet Congress remained unmoved. Rather than addressing the crisis, they reinforced the reality that the system does not serve the people—it exists to preserve itself.</p>
          <p className="mt-4 text-justify">Watching this unfold led me to a realization: voting, protesting, and engaging within the system are dead ends. The problem is not Boluarte. It is not Congress. It is representative democracy itself</p>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">II. 200 Years of Corruption: The Root Cause Is Moloch</h2>
          <p className="mt-4 text-justify">Ever since I read the essay Meditations on Moloch by Scott Alexander, I've seen this concept unravel in everyday interactions across all aspects of Peruvian life. There's even a popular phrase:</p>
          <blockquote className="italic border-l-4 border-black-300 pl-4 mb-6 mt-6">
          “El peor enemigo de un peruano es otro peruano.” = “The worst enemy of a Peruvian is another Peruvian.”
          <br />— Peruvian phrase
          </blockquote>
          <p className="mt-4 text-justify">Trust in society no longer exists here. Beyond your immediate neighbors, Lima is a jungle where everyone is trying to take advantage of others. That's when it clicked—this isn't just a recent problem. From the very founding of this country, everything has been connected… Moloch has been behind it all.</p>
          <p className="mt-4 text-justify">Why has corruption persisted for over two centuries in Peru? The answer isn't just bad leadership—it's a deeper systemic flaw: the logic of Moloch. Moloch represents a scenario where everyone—even those with good intentions—is forced to play by corrupt rules to survive. Every new politician enters Congress with promises of change but quickly realizes they must either conform or be eliminated. The incentives for corruption are too strong, and those who resist are outmaneuvered. Peru's political decay isn't a result of individual failures but of a system that rewards exploitation and punishes integrity.</p>


          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">III. Representative Democracy: Sociopathic Parasitism</h2>
          <p className="mt-4 text-justify">Representative democracy has become a predatory system. Those who rise in politics aren't the best leaders but the most ruthless manipulators. The incentives are perverse: power attracts those who seek control, not service. Politicians, like parasites, extract wealth, resources, and legitimacy from the people while giving nothing in return. Congress doesn't solve national problems; it manufactures crises to justify its own existence. The longer it remains in place, the more it robs Peruvians of their sovereignty.</p>
          <p className="mt-4 text-justify">Relying on intermediaries is fundamentally flawed. Trusting someone else to prioritize your best interests above their own is inherently risky. It's not that representatives are always malicious; it's that systems shape behavior through incentives. In a framework where power and resources are concentrated in the hands of a few, self-serving behavior isn't just predictable—it's inevitable.</p>
          <p className="mt-4 text-justify">When parasitic behavior emerges, an agent exploits the system for its gain, draining its vitality without killing it. Our political paradigm—intermediary politics—has fallen prey to sociopathic parasitism among leaders and learned helplessness among voters.</p>
          <blockquote className="italic border-l-4 border-black-300 pl-4 mb-6 mt-6">
          “Power tends to corrupt, and absolute power corrupts absolutely.”
          <br />— Lord Acton
          </blockquote>
          <blockquote className="italic border-l-4 border-black-300 pl-4 mb-6 mt-6">
          “Absolute power corrupts, but powerlessness corrupts even more.”
          <br />— Malcolm X
          </blockquote>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">IV. Zen Koan: How Do You Reform an Institution When Reform Must Pass Through It?</h2>
          <p className="mt-4 text-justify">This is the paradox that exposes the futility of working within the system. Any reform to limit Congress's power, increase transparency, or introduce direct democracy must first be approved by Congress itself. But why would parasites vote to weaken their own grip? The very structure of representative democracy ensures that meaningful reform is impossible. The answer, then, is not to fight within the system but to build something that makes Congress irrelevant.</p>
          <p className="mt-4 text-justify">Albert Hirschman's framework of Voice, Exit, and Loyalty explains how people react to failing institutions. If a system is broken, people can:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
            <li>Use their voice to demand change. (But in Peru, the political class ignores the people.)</li>
            <li>Exit the system and find an alternative. (But there is nowhere to go—the political monopoly makes change impossible.)</li> 
          </ul>

          <p className="mt-4 text-justify">But I believe we've reached a point where we must create an Exit through Voice.</p>
          <p className="mt-4 text-justify">When Voice no longer works, and there is no way to Exit… it's time to Refound.</p>
          <p className="mt-4 text-justify">When Congress blocks every attempt at change and no alternatives exist, the only logical step is to refound governance itself—not by seizing power, but by building a new model that makes traditional politics obsolete.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">IV. The Birth of the Anti-Parliament: Underthrow</h2>

          <img src={underT} alt="underT" className="mt-8 mx-auto w-1/2" />        

          <p className="mt-4 text-justify">The first time I read the word Underthrow, it had a magic to it—impossible to translate into Spanish, where we have no simple way to invert the meaning of overthrow. Unlike a violent coup or revolution, which seeks to overthrow an existing regime, underthrow suggests a more subtle, voluntary, and decentralized shift in power.</p>
          <p className="mt-4 text-justify">In his book Underthrow, Max Borders lays out a vision for governance that moves away from coercion and centralized control, instead emphasizing voluntary association, personal sovereignty, and decentralized networks. Rather than toppling governments through force, an underthrow erodes their influence by offering superior alternatives—systems that people willingly choose over the status quo. Borders argues that the future of governance will be shaped not by state institutions but by emergent, decentralized systems that allow individuals to opt in and out freely.</p>
          <p className="mt-4 text-justify">This concept is perfectly captured by venture fund manager Michael P. Gibson in what he calls the “Nakamoto Consensus”:</p>
          <blockquote className="italic border-l-4 border-black-300 pl-4 mb-6 mt-6">
          <p> “It turns out there's only one thing that guarantees the production of good laws. The people bound by the laws have to agree to be bound by them. Not hypothetically or tacitly, as in some imaginary "will of the people" or behind a veil of ignorance. Consent must be real, transparent, and continuous. No law can bind a single person unless that person consents to be bound by that law.”</p>
          <p>“Bad laws can only inflict harm and destroy wealth up to the cost to opt out of them. We can underthrow the state one contract at a time.</p>
          </blockquote>
          <p className="mt-4 text-justify">Gibson's insight aligns with Borders' vision: governance should emerge through voluntary participation rather than imposed authority. Decentralized systems like Bitcoin demonstrate this by allowing people to opt out of traditional structures. </p>
 
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 text-left">V. The Plan: Direct Digital Democracy — Time to Abolish Congress</h2>
          <p className="mt-4 text-justify">In the 2026 elections, I want to defy all odds. The system assumes it's impossible to get more than 60% of votes tainted to restart the process. They believe people will just vote for whatever they throw at us. But I know we can not only beat that margin—we can make history.</p>
          <p className="mt-4 text-justify">You might think, but isn't that still playing by their rules? Here's the catch:</p>
        
          <p className="mt-4 text-justify">An election is almost like signing a contract that renews every five years. But what happens when the contract is abruptly changed? Congress has radically altered the Constitution. The only real option left is to opt-out. Don't sign the contract. Strip them of all legitimacy and strike back with a better system already in place—using decentralized technology they cannot stop.</p>
          <p className="mt-4 text-justify">The shock will bring us international attention, securing recognition from other countries that we no longer accept a representative government. </p>
          <p className="mt-4 text-justify">Along with it, the key action we ought to take is the creation of decentralized platforms where we can collectively write and sign a digital constitution to align and prepare ourselves.</p>
          <p className="mt-4 text-justify">We no longer protest. We demonstrate. We will prove that self-governance is possible.</p>

          <button onClick={goToHome} className="mt-8 text-black underline">Back to Home</button>
        </div>
      </div>
    );
  }
  

export default AntiParlamentarioPage;