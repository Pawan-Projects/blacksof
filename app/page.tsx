
import NestedTabs from "./components/layout/tabs/tab2";
export default function Home() {
  return (
  <div>
    <section className="relative lg:h-screen min-h-[450px] oveflow-hidden bg-blueDark ">
      <div className="absolute inset-0 ">
      <video
  autoPlay
  muted
  loop
  playsInline
  poster="/images/poster.jpg"
  className="h-full w-full object-cover object-center"
>
  <source src="/video/automotive.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
        <div className="absolute inset-0 bg-[#0000008f] h-screen">
          </div>
          <div className="absolute  inset-0 grid place-content-center place-items-center pt-5 md:pt-2 gap-2 text-center w-11/12 mx-auto">
          <span className="sg-translate font-light pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">Driven by performance</span>
          <h2 className="sg-translate text-white font-light text-5xl leading-tight pb-2 ">
            <span className="font-semibold ">Soft trims and <span className="text-blue-400">NVH solutions</span></span><br className="hidden md:block "/> for seamless rides</h2>
            </div>
            </section>

           
<NestedTabs/>

            <div className="h-screen"></div>
  </div>
  );
}
