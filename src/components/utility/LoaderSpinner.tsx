export const loaderImagesIndicator: string[] = [
  "Image 1",
  "Image 2",
  "Image 3",
];

export function LoaderSpinnerProjectImages() {
  return (
    <div className="rounded-md h-12 w-12 border-4 border-t-4 border-dark animate-spin"></div>
  );
}

export default function LoaderSpinner() {
  return (
    <div className="rounded-md h-12 w-12 border-4 border-t-4 border-dark animate-spin my-12"></div>
  );
}
