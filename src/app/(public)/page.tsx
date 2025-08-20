
export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/main-bg.png')" }}
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-green-200 text-4xl md:text-5xl font-bold leading-tight mb-6 uppercase">
            evalúa mejor.
            <br />
            contrata con precisión.
          </h1>

          <p className="text-beige text-xl md:text-xl font-normal mb-8 max-w-xl uppercase">
            la forma más inteligente de encontrar candidatos que encajen con tu
            empresa.
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white md:inline-flex items-center justify-center border-0 rounded-[calc(0.45rem-0.2rem)] p-4 h-full font-medium cursor-pointer transition-colors duration-300">
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
}
