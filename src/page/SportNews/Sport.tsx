import React from "react";
import LayoutComponent from "../../components/layout/layout";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function Sport() {
  return (
    <ErrorBoundary>
      <LayoutComponent dataUrl="https://newsapi.org/v2/everything?q=sport&apiKey=a45b2a5a4f0a453ab4be4701a8108995" />
    </ErrorBoundary>
  );
}
