"use client"
import { Provider } from 'react-redux'
import Layout from "../../layout/layout";
import { store } from '../../reduxtoolkit/store';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <Layout>

    <Provider store={store}>
      {children}
    </Provider>

  </Layout>;
}
