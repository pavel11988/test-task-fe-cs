import { Container, Image, Text, Title } from "./ErrorBoundary.styled";

const ErrorBoundary = () => {
  return (
    <Container>
      <Title>Oops...</Title>
      <Image
        src="https://i.ibb.co/8M2THw1/error-boundary.jpg"
        alt="error-boundary"
      />
      <Text>
        An error occurred, your token may be outdated or has been changed.
      </Text>
    </Container>
  );
};

export default ErrorBoundary;
