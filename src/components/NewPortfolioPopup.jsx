const NewPortfolioPopup = () => {
  return (
    <div className="fixed bottom-0 m-[0.5rem] z-[70] sm:top-[9rem] md:top-[5rem] sm:right-0 sm:m-0 sm:bottom-auto sm:absolute">
      <div className="w-[95vw] sm:w-[480px]">
        <div className="flex justify-center items-center w-full bg-titleColorDark rounded-md px-[0.75rem] py-[0.8rem] ring-4 ring-titleColor sm:py-[1rem]">
          <div className="flex justify-between items-center w-full bg-transparent">
            <p className="text-bodyColor/70 tracking-wider text-smallerFontSize font-semiBolded bg-transparent sm:text-normalFontSize">
              Check out my New Portfolio
            </p>
            <a
              href="https://pgitonga.vercel.app"
              className="flex gap-[0.25rem] px-[1.5rem] py-[0.5rem] rounded-full max-w-fit bg-bodyColor ring-2 ring-containerColor text-titleColor/70 font-mediumWeight hover:text-titleColor/90 hover:ring-4 truncate sm:px-[2rem] sm:py-[0.75rem]"
            >
              <span className="tracking-wider">Visit</span>
              <span className="hidden tracking-wider sm:block">Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolioPopup;
