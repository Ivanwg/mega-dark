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

  const filterRef = useRef<HTMLDivElement>(null);
  const filterListRef = useRef<HTMLUListElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const firstBlurListRef = useRef<HTMLUListElement>(null);
  const secondBlurListRef = useRef<HTMLUListElement>(null);
  const thirdBlurListRef = useRef<HTMLUListElement>(null);

  const beautyWrapRef = useRef<HTMLDivElement>(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const flagmanItems = gsap.utils.toArray(".js-megaPower-flagman-item");
      const beautyItems = gsap.utils.toArray(".js-beauty-item");

      const megaTL = gsap.timeline({paused: true});
      megaTL.fromTo(titleRef.current, {}, {duration: .3});
      megaTL.fromTo(titleRef.current, {autoAlpha: 1}, {autoAlpha: 0, duration: .2});
      megaTL.fromTo(subtitleRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
      megaTL.fromTo(circleRef.current, {yPercent: 50, y: `${window.innerHeight / 2}`, scale: .7}, {yPercent: 0, y: 0, scale: 10, duration: 6}, '-=.7');
      megaTL.fromTo(megaImageRef.current, {yPercent: 0, autoAlpha: 1}, {yPercent: -40,  duration: 5}, '-=5.7');
      megaTL.to(subtitleRef.current, {autoAlpha: 0, duration: .5});
      megaTL.fromTo(flagmanItems, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, stagger: 1});

      megaTL.to(megaImageRef.current, {yPercent: -50, top: '50%', scale: 2,  duration: 1});
      megaTL.to(flagmanItems, {autoAlpha: 0, duration: .5}, '-=1');
      
      megaTL.fromTo(filterRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, '-=.9');
      megaTL.fromTo(filterListRef.current, {yPercent: 100}, {yPercent: 0, duration: 1}, '-=.5');
      // '-=.4
      megaTL.fromTo(titleRef.current, {}, {duration: .3});

      megaTL.to(megaImageRef.current, {scale: 1,  duration: 1});
      megaTL.fromTo(blurRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, '-=1');
      megaTL.to(filterRef.current, {autoAlpha: 0, duration: .3}, '-=1');

      megaTL.fromTo(firstBlurListRef.current, {autoAlpha: 0, yPercent: 20}, {autoAlpha: 1, yPercent: 0, duration: 1}, '-=.9');
      megaTL.to(firstBlurListRef.current, {autoAlpha: 0, yPercent: 0, duration: .3});
      megaTL.fromTo(secondBlurListRef.current, {autoAlpha: 0}, {autoAlpha: 1, yPercent: 0, duration: 1}, '-=.1');
      megaTL.to(secondBlurListRef.current, {autoAlpha: 0, duration: .3});
      megaTL.fromTo(thirdBlurListRef.current, {autoAlpha: 0}, {autoAlpha: 1, yPercent: 0, duration: 1}, '-=.1');
      
      // megaTL.fromTo(titleRef.current, {}, {duration: .3});

      megaTL.fromTo(beautyWrapRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
      megaTL.to(megaImageRef.current, {scale: 1.2,  duration: 1}, '-=1');
      megaTL.to(blurRef.current,{autoAlpha: 0, duration: .7}, '-=.7');
      megaTL.fromTo(beautyItems, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, stagger: 1});
      

      megaTL.fromTo(titleRef.current, {}, {duration: .3});
      console.log(beautyItems)

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
    <section className="min-h-[600vh] bg-white-2"  ref={sectionRef}>
      <div className="sticky top-0 flex h-[100vh] min-h-[100vh] overflow-clip bg-white" ref={pinnedRef}>
        <div
          ref={circleRef}
          className="absolute bottom-0 left-0 top-0 right-0 cir z-[-1] m-auto flex h-[20rem] w-[20rem] items-center justify-center rounded-full bg-black text-7.5xl select-none"
        ></div>
        <div
          ref={titleRef}
          className="absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center text-17xl text-black text-center"
        >
          MEGAМОЩЬ
        </div>
        <div
          ref={subtitleRef}
          className="absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center text-7.5xl text-center text-white mix-blend-difference"
        >
          в миникорпусе
        </div>
        <div ref={flagmanRef} className="absolute left-0 top-0 h-[100vh] z-[6] text-white">
          <h2 className="js-megaPower-flagman-item">
              Флагман линейки — <br/>
              там где нужна гибкость
            </h2>
            <p className="js-megaPower-flagman-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa nobis ad, magnam, ab, eum excepturi maxime fuga delectus a totam.</p>
            <div className="js-megaPower-flagman-item">lG LTE</div>
            <div className="js-megaPower-flagman-item">Тут иконки</div>
        </div>
        <div
          ref={megaImageRef}
          className="absolute top-[100%] left-[50%] -translate-x-2/4 z-[5] m-x-auto h-screen w-screen invisible"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={"/MegaDark.jpg"}
            alt="Mega_1"
          />
        </div>

        <div ref={filterRef} className="z-[5] absolute bottom-0 left-0 top-0 right-0 invisible flex items-end backdrop-brightness-75">
          <ul className="flex pb-10 justify-around w-[100%]" ref={filterListRef}>
            {
              [1, 2, 3, 4, 5].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>{index + ' TEXT BLOCK'}</li>
              )
            }
          </ul>
        </div>

        <div ref={blurRef} className="z-[5] absolute bottom-0 left-0 top-0 right-0 invisible backdrop-blur-sm">
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={firstBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>элемент 1 списка</li>
              )
            }
          </ul>
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={secondBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-red-900 h-[80px] p-20 text-white" key={index}>элемент 2 списка</li>
              )
            }
          </ul>
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={thirdBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>элемент 3 списка</li>
              )
            }
          </ul>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center invisible backdrop-brightness-50" ref={beautyWrapRef}>
          <h2 className="text-white js-beauty-item">
            Красивый заголовок
          </h2>
          <p className="absolute bottom-5 m-x-auto text-white js-beauty-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corrupti aspernatur mollitia omnis? Voluptate
          </p>
        </div>
      </div>

    </section>
  );
};

export default MegaPower;
