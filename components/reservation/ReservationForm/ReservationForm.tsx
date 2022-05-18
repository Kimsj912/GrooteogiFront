import Styled from './ReservationForm.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { Field, Form, Formik } from 'formik';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Timer from '@components/common/Timer/Timer';
import Textarea from '@components/common/Textarea';

const PhoneVerifyForm = () => {
  return (
    <>
      <Title size={'h2'} color={'black'}>
        연락받을 전화번호
      </Title>
      <Typography size={'xs'} color={'lightgray'}>
        전화번호 제공은 필수사항입니다.
      </Typography>

      <Styled.inputContainer>
        <Title size={'h4'} color={'black'}>
          휴대폰번호
        </Title>
        <Styled.innerContainer>
          <Input type={'text'} placeholder={'휴대폰 번호를 - 없이 입력해주세요.'} name={'phone'} id={'phone'} />
          <Button
            size={'md'}
            name={'SMS 전송'}
            fontColor={'darkgray'}
            color={'white'}
            borderColor={'lightgray'}
            onClick={() => console.log('sms')}
          />
        </Styled.innerContainer>
      </Styled.inputContainer>

      <Styled.inputContainer>
        <Title size={'h4'} color={'black'}>
          인증번호
        </Title>
        <Styled.innerContainer>
          <Input type={'text'} placeholder={'SMS로 수신된 인증번호 5자리 입력해주세요.'} name={'code'} id={'code'} />
          <Button
            size={'md'}
            name={'인증하기'}
            fontColor={'darkgray'}
            color={'white'}
            borderColor={'lightgray'}
            onClick={() => console.log('sms')}
          />
        </Styled.innerContainer>
        <Timer isStart={false} limitMin={2} fontColor={'primary'} />
      </Styled.inputContainer>
    </>
  );
};

const ReservationForm = () => {
  return (
    <Formik
      initialValues={{ agree: false, phone: '', code: '' }}
      onSubmit={values => {
        console.log('formData', values);
      }}
    >
      <Form>
        <Styled.container>
          <PhoneVerifyForm />
          <Title size={'h2'} color={'black'}>
            선배에게 전하는 말!
          </Title>
          <Textarea placeholder={'하고싶은 말이 있다면 적어주세요!'} />
          <Styled.checkboxContainer>
            <Field type={'checkbox'} name={'agree'} id={'agree'} style={{}} />
            <Typography size={'xs'} color={'lightgray'}>
              제 3자(그루터기 나무)에게 내 전화번호를 제공하는 것을 동의합니다.
            </Typography>
          </Styled.checkboxContainer>
          <Button name={'신청하기'} size={'lg'} color={'primary'} fontColor={'white'} />
        </Styled.container>
      </Form>
    </Formik>
  );
};

export default ReservationForm;
