import AudiobookCard from "@/components/AudiobookCard";

const Index = () => {
  const audiobooks = [
    {
      title: "Der Steppenwolf",
      author: "Hermann Hesse",
      description: "Ein zeitloser Klassiker über die Zerrissenheit des modernen Menschen zwischen Individualität und Gesellschaft.",
      duration: "8 Std. 15 Min.",
      genre: "Klassiker",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description: "Eine fesselnde Geschichte der Menschheit von der Steinzeit bis heute - brillant erzählt und tiefgründig.",
      duration: "15 Std. 17 Min.",
      genre: "Sachbuch",
      coverImage: "/placeholder.svg"
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "Die dystopische Vision einer totalitären Zukunft - aktueller denn je und meisterhaft vorgetragen.",
      duration: "11 Std. 22 Min.",
      genre: "Dystopie",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Die Verwandlung",
      author: "Franz Kafka",
      description: "Kafkas surreale Erzählung über Gregor Samsa wird zum unvergesslichen Hörerlebnis.",
      duration: "2 Std. 45 Min.",
      genre: "Klassiker",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Der Medicus",
      author: "Noah Gordon",
      description: "Ein episches Abenteuer im mittelalterlichen England und Persien - packend und lehrreich zugleich.",
      duration: "24 Std. 8 Min.",
      genre: "Roman",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Eine kurze Geschichte der Zeit",
      author: "Stephen Hawking",
      description: "Hawking erklärt das Universum auf verständliche Weise - ein Meisterwerk der Wissenschaftsvermittlung.",
      duration: "5 Std. 30 Min.",
      genre: "Wissenschaft",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Der Name der Rose",
      author: "Umberto Eco",
      description: "Ein literarischer Kriminalroman im mittelalterlichen Kloster - intellektuell und spannend.",
      duration: "20 Std. 15 Min.",
      genre: "Krimi",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Siddhartha",
      author: "Hermann Hesse",
      description: "Die spirituelle Reise zur Selbstfindung - zeitlos schön und meditativ erzählt.",
      duration: "4 Std. 12 Min.",
      genre: "Klassiker",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Der Schwarm",
      author: "Frank Schätzing",
      description: "Ein packender Wissenschaftsthriller über die Rache der Meere - atmosphärisch und intelligent.",
      duration: "31 Std. 45 Min.",
      genre: "Thriller",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Die Physiker",
      author: "Friedrich Dürrenmatt",
      description: "Eine brillante Tragikomödie über Wissenschaft, Verantwortung und Wahnsinn.",
      duration: "2 Std. 20 Min.",
      genre: "Drama",
      coverImage: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Meine Lieblingshörbücher
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Eine persönliche Sammlung der 10 Hörbücher, die mich am meisten bewegt, 
            begeistert und inspiriert haben.
          </p>
        </div>
      </section>

      {/* Audiobooks Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {audiobooks.map((audiobook, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AudiobookCard {...audiobook} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Zusammengestellt mit ♥ für alle Hörbuch-Liebhaber
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
