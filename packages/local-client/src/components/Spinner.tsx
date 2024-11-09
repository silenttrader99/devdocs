import { bouncy } from "ldrs";

bouncy.register();

const Spinner: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
    </div>
  );
};

export default Spinner;
