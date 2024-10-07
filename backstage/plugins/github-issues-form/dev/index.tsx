import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { githubIssuesFormPlugin, GithubIssuesFormPage } from '../src/plugin';

createDevApp()
  .registerPlugin(githubIssuesFormPlugin)
  .addPage({
    element: <GithubIssuesFormPage />,
    title: 'Root Page',
    path: '/github-issues-form',
  })
  .render();
