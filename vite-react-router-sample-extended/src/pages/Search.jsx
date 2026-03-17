import { useSearchParams, useLocation, useResolvedPath } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const resolved = useResolvedPath(location.pathname);

  return (
    <div>
      <h2>🔍 Search Page</h2>
      <p>Query param: {searchParams.get('query')}</p>
      <p>Current Path: {location.pathname}</p>
      <p>Resolved Path: {resolved.pathname}</p>
    </div>
  );
}
