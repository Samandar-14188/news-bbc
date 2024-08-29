import LayoutComponent from "../../components/layout/layout";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function Multimedia() {
  return (
    <ErrorBoundary>
      <LayoutComponent dataUrl="https://newsapi.org/v2/everything?q=multimedia&apiKey=a45b2a5a4f0a453ab4be4701a8108995" />
    </ErrorBoundary>
  );
}
