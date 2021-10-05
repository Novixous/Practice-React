import { useRouter } from "next/dist/client/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
