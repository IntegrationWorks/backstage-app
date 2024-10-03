import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import { useApp } from '@backstage/core-plugin-api';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  useSidebarOpenState,
  Link,
  GroupIcon,
  SidebarSubmenu,
  SidebarSubmenuItem,
} from '@backstage/core-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal />
      </SidebarGroup>
      <SidebarDivider />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* Global nav, not org-specific */}
        <SidebarItem icon={HomeIcon} to="catalog" text="Home">
        <SidebarSubmenu title="Catalog">
          <SidebarSubmenuItem
            title="Domains"
            to="catalog?filters[kind]=domain"
            icon={useApp().getSystemIcon('kind:domain')}
          />
          <SidebarSubmenuItem
            title="Systems"
            to="catalog?filters[kind]=system"
            icon={useApp().getSystemIcon('kind:system')}
          />
          <SidebarSubmenuItem
            title="Components"
            to="catalog?filters[kind]=component"
            icon={useApp().getSystemIcon('kind:component')}
          />
          <SidebarSubmenuItem
            title="Templates"
            to="catalog?filters[kind]=template"
            icon={CreateComponentIcon}
          />
          <SidebarDivider />
          <SidebarSubmenuItem
            title="Resources"
            to="catalog?filters[kind]=resource"
            icon={useApp().getSystemIcon('kind:resource')}
          />
          <SidebarDivider />
          <SidebarSubmenuItem
            title="Groups"
            to="catalog?filters[kind]=group"
            icon={useApp().getSystemIcon('kind:group')}
          />
          <SidebarSubmenuItem
            title="Users"
            to="catalog?filters[kind]=user"
            icon={useApp().getSystemIcon('kind:user')}
          />
          <SidebarDivider />
          <SidebarSubmenuItem
            title="Documentation"
            to="docs/docs/default/component/backstage-docs"
            icon={LibraryBooks}
          />
        </SidebarSubmenu>
      </SidebarItem>
        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
        {/* End global nav */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          {/* Items in this group will be scrollable if they run out of space */}
        </SidebarScrollWrapper>
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <SidebarGroup
        label="Settings"
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        <SidebarSettings />
      </SidebarGroup>
    </Sidebar>
    {children}
  </SidebarPage>
);
