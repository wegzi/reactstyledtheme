import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../Components/ProgressBar';
import { Icon, Label } from '../../Components/Typograph';
import theduck from '../../assets/images/theduck.png';
import Color from 'color';
import ChevronRight from '../../assets/solid/ChevronRight';

export default function Profile() {
  return (
    <>
      <div>
        <MainContainer className='rounded-b-xl shadow-xl flex'>
          <UserInfo>
            <div>
              <AvatarBubble className='mx-3 shadow-xl'>
                <img src={theduck} alt='avatar' />
              </AvatarBubble>
            </div>
            <div className='w-full pr-2'>
              <Label text='Zigwe' size='1.5' semiBold />
              <div className='flex justify-between leading-none'>
                <Label text='Level 99' muted />
                <Label text='9872xp to go' size='0.75' muted />
              </div>
              <ProgressBar value='50' className='mb-1' />
            </div>
          </UserInfo>
        </MainContainer>
      </div>
      <div className='pt-12 px-2'>
        <div className='grid gap-4 grid-cols-3'>
          <MetricCard value={'12k'} label='Something' />
          <MetricCard value={'12k'} label='Something' />
          <MetricCard value={'12k'} label='Something' />
        </div>
        <div className='mt-4'>
          <div className='w-full m-2 text-center'>
            <Label text='Settings' size='1.2' semiBold />
          </div>
          <ul className='shadow rounded'>
            <SettingsItem
              className='p-3 rounded'
              icon='user-circle'
              label='Account'
            />
            <SettingsItem
              className='p-3 rounded'
              icon='bell'
              label='Notifications'
            />
            <SettingsItem
              className='p-3 rounded'
              icon='eye'
              label='Apparence'
            />
            <SettingsItem
              className='p-3 rounded'
              icon='lock-closed'
              label='Privacy & Security'
            />
            <SettingsItem
              className='p-3 rounded'
              icon='light-bulb'
              label='Help and Support'
            />
            <SettingsItem
              className='p-3 rounded'
              icon='information-circle'
              label='About'
            />
          </ul>
        </div>
      </div>
    </>
  );
}

const SettingsItem = ({ icon, label }) => (
  <ListItem className='p-3 flex justify-between'>
    <div className='d-flex'>
      <Icon icon={icon} className='inline mr-2' style={{ width: '19px' }} />
      <Label text={label} semiBold />
    </div>
    <ChevronRight style={{ width: '19px' }} />
  </ListItem>
);
const MetricCard = ({ value, label }) => (
  <StyledMetricCard className='rounded shadow p-2'>
    <Label text={value} size='1.2' semiBold />
    <Label text={label} size='.875' className='block' />
  </StyledMetricCard>
);

const ListItem = styled.div`
  background-color: ${({ theme }) => theme.white};
  line-height: 1.2;
  font-weight: 600;
  cursor: pointer;
  border-top: solid 1px ${({ theme }) => theme.light};
  &:first-child {
    border-top: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: ${({ theme }) => Color(theme.white).darken(0.05).hex()};
  }
`;
const StyledMetricCard = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;
const UserInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  color: #fff;
`;
const AvatarBubble = styled.div`
  height: 130px;
  width: 130px;
  overflow: hidden;
  border-radius: 100%;
  transform: translateY(30%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 25px -5px #0000001a, 0 10px 10px -5px #0000000a,
    0 0px 1px 2px #0000001f;
  background: #ff2768;
  background: linear-gradient(to bottom left, #ff2768, #6b2d70);
`;
const MainContainer = styled.div`
  background: #ff2768;
  background: -webkit-linear-gradient(bottom right, #ff2768, #6b2d70);
  background: -moz-linear-gradient(bottom right, #ff2768, #6b2d70);
  background: linear-gradient(to top left, #ff2768, #6b2d70);
  height: 160px;
`;
