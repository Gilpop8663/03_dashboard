import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  margin-right: 8px;
`;

const Form = styled.div``;

const SelectBox = styled.legend`
  margin-top: 4px;
  padding: 16px 35px 6px 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #939fa5;
  border-radius: 4px;
`;

const Option = styled.option``;

const Arrow = styled.span`
  margin-right: 7px;
`;

const SelectContainer = styled.div<{ click: boolean }>`
  display: flex;
  border: 1px solid #939fa5;
  background-color: ${({ click }) => (click ? '#1565C0' : 'white')};
  color: ${({ click }) => (click ? 'white' : '#323D45')};
  font-weight: 500;
  padding: 9px 12px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #2196f3;
  }
  i {
    color: ${({ click }) => (click ? 'white' : '#939fa5')};
  }
`;

const SelectTitle = styled.div`
  margin-right: 12px;
`;

const Input = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  &:checked {
    width: 18px;
    height: 18px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

interface IFormProps {
  title: string;
  data: { id: number; value: string }[];
  name: string;
  check: boolean;
}

function FormFilter({ title, data, name, check }: IFormProps) {
  const [click, setClick] = useState(false);
  const [some, setSome] = useState(['']);
  const [test, setTest] = useState([{ id: 99, value: 'str' }]);

  // const onChangeMethod = (v: IMethodProps) => { if (method.includes(v.value)) { setMethod(method.filter((e) => e !== v.value)); } else { const arr = []; arr.push(v); arr.sort((a, b) => b.id - a.id); setMethod([...method, ...arr.map((e) => e.value)]); } };

  useEffect(() => {
    if (check === true) {
      setSome(['']);
      setClick(false);
    }
  }, [check]);
  const onOpenClick = () => {
    setClick((prev) => !prev);
  };
  const onFilterTwoClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const text = e.currentTarget.value;

    setTest((old) => {
      const findIndex = data.findIndex((item) => item.value === text);
      if (test.length === 0) {
        return [{ id: findIndex, value: text }];
      } else {
        const removeIndex = test.findIndex((item) => item.value === text);
        if (removeIndex !== -1) {
          const newTest = [
            ...old.slice(0, removeIndex),
            ...old.slice(removeIndex + 1),
          ];
          const sortTest = newTest.sort((a, b) => a.id - b.id);
          return sortTest;
        }
        const newTest = [...old, { id: findIndex, value: text }];
        const sortTest = newTest.sort((a, b) => a.id - b.id);
        return sortTest;
      }
    });
  };
  console.log(test);
  const onFilterClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const text = e.currentTarget.value;
    setSome((old) => {
      if (some.length === 0) {
        return [text];
      }
      const findIndex = some.findIndex((item) => item === text);
      if (findIndex !== -1) {
        const newSome = [
          ...old.slice(0, findIndex),
          ...old.slice(findIndex + 1),
        ];
        return newSome;
      }
      const newSome = [...old, text];
      return newSome;
    });
  };
  return (
    <Conatiner>
      <Form>
        <SelectContainer click={click} onClick={onOpenClick}>
          <SelectTitle>{title}</SelectTitle>
          {some.length - 1 > 0 && (
            <SelectTitle>({some.length - 1})</SelectTitle>
          )}
          <Arrow>
            <i className="fas fa-caret-down"></i>
          </Arrow>
        </SelectContainer>
        {click && (
          <SelectBox>
            {data &&
              data.map((item) => (
                <Label key={item.value}>
                  <Input
                    type="checkbox"
                    value={item.value}
                    name={name}
                    onClick={(e) => onFilterTwoClick(e)}
                  />
                  {item.value}
                </Label>
              ))}
          </SelectBox>
        )}
      </Form>
    </Conatiner>
  );
}

export default FormFilter;
