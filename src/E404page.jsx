import { Link } from "react-router-dom";
export const E404page = () => {
  return (
    <div>
      <h1>ページが見つかりません。</h1>
      <br />

      <br />
      <Link to="/">トップに戻る</Link>
    </div>
  );
};
