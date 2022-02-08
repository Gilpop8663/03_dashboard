import { refresh } from 'assets/img';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormFilter from './FormFilter';
import Toggle from './Toggle';

const FilterBox = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FilterReset = styled.div`
  font-size: 20px;
  margin-left: 16px;
  color: #2196f3;
  margin-top: 8px;
`;

const Img = styled.img`
  margin-right: 12px;
  height: 16px;
`;

const FRONTDATA = [
  { id: 0, value: '밀링' },
  { id: 1, value: '선반' },
];

const BACKDATA = [
  { id: 0, value: '알루미늄' },
  { id: 1, value: '탄소강' },
  { id: 2, value: '구리' },
  { id: 3, value: '합금강' },
  { id: 4, value: '강철' },
];

export default function AllFilter() {
  const [check, setCheck] = useState(false);
  const onClick = () => {
    setTimeout(() => {
      setCheck(true);
    }, 100);
    setTimeout(() => {
      setCheck(false);
    }, 200);
  };
  return (
    <FilterBox action="/requests" method="get">
      <FormWrapper>
        <FormFilter
          key={FRONTDATA.length}
          title="가공방식"
          name="method"
          data={FRONTDATA}
          check={check}
        />
        <FormFilter
          key={BACKDATA.length}
          title="재료"
          name="material"
          data={BACKDATA}
          check={check}
        />
        <FilterReset onClick={onClick}>
          <Img src={refresh} />
          필터링 리셋
        </FilterReset>
      </FormWrapper>
      <Toggle />
    </FilterBox>
  );
}
