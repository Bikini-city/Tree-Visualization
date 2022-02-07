import React from 'react';
import { action } from '@storybook/addon-actions';
import MarkerModal from '.';

export default {
  title: 'Component/MarkerModal',
  component: MarkerModal,
};

const DUMMY_IMAGE = 'https://avatars.githubusercontent.com/u/26402298?v=4';
const closeModalAction = action('click marker');

export const markerModal = () => <MarkerModal imgSrc={DUMMY_IMAGE} closeModal={closeModalAction} />;
