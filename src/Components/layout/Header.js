import Color from 'color';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../assets/outline/Menu';
import XIcon from '../../assets/outline/X';
import { ThemeContext } from '../../context/ThemeState';
import { Button } from '../Button';
import Collapse from '../Collapse';

const MenuContainer = styled.div`
  max-height: 50vh;
  background-color: ${({ theme }) => theme.collapseMenu.background};
  width: 100vw;
  margin-bottom: 3px;
`;
const MenuItem = styled.li`
  background-color: ${({ theme }) => theme.ultralight};
  line-height: 1.2;
  margin-bottom: 8px;
  font-weight: 600;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.ultralight).darken(0.05).hex()};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  ${'' /* position: fixed; */}
  font-family: 'Prata', serif;
  top: 0;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.primary}a3;
  ${'' /* color: ${(props) => props.theme.white}; */}
  display: flex;
  align-items: center;
  padding: 1rem;
  padding: 1rem;
  ${'' /* font-size: 1.5rem; */}
  font-weight: 600;
  font-style: italic;
  justify-content: space-between;
`;
const Emogi = styled.span`
  font-family: 'Cabin', serif;
`;

export function Header() {
  const { switchTheme, isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  window.Color = Color;
  return (
    <>
      <HeaderContainer>
        <MenuToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <div>
          Zigzera <Emogi>¯\_(ツ)_/¯</Emogi>
        </div>
        <Button onClick={() => switchTheme()}>
          {isDark ? 'Light' : 'Dark'}
        </Button>
      </HeaderContainer>
      <CollapseMenu isOpen={isOpen} />
    </>
  );
}

const CollapseMenu = ({ isOpen }) => (
  <div className='absolute shadow-xl rounded-b-lg' style={{ zIndex: '900' }}>
    <Collapse isOpen={isOpen}>
      <MenuContainer className='rounded-b-lg p-2 pb-8'>
        <ul>
          <MenuItem className='p-3 rounded'>Account</MenuItem>
          <MenuItem className='p-3 rounded'>Notifications</MenuItem>
          <MenuItem className='p-3 rounded'>Apparence</MenuItem>
          <MenuItem className='p-3 rounded'>Privacy & Security</MenuItem>
          <MenuItem className='p-3 rounded'>Help and Suppoert</MenuItem>
          <MenuItem className='p-3 rounded'>About</MenuItem>
        </ul>
      </MenuContainer>
    </Collapse>
  </div>
);
const MenuToggler = ({ isOpen, onClick }) => (
  <>
    <div className='h-full cursor-pointer' onClick={onClick}>
      {isOpen ? <XIcon className='h-full' /> : <Menu className='h-full' />}
    </div>
  </>
);
