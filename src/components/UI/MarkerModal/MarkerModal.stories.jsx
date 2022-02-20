import React from 'react';
import { action } from '@storybook/addon-actions';
import { dataMockup } from '../../../__mocks__/data';
import MarkerModal from '.';

export default {
  title: 'Component/MarkerModal',
  component: MarkerModal,
};

const closeModalAction = action('click marker');

export const markerModal = () => <MarkerModal data={dataMockup} closeModal={closeModalAction} />;
