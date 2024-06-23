import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ToggleThemeButton from '@/components/custom/ToggleThemeButton'
import LocalizationButton from '@/components/custom/LocalizationButton'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { AlignJustify, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const menuList = [
  { localeKey: 'header.home', path: '/' },
  { localeKey: 'header.sharing', path: '/sharing' },
  { localeKey: 'header.contact', path: '/contact' },
]

const Link = ({ to, ...props }: { to: string } | React.ComponentProps<typeof NavLink>) => {
  const pathname = useLocation().pathname;
  const isActive = to === pathname;
  const menuLinkClassName = `${navigationMenuTriggerStyle()} cursor-pointer bg-transparent`

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NavLink to={to} className={menuLinkClassName} {...props} />
    </NavigationMenuLink>
  );
};

const NavigationItemList = (props: React.ComponentProps<typeof NavigationMenuList>) => {
  const { t } = useTranslation()
  return <NavigationMenuList {...props}>
    {
      menuList.map((item, index) => (
        <NavigationMenuItem key={index}>
          <Link to={item.path}>{t(item.localeKey)}</Link>
        </NavigationMenuItem>
      ))
    }
  </NavigationMenuList>
}

const HeaderLogo = () => { return <h6 className="font-semibold">NhuTan</h6> }

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 sticky top-0 z-10 backdrop-blur-md bg-white/60 dark:bg-black/50">
      <div className="w-[9rem] flex justify-start items-center gap-1">
        <Drawer direction="left">
          <DrawerTrigger className="sm:hidden">
            <Button size='icon' variant='ghost'><AlignJustify className='h-4 w-4' /></Button>
          </DrawerTrigger>
          <DrawerContent className='flex flex-col align-center justify-start h-full min-w-40 w-1/2 mt-24 fixed bottom-0 right-0 rounded-t-none rounded-e-[10px] items-center'>
            <DrawerHeader className='w-full flex items-center justify-center h-16'>
              <DrawerClose className='absolute left-4'>
                <Button size='icon' variant='ghost'><X className='h-4 w-4' /></Button>
              </DrawerClose>
              <HeaderLogo />
            </DrawerHeader>
            <NavigationMenu className='items-start'>
              <NavigationItemList className='flex-col' />
            </NavigationMenu>
          </DrawerContent>
        </Drawer>
        <HeaderLogo />
      </div>
      <div className="justify-between items-center hidden sm:flex">
        <NavigationMenu><NavigationItemList /></NavigationMenu>
      </div>
      <div className="w-[9rem] flex justify-end items-center gap-2">
        <ToggleThemeButton />
        <LocalizationButton />
      </div>
    </header>


  )
}

export default Header
