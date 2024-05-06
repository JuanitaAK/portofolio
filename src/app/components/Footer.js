export default function NavBar() {
  const year = new Date().getFullYear();
  return (
    <footer className=" py-6 font-lato text-center text-sm text-gray-800 m-auto ">
      <span className="font-bold mr-2 mb-5">
        Created by JuanitaAK with Next.js, and Tailwind.
      </span>
      &copy; {year} All Rights Reserved
    </footer>
  );
}
