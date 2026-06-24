import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate About Building,
              <span className="font-serif italic font-normal text-white">
                {" "}
                Intelligent Digital Solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full-Stack Developer with over 3 years of experience
                building modern web applications using
                <span className="text-primary glow-text"> React</span>,
                <span className="text-primary glow-text"> Next.js</span>,
                <span className="text-primary glow-text"> Node.js</span>,
                <span className="text-primary glow-text"> PostgreSQL</span> and
                <span className="text-primary glow-text"> MongoDB</span>. I
                enjoy transforming complex ideas into scalable, user-friendly
                products that solve real-world problems.
              </p>
              <p>
                Alongside web development, I'm actively expanding my expertise
                in AI and automation to create smarter, more efficient solutions
                for the future. My focus is on writing clean, maintainable code
                and delivering technology that creates meaningful business
                value.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build scalable, AI-driven digital solutions
                that help businesses automate processes, improve efficiency, and
                unlock new opportunities for growth. By combining modern
                software engineering with emerging artificial intelligence
                technologies, I aim to create products that solve real-world
                challenges and deliver measurable value to users and
                organizations."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
