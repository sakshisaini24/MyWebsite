import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  emoji: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  emoji,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 text-center">
      <span className="mb-3 inline-block text-3xl">{emoji}</span>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-warm-brown/80">{subtitle}</p>
    </FadeIn>
  );
}
