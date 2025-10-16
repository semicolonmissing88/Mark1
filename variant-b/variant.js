Add a “how it works” section below the hero

**Reasoning:**
The user wants to add a "how it works" section below the hero. I need to:

1. Create a new section with "how it works" content
2. Insert it below the hero section
3. Use JSX to create the section with appropriate styling

Looking at the cleaned HTML, I can see the hero section ends after the hero content. I should add a new section below it.

Let me create a "how it works" section that fits with the page design. I'll need to:
- Find where to insert it (after the hero section)
- Create a visually appealing section with steps or content
- Use Tailwind cf: utilities for styling
- Make it consistent with the design system

I'll use JSX components to build this section. Let me create a section with a title and some content about how Ramp works.

Now let me apply this to the page:

Perfect! ✅ The "How It Works" section has been successfully added to the page.

**What was added:**
- A new section below the hero with a clean, three-step layout
- **Step 1:** Connect Your Accounts
- **Step 2:** Set Your Policies  
- **Step 3:** Start Saving
- Each step features a numbered yellow circle with descriptive text
- The section is fully responsive (single column on mobile, 3 columns on desktop)
- Styled with Tailwind utilities and positioned right after the hero section

The variant is now live with both the headline change ("Welcome To Ramp") and the new "How It Works" section!

// Find the hero section container to insert the "how it works" section after it
const heroSection = document.querySelector('#hero-section');

if (heroSection) {
  console.log('Found hero section, adding how it works');
  
  // Create the how it works section
  const howItWorksSection = (
    <section className="cf:py-16 cf:px-4 cf:bg-white">
      <div className="cf:max-w-6xl cf:mx-auto">
        {/* Title */}
        <div className="cf:text-center cf:mb-12">
          <h2 className="cf:text-4xl cf:font-bold cf:text-black cf:mb-4">How It Works</h2>
          <p className="cf:text-lg cf:text-gray-600">Get started with Ramp in three simple steps</p>
        </div>
        
        {/* Steps */}
        <div className="cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-8">
          {/* Step 1 */}
          <div className="cf:text-center">
            <div className="cf:w-16 cf:h-16 cf:bg-yellow-300 cf:rounded-full cf:flex cf:items-center cf:justify-center cf:mx-auto cf:mb-4">
              <span className="cf:text-2xl cf:font-bold cf:text-black">1</span>
            </div>
            <h3 className="cf:text-xl cf:font-semibold cf:text-black cf:mb-2">Connect Your Accounts</h3>
            <p className="cf:text-gray-600">Link your ERP, HRIS, and accounting systems in minutes</p>
          </div>
          
          {/* Step 2 */}
          <div className="cf:text-center">
            <div className="cf:w-16 cf:h-16 cf:bg-yellow-300 cf:rounded-full cf:flex cf:items-center cf:justify-center cf:mx-auto cf:mb-4">
              <span className="cf:text-2xl cf:font-bold cf:text-black">2</span>
            </div>
            <h3 className="cf:text-xl cf:font-semibold cf:text-black cf:mb-2">Set Your Policies</h3>
            <p className="cf:text-gray-600">Define approval flows and spending controls for your team</p>
          </div>
          
          {/* Step 3 */}
          <div className="cf:text-center">
            <div className="cf:w-16 cf:h-16 cf:bg-yellow-300 cf:rounded-full cf:flex cf:items-center cf:justify-center cf:mx-auto cf:mb-4">
              <span className="cf:text-2xl cf:font-bold cf:text-black">3</span>
            </div>
            <h3 className="cf:text-xl cf:font-semibold cf:text-black cf:mb-2">Start Saving</h3>
            <p className="cf:text-gray-600">Automate expense management and watch your team become more efficient</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  // Insert the section after the hero
  heroSection.insertAdjacentElement('afterend', howItWorksSection);
