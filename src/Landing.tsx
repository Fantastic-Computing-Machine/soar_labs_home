import TextPressure from "./components/TextPressure";
import TrueFocus from "./components/TrueFocus";
// import Orb from "./components/Orb";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-[color:var(--text-primary)]"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* <div className="pointer-events-none relative h-[600px] w-[600px] opacity-80 ">
          <Orb
            hoverIntensity={0}
            rotateOnHover={false}
            hue={0}
            forceHoverState={true}
          />
        </div> */}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-black/60 to-transparent z-20"
      />

      {/* fsjf */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-10">
        <div
          className="w-full max-w-5xl"
          style={{ position: "relative", height: "300px" }}
        >
          <TextPressure
            text="  GELP  "
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="var(--text-primary)"
            strokeColor="#ff0000"
            minFontSize={16}
          />
        </div>
        <div className="mb-6 text-3xl font-bold text-[color:var(--text-primary)]">
          Transform Your
        </div>
        <div className="flex items-center gap-3 text-2xl font-bold">
          <TrueFocus
            sentence="Knowledge"
            manualMode={false}
            blurAmount={5}
            borderColor="var(--text-primary)"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
          <span className="px-6 text-4xl font-bold">Into</span>
          <TrueFocus
            sentence="Intelligence"
            manualMode={false}
            blurAmount={5}
            borderColor="var(--text-primary)"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </div>
      </div>
    </section>
  );
}
