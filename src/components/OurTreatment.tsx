import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

function OurTreatment() {
  const treatments = [
    {
      id: 1,
      title: "Depression Disorders",
      image: "/treatment/1.webp",
      link: "/our-treatment/psychiatric-evaluation",
    },
    {
      id: 2,
      title: "Anxiety & Panic",
      image: "/treatment/2.webp",
      link: "/our-treatment/medication-management",
    },
    {
      id: 3,
      title: "Trauma Disorders",
      image: "/treatment/3.webp",
      link: "/our-treatment/treatment-for-substance-abuse-and-dependence",
    },
    {
      id: 4,
      title: "Substance Abuse",
      image: "/treatment/4.webp",
      link: "/our-treatment/therapy-services",
    },
    {
      id: 5,
      title: "Bipolar Disorder",
      image: "/treatment/5.webp",
      link: "/our-treatment/individual-therapy",
    },
    {
      id: 6,
      title: "ADHD & Behavioral",
      image: "/treatment/6.webp",
      link: "/our-treatment/dialectical-behavior-therapy",
    },
    {
      id: 7,
      title: "Sleep Disorders (Insomnia)",
      image: "/treatment/7.webp",
      link: "/our-treatment/exposure-therapy",
    },
    {
      id: 8,
      title: "Psychotic Disorders",
      image: "/treatment/8.webp",
      link: "/our-treatment/exposure-therapy",
    },
    {
      id: 9,
      title: "Schizophrenia Disorder",
      image: "/treatment/9.webp",
      link: "/our-treatment/substance-abuse",
    },
    {
      id: 10,
      title: "Personality Disorders",
      image: "/treatment/10.webp",
      link: "/our-treatment/psychiatric-evaluation",
    },
    {
      id: 11,
      title: "Eating Disorders",
      image: "/treatment/11.webp",
      link: "/our-treatment/partial-hospitalization-program",
    },
    {
      id: 12,
      title: "Specific Phobias",
      image: "/treatment/12.webp",
      link: "/our-treatment/partial-hospitalization-program",
    },
  ];

  // Container Stagger Variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Card Item Entry Variants
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Button Color Motion Variants
  const buttonHoverVariants: Variants = {
    rest: {
      backgroundColor: "rgba(240, 253, 250, 0.8)",
      borderColor: "rgba(153, 246, 228, 1)",
      color: "rgba(17, 94, 89, 1)",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
    hover: {
      backgroundColor: "rgba(15, 118, 110, 1)",
      borderColor: "rgba(15, 118, 110, 1)",
      color: "#ffffff",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  // Arrow Motion Variants
  const arrowHoverVariants: Variants = {
    rest: {
      x: 0,
    },
    hover: {
      x: 4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative max-w-7xl mx-auto">
      {/* Background Decorative Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <motion.section
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-800 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
            <span>Our Treatments</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Personalized Mental Health and Therapy Services With Us
          </h2>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {treatments.map((item) => (
            <motion.a
              key={item.id}
              href={item.link}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-between border border-slate-200/80 shadow-sm min-h-[320px] overflow-hidden cursor-pointer"
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Hover Motion Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                variants={{
                  rest: {
                    y: 0,
                    opacity: 0,
                    boxShadow: "none",
                  },
                  hover: {
                    y: -8,
                    opacity: 1,
                    borderColor: "rgba(20, 184, 166, 0.5)",
                    transition: {
                      duration: 0.3,
                      ease: [0.33, 1, 0.68, 1],
                    },
                  },
                }}
              />

              {/* Card Background Glow */}
              <motion.div
                className="absolute -top-12 -right-12 w-28 h-28 bg-teal-400/10 rounded-full blur-xl pointer-events-none"
                variants={{
                  rest: {
                    scale: 1,
                  },
                  hover: {
                    scale: 1.6,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
              />

              {/* Illustration Container */}
              <div className="relative w-28 h-28 flex items-center justify-center my-2">
                <motion.div
                  className="absolute inset-0 bg-teal-50 rounded-full scale-90"
                  variants={{
                    rest: {
                      scale: 0.9,
                    },
                    hover: {
                      scale: 1.1,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                />

                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 max-w-full max-h-full object-contain"
                  variants={{
                    rest: {
                      scale: 1,
                    },
                    hover: {
                      scale: 1.06,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                />
              </div>

              {/* Title */}
              <div className="text-center my-4 flex-grow flex flex-col justify-center relative z-10">
                <motion.h3
                  className="text-base font-semibold text-slate-800 leading-snug"
                  variants={{
                    rest: {
                      color: "#1e293b",
                    },
                    hover: {
                      color: "#134e4a",
                    },
                  }}
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Action Button */}
              <motion.div
                className="relative z-10 w-full py-2.5 px-4 rounded-xl border font-semibold flex items-center justify-center gap-1.5 shadow-xs"
                variants={buttonHoverVariants}
              >
                <span className="text-xs">Learn More</span>

                <motion.div variants={arrowHoverVariants}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </section>
  );
}

export default OurTreatment;