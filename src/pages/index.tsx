import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeRedirect() {
  const to = useBaseUrl('/Home');
  return <Redirect to={to} />;
}
