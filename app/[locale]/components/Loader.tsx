// Loader en CSS pur (voir .loader_container dans globals.css) : il s'affiche dès
// l'arrivée du HTML et s'en va tout seul, sans attendre le chargement du JavaScript.
const Loader = () => {
  return (
    <div
      aria-hidden="true"
      className="loader_container fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white z-50"
    >
      <video
        src="/RRS_logo_anim.mp4"
        autoPlay
        muted
        playsInline
        className="w-1/3 h-1/3 object-contain"
      />
    </div>
  );
};

export default Loader;
