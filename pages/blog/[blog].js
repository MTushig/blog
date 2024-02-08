import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Blog() {
  const router = useRouter();
  const articleId = router.query.articleId; // undefined ;

  console.log(articleId, router);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleId === undefined) {
      return;
    }

    fetch(`https://dev.to/api/articles/${articleId}`)
      .then((res) => res.json())
      .then((article) => {
        setArticle(article);
      })
      .catch((error) => {
        console.log(error);
        // setError(true);
      });
  }, [articleId]);

  if (!article) {
    return <div> ...loading</div>;
  }

  return (
    <Container>
      <Header />
      <h2 className="text-4xl text-black-700">{article.title}</h2>
      <img className="mx-auto" src={article.cover_image} />
      <div
        className="content mx-auto flex flex-col justify-center items-start"
        dangerouslySetInnerHTML={{ __html: article.body_html }}
      ></div>
    </Container>
  );
}
