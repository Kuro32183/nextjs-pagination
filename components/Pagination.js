import Router from "next/router";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function Paginate(number) {
    Router.push(`/?page=${number}`);
    paginate(number);
  }
  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => {
            let active = number === currentPage ? "active" : "";
            return (
              <li
                key={number}
                className={`page-item ${active}`}
                onClick={() => Paginate(number)}
              >
                <a className="page-link">{number}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <style jsx>{`
        .pagination {
          display: flex;
          height: 30px;
        }
        .page-item {
          border: 1px solid #d7d2cd;
          width: 30px;
          cursor: pointer;
          text-align: center;
        }
        .page-link {
          display: block;
          line-height: 30px;
        }
        .active {
          background-color: #666666;
        }
      `}</style>
    </>
  );
}
