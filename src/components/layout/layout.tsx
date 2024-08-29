import React, { useState } from "react";
import { Layout, Menu, theme, Skeleton, Card } from "antd";
import useClient from "../../server";
import { Typography } from "antd";
import { Link } from "react-router-dom";

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface DataUrlProps {
  dataUrl: string;
}

const header = [
  { key: "1", label: "Home", path: "/" },
  { key: "2", label: "Sport", path: "/sport" },
  { key: "3", label: "Multimedia", path: "/multimedia" },
];

const { Header, Content, Footer } = Layout;

const items = header.map(({ key, label, path }) => ({
  key,
  label: <Link to={path}>{label}</Link>,
}));

const LayoutComponents: React.FC<DataUrlProps> = ({ dataUrl }) => {
  const [selectedCard, setselectCard] = useState<Article | null>(null);
  const { Title, Paragraph } = Typography;
  const { loading, error, data } = useClient<ApiResponse>(dataUrl);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <p>Error: {(error as any).message}</p>;
  }

  const handleClick = (article: Article) => {
    setselectCard(article);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Title level={4} style={{ color: "#001529", paddingTop: 10 }}>
          So'ngi Yangiliklar
        </Title>
        <div className="context-wrapper">
          <div
            className="scrollable-container"
            style={{
              maxWidth: 785,
              height: 534,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              position: "sticky",
              overflowY: "scroll",
            }}
          >
            {data &&
              data.articles.map((article, i) => (
                <Card key={i} onClick={() => handleClick(article)}>
                  <Title
                    level={4}
                    style={{
                      color: "darkblue",
                      cursor: "pointer",
                    }}
                    className="custom-title"
                  >
                    {article.title}
                  </Title>
                  <Paragraph
                    style={{ color: "cornflowerblue", cursor: "pointer" }}
                    className="custom-paragraf"
                  >
                    {article.description}
                  </Paragraph>
                </Card>
              ))}
          </div>

          {selectedCard ? (
            <div
              style={{
                marginTop: 20,
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Title level={4}>{selectedCard.title}</Title>
              <img
                src={selectedCard.urlToImage}
                alt={selectedCard.title}
                style={{ width: "100%", borderRadius: borderRadiusLG }}
              />
              <Paragraph>{selectedCard.content}</Paragraph>
              <Paragraph>{selectedCard.publishedAt}</Paragraph>
              <Paragraph>{selectedCard.author}</Paragraph>
              <a
                href={selectedCard.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Portfolio {new Date().getFullYear()} Nabiyev Samandar
      </Footer>
    </Layout>
  );
};

export default LayoutComponents;
