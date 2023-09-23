import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const MegaPower: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const subtitleContainerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const flagmanRef = useRef<HTMLDivElement>(null);
  const megaImageRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".megaPower-animated-text");
      elements.forEach((el, i) => {
        const containerEl = el as gsap.DOMTarget;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerEl,
            endTrigger:
              i === elements.length - 1 ? flagmanRef.current : undefined,
            pin: true,
            pinSpacing: false,
            pinSpacer:
              i === elements.length - 1
                ? subtitleContainerRef.current
                : undefined,
            scrub: true,
          },
        });

        tl.to(containerEl, {
          autoAlpha: 1,
        }).to(
          containerEl,
          {
            autoAlpha: i === elements.length - 1 ? 1 : 0,
          },
          0.5,
        );
      });
      gsap.to(circleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top",
        },
      });
      gsap.timeline().to(megaImageRef.current, {
        yPercent: -30,
        scrollTrigger: {
          trigger: subtitleRef.current,
          endTrigger: flagmanRef.current,
          pin: megaImageRef.current,
          scrub: true,
          pinSpacing: false,
          markers: true,
          onEnter: () => {
            gsap.set(megaImageRef.current, {
              position: "fixed",
              bottom: "99%",
              top: "99%",
              left: "50%",
              right: "50%",
              transform: "translateX(-50%)",
            });
          },
        },
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top top",
            endTrigger: subtitleRef.current,
            end: "center top",
            pin: circleRef.current,
            scrub: true,
            markers: true,
          },
        })
        .fromTo(
          circleRef.current,
          {
            scale: 0.1,
            scrollTrigger: {
              trigger: titleRef.current,
              endTrigger: subtitleRef.current,
              end: "center",
              pin: circleRef.current,
              scrub: true,
              markers: true,
            },
          },
          {
            scale: 0.3,
            ease: "none",
          },
        )
        .to(circleRef.current, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "bottom",
            endTrigger: flagmanRef.current,
            end: "bottom",
            pin: circleRef.current,
            scrub: true,
            markers: true,
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen overflow-hidden bg-white-2">
      <div className="">
        <div
          ref={titleRef}
          className="megaPower-animated-text flex h-[100vh] items-center justify-center text-17xl text-black"
        >
          MEGAМОЩЬ
        </div>
        <div
          className="text-center mix-blend-difference"
          ref={subtitleContainerRef}
        >
          <div
            ref={subtitleRef}
            className="megaPower-animated-text invisible z-[20] flex h-[100vh] w-screen items-center justify-center text-7.5xl text-white"
          >
            в миникорпусе
          </div>
        </div>
        <div className="h-[100vh] w-[100vh]">
          <div
            ref={circleRef}
            className="cir z-[10] m-auto flex h-[20rem] w-[20rem] items-center justify-center rounded-full bg-black text-7.5xl text-white"
          ></div>
        </div>
      </div>
      <div
        ref={megaImageRef}
        className="left-px top-px z-[50] m-auto h-screen w-screen"
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={"/MegaDark.png"}
          alt="Mega_1"
        />
      </div>
      <div ref={flagmanRef} className="mt-[100rem] h-[100vh] bg-black"></div>
    </section>
  );
};

export default MegaPower;
