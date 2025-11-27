function FeatureCard({ icon, title, desc, alt }) {
  return (
    <>
      <div className="feature flex flex-col gap-5 mb-6">
        <img
          className="w-15 h-15 p-2 bg-white rounded-lg"
          src={icon}
          alt={alt}
        />
        <h2 className="tp-3 text-neutral-900">{title}</h2>
        <p className="tp-6 text-neutral-800">{desc}</p>
      </div>
    </>
  );
}

export default FeatureCard;
