import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "#" },
  { name: "SOBRE", href: "#sobre" },
  { name: "PROJETOS", href: "#" },
  { name: "CONTATOS", href: "#" },
];

export default function index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="inset-x-0 top-0 z-50 shadow-xs fixed bg-[#F8F9FA]  dark:bg-[#212529]">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-8 lg:px-30"
        >
          <h2 className="text-2xl font-semibold ">KLEBER MATOS</h2>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-[#F8F9FA]"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 font-semibold">
            <a href="#">HOME</a>
            <a href="#sobre">SOBRE</a>
            <a href="#projeto">PROJETO</a>
            <a href="#contato">CONTATO</a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5"></a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    By Kleber Matos with React + TailwindCSS
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
