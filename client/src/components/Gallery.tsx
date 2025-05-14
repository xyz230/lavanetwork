export default function Gallery() {
  const images = [
    {
      src: "https://pixabay.com/get/gcf1dc8181f1c8c1ae592834765ac72fab5b228cf6502347a1e4ca0119f30018830946f653b342292f5907126675b9297c6c31a4c25e9bd1c4b47d6ac76ac627f_1280.jpg",
      alt: "Minecraft castle",
    },
    {
      src: "https://pixabay.com/get/g545fb50e07bab78dc8e321179ce45d4fae40f65826448931973c86641291a632e62ebff4e25ab1e6e55e8321498ac4b243dc6745e802544fa1bcecd7351ada07_1280.jpg",
      alt: "Minecraft player character",
    },
    {
      src: "https://pixabay.com/get/ga1b4ad71ce41e78b6d9e55de9fdb80c79b7c1d6b57252df9833b56e6d8bbb6cd19f737377da68bb2ecd94503cd3be4f5f99fe714dec936a0fdde4f4d19b0bdcd_1280.jpg",
      alt: "Minecraft cave exploration",
    },
    {
      src: "https://pixabay.com/get/gf6c65e80f72e2116960a7ed8e314bb6bbc86a893a864c18d0f7bf45f83109de1e4cb3dbfb5ed77911cf4b780eef381fe558eada9bd839d9369095ecbc92df486_1280.jpg",
      alt: "Minecraft PvP arena",
    },
    {
      src: "https://pixabay.com/get/g914360da991d37aca47cdda204c185137a72deadf8a45c09b04a66ef2bb3e1f9e5b3908c837bfd3567128b637b7573c3290b232df30ad11edf447a4999719599_1280.jpg",
      alt: "Minecraft town",
    },
    {
      src: "https://pixabay.com/get/g804b3dc1fffca341323d9652eb5b1f954c4f74f1e2c24b3c20f543be29351d64af1a156db721d7f3ddd920773b7809693e93b6855c8c9cf23caa92a68613e96e_1280.jpg",
      alt: "Minecraft server event",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">La Nostra</span>
            <span className="text-primary"> Galleria</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Esplora le immagini delle costruzioni più incredibili, degli eventi e delle avventure sul nostro server.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-md hover:shadow-primary/30 transition-all hover:scale-[1.02] cursor-pointer h-64 object-cover"
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#gallery" className="text-primary font-bold hover:underline inline-flex items-center">
            VEDI ALTRE IMMAGINI
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
