import React from 'react';
import { topicRoutes } from '../core/CRoutes.js';
import VerticalTabs from './VerticalTabs.js';

export const Topics = () => {
  return (
    <VerticalTabs
      tabs={topicRoutes} />
  );
}

export default Topics;