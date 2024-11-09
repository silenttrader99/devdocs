import { useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
  error: string;
}

const html = `
<html>
 <head>
  <style>html {background-color: white; }</style>
 </head>
 <body>
  <div id= "root"></div>
  <script>
    const handleError = (err) => {
      const root = document.querySelector('#root');
        root.innerHTML = '<div>' + err + '</div>';
        console.error(err);
    }

    window.addEventListener('error', (event) => {
    event.preventDefault();
    handleError(event.error.message);
    });

    window.addEventListener('message', (event) => { 
      try {
        eval(event.data);
      } catch (err) {
        handleError(err);
      }
    }, false);
  </script>
 </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, error }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="relative h-full w-full">
      <iframe
        srcDoc={html}
        sandbox="allow-scripts allow-modals"
        ref={iframe}
        height="100%"
        title="oreview"
        className="h-full w-full border border-gray-300 p-1"
      />
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 p-2 text-white">
          {error}
        </div>
      )}
    </div>
  );
};

export default Preview;
