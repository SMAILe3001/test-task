import { Formik, Field } from 'formik';
import { number, object, string } from 'yup';
import Button from 'components/Button/Button';
import {
  RadioGroup,
  FormStyle,
  Input,
  Label,
  MessageError,
  Text,
  RadioLabel,
  RadioTitle,
  RadioText,
  InputImg,
  LabelImgs,
  UploadImgs,
  UploadPhoto,
} from './WorkingPOST.styled';
import { useEffect, useState } from 'react';
import { addUserCard, fetchPositions, fetchToken } from 'servises/servise';
import UserSucces from 'components/UserSucces/UserSucces';

const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let schema = object({
  name: string()
    .required('Please enter a name')
    .min(2, 'Name must be more then 1 character')
    .max(60, 'Name must be less then 60 characters'),
  email: string()
    .required('Enter your email')
    .email('Invalid email format')
    .matches(emailRegExp, 'Email is not valid'),
  phone: string()
    .required('Enter your phone')
    .matches(phoneRegExp, '+380XXXXXXXXX'),
  position: number().required('Select your position'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position: 1,
};

const WorkingPOST = ({ refUse }) => {
  const [fileName, setFileName] = useState(null);
  const [imagesObject, setImagesObject] = useState(null);
  const [addNewUser, setAddNewUser] = useState(false);
  const [positionList, setPositionList] = useState([]);

  useEffect(() => {
    if (positionList?.length) return;

    async function receivingPosition() {
      const getPosition = await fetchPositions();
      setPositionList(getPosition.positions);
    }
    receivingPosition();
  }, [positionList]);

  const requestCompleted = bull => {
    setAddNewUser(bull);
    setTimeout(() => {
      refUse.current.scrollIntoView({ behavior: 'smooth' });
      setAddNewUser(prev => !prev);
    }, 1500);
  };

  const images = e => {
    if (e.target.files.length) setImagesObject(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handelSubmit = async (values, { resetForm }) => {
    const getToken = await fetchToken();
    const TOKEN = getToken.token;

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('position_id', values.position);
    formData.append('photo', imagesObject);

    const suxesOk = await addUserCard(formData, TOKEN);
    console.log(suxesOk);
    requestCompleted(suxesOk.success);
    setFileName(null);
    resetForm();
  };

  return (
    <>
      {addNewUser ? (
        <UserSucces />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handelSubmit}
        >
          {({ errors, values, touched }) => (
            <FormStyle>
              <Label>
                {values.name && (
                  <Text valid={touched.name && errors.name}>Your name</Text>
                )}
                <Input
                  valid={touched.name && errors.name}
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
                <MessageError
                  valid={touched.name && errors.name}
                  name="name"
                  component="div"
                />
              </Label>
              <Label>
                {values.email && (
                  <Text valid={touched.email && errors.email}>Email</Text>
                )}
                <Input
                  valid={touched.email && errors.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <MessageError
                  valid={touched.email && errors.email}
                  name="email"
                  component="div"
                />
              </Label>
              <Label>
                {values.phone && (
                  <Text valid={touched.phone && errors.phone}>Phone</Text>
                )}
                <Input
                  valid={touched.phone && errors.phone}
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                />
                <MessageError
                  valid={touched.phone && errors.phone}
                  name="phone"
                  component="div"
                />
              </Label>
              {/* <RadioGroup>
                <RadioTitle>Select your position</RadioTitle>

                {positionList.map(({ id, name }) => (
                  <RadioLabel key={id}>
                    <Field type="radio" name="position" value={id} />
                    <RadioText>{name}</RadioText>
                  </RadioLabel>
                ))}
              </RadioGroup> */}

              <RadioGroup>
                <RadioTitle>Select your position</RadioTitle>
                <RadioLabel>
                  <Field type="radio" name="position" value="1" checked />
                  <RadioText>Lawyer</RadioText>
                </RadioLabel>
                <RadioLabel>
                  <Field type="radio" name="position" value="2" />
                  <RadioText>Content manager</RadioText>
                </RadioLabel>
                <RadioLabel>
                  <Field type="radio" name="position" value="3" />
                  <RadioText>Security</RadioText>
                </RadioLabel>
                <RadioLabel>
                  <Field type="radio" name="position" value="4" />
                  <RadioText>Designer</RadioText>
                </RadioLabel>
              </RadioGroup>

              <LabelImgs>
                <UploadImgs>Upload</UploadImgs>
                <UploadPhoto>
                  {fileName ? fileName : 'Upload your photo'}
                </UploadPhoto>
                <InputImg
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={images}
                />
              </LabelImgs>
              <Button
                disabled={Object.keys(errors).length !== 0 || !fileName}
                type="submit"
              >
                Sign up
              </Button>
            </FormStyle>
          )}
        </Formik>
      )}
    </>
  );
};

export default WorkingPOST;
