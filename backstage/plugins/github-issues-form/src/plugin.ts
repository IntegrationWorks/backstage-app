import { createPlugin, createRouteRef, createRoutableExtension } from '@backstage/core-plugin-api';
import { IssueForm } from './components/IssueForm';

export const rootRouteRef = createRouteRef({
  id: 'githubIssuesFormPlugin',
});

export const githubIssuesFormPlugin = createPlugin({
  id: 'githubIssuesFormPlugin',
  routes: {
    root: rootRouteRef,
  },
});

export const GithubIssuesFormPage = githubIssuesFormPlugin.provide(
  createRoutableExtension({
    name: 'GithubIssuesFormPage',
    component: () => Promise.resolve(IssueForm),
    mountPoint: rootRouteRef,
  }),
);
