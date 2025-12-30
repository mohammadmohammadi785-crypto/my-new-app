export default function loading() {
  return (
    <div className="flex absolute z-20 top-0 flex-col right-0 justify-center w-full h-screen items-center">
      <h1 className="text-2xl">loading....</h1>
      <div className="animate-spin w-15 h-15 border-dotted border-white border-8 rounded-full"></div>
    </div>
  );
}
