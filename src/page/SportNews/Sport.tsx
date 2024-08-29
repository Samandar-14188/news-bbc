import LayoutComponent from "../../components/layout/layout";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function Sport() {
  return (
    <ErrorBoundary>
      <LayoutComponent dataUrl="https://newsapi.org/v2/everything?q=sport&apiKey=a45b2a5a4f0a453ab4be4701a8108995" />
    </ErrorBoundary>
  );
}
