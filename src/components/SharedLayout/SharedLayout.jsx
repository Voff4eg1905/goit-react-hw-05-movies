import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, NavStyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavStyledLink to="/">Home</NavStyledLink>
            <NavStyledLink to="/movies">Movies</NavStyledLink>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
