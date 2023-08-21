import FreelancerInfo from "@components/section/FreelancerInfo";
import ScreenSlider from "@components/ScreenSlider";
import ServiceSection from "@components/section/serviceSection/ServiceSection";
import GenerateFile from "@/components/section/GenerateFile";

function App() {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth h-screen"
    >
      <ScreenSlider
        elements={[
          <FreelancerInfo />,
          <ServiceSection />,
          <GenerateFile />
        ]}
      />
    </div>
  );
}

export default App;
