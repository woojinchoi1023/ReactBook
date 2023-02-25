import { useEffect, useState } from 'react';

//프로젝트 내 다양한 곳에서 사용가능한 유틸 함수는 보통 src디렉터리 lib디렉터리 안에 저장

export default function usePromise(promiseCreator, deps) {
  //대기중, 완료, 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
