import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  min-width: 328px;
  width: 100%;

  @media (min-width: 480px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 50px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);

  position: absolute;
  top: 0%;
  left: 16px;
  color: ${props => {
    if (props?.valid === undefined) return '#7e7e7e';
    return '#CB3D40';
  }};
  transform: translateY(-50%);
  background-color: #f8f8f8;
`;

export const Input = styled(Field)`
  font-size: 16px;
  line-height: calc(26 / 16);

  min-width: 328px;
  width: 100%;
  height: 54px;
  background-color: #f8f8f8;
  border: ${props => {
    if (props?.valid === undefined) return '1px solid #d0cfcf';
    return '1px solid #CB3D40';
  }};
  border-radius: 4px;
  padding-left: 16px;
`;

export const MessageError = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  position: absolute;
  left: 16px;
  color: ${props => {
    if (props?.valid === undefined) return '#7e7e7e';
    return '#CB3D40';
  }};
`;

export const RadioGroup = styled.div`
  text-align: left;
  margin-bottom: 47px;
`;

export const RadioLabel = styled.label`
  display: block;
  margin-bottom: 7px;
`;

export const RadioTitle = styled.p`
  margin-bottom: 11px;
`;

export const RadioText = styled.span`
  margin-left: 12px;
`;

export const InputImg = styled(Field)`
  display: none;
`;

export const LabelImgs = styled.label`
  font-size: 16px;
  line-height: calc(26 / 16);

  position: relative;
  display: flex;
  width: 100%;
  min-width: 328px;
  height: 54px;
  border-radius: 4px;
  padding-left: 16px;
  margin-bottom: 50px;
  padding: 0px;
`;

export const UploadImgs = styled.span`
  font-size: 16px;
  line-height: calc(26 / 16);

  display: flex;
  align-items: center;
  text-align: center;

  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  height: 100%;
  padding: 14px;
`;
export const UploadPhoto = styled.span`
  line-height: calc(26 / 16);

  display: flex;
  align-items: center;
  text-align: center;

  color: #7e7e7e;
  border-top: 1px solid #d0cfcf;
  border-bottom: 1px solid #d0cfcf;
  border-right: 1px solid #d0cfcf;
  border-radius: 0px 4px 4px 0px;
  padding: 14px;
  width: 100%;
`;
