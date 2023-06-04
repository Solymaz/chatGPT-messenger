import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-semibold mb-10">ChatGbT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6 " />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2 flex flex-col">
            <button className="infoText infoButton">
              &ldquo;Explain quantum computing in simple terms&ldquo;→
            </button>
            <button className="infoText infoButton">
              &ldquo;Got any creative ideas for a 10 year old’s
              birthday?&ldquo;→
            </button>
            <button className="infoText infoButton">
              &ldquo;How do I make an HTTP request in Javascript?&ldquo;→
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6 " />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
