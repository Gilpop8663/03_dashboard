import { useEffect, useState } from 'react';
import { Card, Menu } from '../../components';
import { DashboardStyle } from 'assets/styles';
import Nav from '../../components/Nav';
import Header from 'components/Header';
import { NoResults } from 'components/NoResults';
import { useQuery } from 'react-query';
import { getData } from 'utils/api';
import { IRequestInfoProps } from 'utils/interface';

const { Container, Grid } = DashboardStyle;

export default function Dashboard() {
  const [refetch, setRefetch] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [params, setParams] = useState<{
    method?: string;
    material?: string;
    status?: string;
  }>({});

  const { data, isLoading } = useQuery(
    'query',
    () => getData(params.method, params.material, params.status),
    { refetchInterval: refetch && 10 }
  );

  useEffect(() => {
    setRefetch(true);
    setTimeout(() => {
      setRefetch(false);
    }, 100);
  }, [params]);

  return (
    <>
      <Nav />
      <Container>
        <Header
          params={params}
          setParams={setParams}
          setShowMenu={setShowMenu}
        />
        {!isLoading && (
          <Grid>
            {data?.map((data: IRequestInfoProps) => (
              <Card key={data.id} data={data} />
            ))}
          </Grid>
        )}
        {!isLoading && !data.length && <NoResults />}
        {showMenu && <Menu />}
      </Container>
    </>
  );
}
