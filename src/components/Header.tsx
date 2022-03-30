import { useState, useEffect } from 'react';
import { GRAY_ARROW, WHITE_ARROW, REFRESH } from '../assets/images/index';
import HeaderStyle from 'assets/styles/HeaderStyle';
import { Method, Material, Toggle } from 'components';

interface IProps {
  params: {
    method?: string | undefined;
    material?: string | undefined;
    status?: string | undefined;
  };
  setParams: React.Dispatch<
    React.SetStateAction<{
      method?: string | undefined;
      material?: string | undefined;
      status?: string | undefined;
    }>
  >;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const {
  Title,
  SubTitle,
  DropDownWrapper,
  InnerFlex,
  RightInnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  DropDownCount,
  CheckBoxContainer,
  FilterReset,
  CheckBoxWrapper,
  CheckBox,
  Img,
  Label,
} = HeaderStyle;

export default function Header({ params, setParams, setShowMenu }: IProps) {
  const [showMethod, setShowMethod] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [method, setMethod] = useState<number[]>([]);
  const [material, setMaterial] = useState<number[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);

  const toggleClick = () => {
    setIsClick(!isClick);
  };

  const methodClick = () => {
    setShowMethod((curr) => !curr);
    if (showMaterial) {
      setShowMaterial(false);
    }
  };

  const materialClick = () => {
    setShowMaterial((curr) => !curr);
    if (showMethod) {
      setShowMethod(false);
    }
  };

  const isRefreshClick = () => {
    setMethod([]);
    setMaterial([]);
    setShowMaterial(false);
    setShowMethod(false);
  };

  const disabledShow = () => {
    setShowMaterial(false);
    setShowMethod(false);
  };

  function onChangeMethod(i: number) {
    if (method.includes(i)) {
      const arr = method.filter((e) => e !== i);
      setMethod(arr);
    } else {
      const arr = [...method];
      arr.push(i);
      setMethod(arr);
    }
  }

  function onChangeMaterial(i: number) {
    if (material.includes(i)) {
      const arr = material.filter((e) => e !== i);
      setMaterial(arr);
    } else {
      const arr = [...material];
      arr.push(i);
      setMaterial(arr);
    }
  }

  useEffect(() => {
    if (method.length) {
      const temp = [];
      for (let el of method) {
        temp.push(Method[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        method: param,
      });
    } else {
      delete params.method;
      setParams({ ...params });
    }
  }, [method]);

  useEffect(() => {
    if (material.length) {
      const temp = [];
      for (let el of material) {
        temp.push(Material[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        material: param,
      });
    } else {
      delete params.material;
      setParams({ ...params });
    }
  }, [material]);

  useEffect(() => {
    if (isClick) {
      setParams({
        ...params,
        status: '상담중',
      });
    } else {
      delete params.status;
      setParams({ ...params });
    }
  }, [isClick]);

  return (
    <>
      <Title>들어온 요청</Title>
      <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
      <DropDownWrapper>
        <InnerFlex>
          <BigDropDown Back={showMethod} onClick={methodClick}>
            <DropDownTitle>
              가공방식
              {method.length > 0 && (
                <DropDownCount>({method.length})</DropDownCount>
              )}
            </DropDownTitle>
            <Arrow
              src={showMethod ? WHITE_ARROW : GRAY_ARROW}
              alt="드롭 다운 화살표"
            />
          </BigDropDown>
          <SmallDropDown Back={showMaterial} onClick={materialClick}>
            <DropDownTitle>
              재료
              {material.length > 0 && (
                <DropDownCount>({material.length})</DropDownCount>
              )}
            </DropDownTitle>

            <Arrow
              src={showMaterial ? WHITE_ARROW : GRAY_ARROW}
              alt="드롭 다운 화살표"
            />
          </SmallDropDown>
          {(material.length > 0 || method.length > 0) && (
            <FilterReset onClick={isRefreshClick}>
              <Img src={REFRESH} />
              필터링 리셋
            </FilterReset>
          )}
        </InnerFlex>
        <RightInnerFlex>
          <Toggle toggleClick={toggleClick} />
        </RightInnerFlex>
      </DropDownWrapper>
      {showMethod && (
        <CheckBoxContainer onMouseLeave={disabledShow}>
          {Method.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id={`scales${e}`}
                value={e}
                name="scales"
                defaultChecked={method.includes(i)}
                onClick={() => onChangeMethod(i)}
              />
              <Label htmlFor={`scales${e}`}>{e}</Label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxContainer>
      )}
      {showMaterial && (
        <CheckBoxContainer
          style={{ marginLeft: '105px' }}
          onMouseLeave={disabledShow}
        >
          {Material.map((e, i) => (
            <CheckBoxWrapper key={i}>
              <CheckBox
                type="checkbox"
                id={`scales${e}`}
                name="scales"
                defaultChecked={material.includes(i)}
                onClick={() => {
                  onChangeMaterial(i);
                }}
              />
              <Label htmlFor={`scales${e}`}>{e}</Label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxContainer>
      )}
    </>
  );
}
