export const serviceItemAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

export const contactAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 },
  viewport: { once: true },
};
