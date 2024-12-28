"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavItem {
    name: string;
    id: number
    subMenu?: SubMenuItem[];
}

interface SubMenuItem {
    name: string;
    route?: string;
}

const navBarList: NavItem[] = [
    {
        id: 1, name: 'Report forms',
        subMenu: [
            { name: 'Production', route: '/dashboard/forms/production' },
            { name: 'Labels', route: '/dashboard/forms/reqLabels' },
            { name: 'Documents', route: '/dashboard/forms/reqDcts' },
            { name: 'Missing Accessories', route: '/dashboard/forms/production/missing' },
            { name: 'Reception', route: '/dashboard/forms/reception' }]
    },
    {
        id: 2, name: 'Tables',
        subMenu: [
            { name: 'Productivity', route: '/dashboard/tables/production' },
            { name: 'Missing Accessories', route: '/dashboard/tables/missing' },
            { name: 'Labels', route: '/dashboard/tables/labels' },
            { name: 'Documents', route: '/dashboard/tables/documents' },
            { name: 'Products pending', route: '/dashboard/tables/pendingCheck' }]
    },
    {
        id: 3, name: 'Indicators',
        subMenu: [
            { name: 'Service factor', route: '/' },
            { name: 'Days of process', route: '/' }]
    },
];

function NavBar() {
    const router = useRouter();

    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block z-50">
                            <div className="flex space-x-4">
                                {navBarList.map((item) => (
                                    <Menu as="div" key={item.id} className="flex items-center">
                                        <MenuButton className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                                            {item.name}
                                        </MenuButton>

                                        {item.subMenu && (
                                            <MenuItems
                                                transition
                                                className={classNames(
                                                    'absolute top-[65px] bg-gray-800 text-gray-300 font-medium rounded-md pl-2 pr-3 py-2 text-base',
                                                    {
                                                        'left-[70px]': item.id === 1,
                                                        'left-[190px]': item.id === 2,
                                                        'left-[270px]': item.id === 3,
                                                    }
                                                )}
                                            >
                                                {item.subMenu.map((subItem, index) => (
                                                    <MenuItem
                                                        key={index}
                                                        as="div"
                                                        className="mb-2 hover:text-white hover:cursor-pointer"
                                                        onClick={() => subItem.route && router.push(subItem.route)}
                                                    >
                                                        {subItem.name}
                                                    </MenuItem>
                                                ))}
                                            </MenuItems>
                                        )}
                                    </Menu>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <div className="size-8 bg-gray-300 rounded-full"></div>
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                                        Sign out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <ul>
                        {navBarList.map((item) => (
                            <li key={item.name} className="bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

export default NavBar;
