import { buttonVariants } from "@/components/ui/button";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-20 p-4">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite, React, Shadcn-ui minimal starter
      </h1>
      <a
        href="https://github.com/moinulmoin/vite-react-tailwind-starter"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
      >
        ⭐️ on GitHub
      </a>
      <div className="w-full max-w-4xl">
        <iframe
          src="https://checkout.plexypay.com/checkout/pl/pl_019b4a860eb77a3b8a600bbdaca8f887"
          className="w-full h-[600px] border rounded-lg shadow-lg"
          title="Plexy Pay Checkout"
          allow="payment"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </main>
  );
}

export default App;
