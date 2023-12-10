import { ScaleLoader } from "react-spinners";

/**
 * Loading component displays a loading spinner with a backdrop.
 *
 * @component
 * @example
 * <Loading />
 */

function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <ScaleLoader color={"#36d7b7"} data-testid="loading-spinner" />
      <div className="bg-black bg-opacity-50" data-testid="loading-backdrop" />
    </div>
  );
}

export default Loading;
