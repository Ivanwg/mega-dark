import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const MegaPower: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const flagmanRef = useRef<HTMLDivElement>(null);
  const megaImageRef = useRef<HTMLDivElement>(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // лучше в стилях всем элемаентам задать фиксированное позиционирование

        gsap.set(megaImageRef.current, {
          position: "fixed",
          bottom: 'auto',
          top: '100%',
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
        });
        gsap.set(circleRef.current, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        });
        // gsap.set(titleRef.current, {
        //   position: "fixed",
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        // });
        gsap.set(subtitleRef.current, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          
        });
        gsap.set(flagmanRef.current, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        });
        
      const flagmanItems = gsap.utils.toArray(".js-megaPower-flagman-item");
      const megaTL = gsap.timeline({paused: true});
      megaTL.fromTo(titleRef.current, {}, {duration: 1});
      megaTL.fromTo(titleRef.current, {autoAlpha: 1}, {autoAlpha: 0, duration: .2});
      megaTL.fromTo(subtitleRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
      megaTL.fromTo(circleRef.current, {yPercent: 50, y: `${window.innerHeight / 2}`, scale: .7}, {yPercent: 0, y: 0, scale: 10, duration: 6}, '-=1');
      megaTL.fromTo(megaImageRef.current, {yPercent: 0, autoAlpha: 1}, {yPercent: -40,  duration: 5}, '-=5.5');
      megaTL.to(subtitleRef.current, {autoAlpha: 0, duration: .5});
      megaTL.fromTo(flagmanRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: .0001}, '-=.5');
      megaTL.fromTo(flagmanItems, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, stagger: 1});
      



      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        animation: megaTL,
        scrub: 1, 
        markers: false,
        // pin: pinnedRef.current,
        pinSpacing: false
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    // если анимация выполняется слишком быстро или медленно, отрегулируйте минимальную высоту секции
    <section className="min-h-[400vh] bg-white-2"  ref={sectionRef}>
      {/* <div className="min-h-[100vh] bg-green-900" ref={pinnedRef}></div> */}
      <div
        ref={titleRef}
        className="sticky top-0 flex h-[100vh] items-center justify-center text-17xl text-black text-center"
      >
        MEGAМОЩЬ
      </div>
      <div
        ref={subtitleRef}
        className="invisible z-[20] flex h-[100vh] items-center justify-center text-7.5xl text-center text-white mix-blend-difference"
      >
        в миникорпусе
      </div>
      <div
        ref={circleRef}
        className="cir z-[10] m-auto flex h-[20rem] w-[20rem] items-center justify-center rounded-full bg-black text-7.5xl text-white"
      ></div>
      <div
        ref={megaImageRef}
        className="left-px top-px z-[50] m-x-auto h-screen w-screen invisible"
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={"/MegaDark.jpg"}
          alt="Mega_1"
        />
      </div>
      <div ref={flagmanRef} className="h-[100vh] text-white invisible">
        <h2 className="js-megaPower-flagman-item">
            Флагман линейки — <br/>
            там где нужна гибкость
          </h2>
          <p className="js-megaPower-flagman-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa nobis ad, magnam, ab, eum excepturi maxime fuga delectus a totam.</p>
          <div className="js-megaPower-flagman-item">lG LTE</div>
          <div className="js-megaPower-flagman-item">Тут иконки</div>
      </div>
    </section>
  );
};

export default MegaPower;
