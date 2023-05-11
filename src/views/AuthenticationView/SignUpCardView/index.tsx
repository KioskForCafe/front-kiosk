import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Checkbox,
} from "@mui/material";

import axios, { AxiosResponse } from "axios";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { useSignUpStore } from 'src/stores';
import CheckIcon from '@mui/icons-material/Check';
import { DuplicateCheckEmailResponseDto, DuplicateCheckIdResponseDto, DuplicateTelnumberResponseDto } from "src/apis/response/user";
import { DUPLICATE_ID_URL, DUPLICATE_TEL_NUMBER_URL, DUPLICATE_USEREMAIL_URL, SIGN_UP_URL } from "src/apis/constants/api";
import ResponseDto from "src/apis/response";
import { DuplicateIdRequestDto, DuplicateTelNumberDto, DuplicateEmailRequestDto } from "src/apis/request/user";
import { SignUpRequestDto } from "src/apis/request/auth";
import { SignUpResponseDto } from "src/apis/response/auth";


//          Component          //

function FirstPage() {

  //          Hook          //
  const { userId, password, passwordCheck } = useSignUpStore();
  const { setUserId, setPassword, setPasswordCheck } = useSignUpStore();
  const { userIdPatternCheck, userIdDuplicate, passwordPatternCheck, passwordDuplicate } = useSignUpStore();
  const { setUserIdPatternCheck, setUserIdDuplicate, setPasswordPatternCheck, setPasswordDuplicate } = useSignUpStore();
  const { signUpError } = useSignUpStore();

  const { userName, telNumber, userEmail } = useSignUpStore();
  const { setUserName, setTelNumber, setUserEmail } = useSignUpStore();
  const { telNumberPatternCheck, telNumberDuplicate, userEmailPatternCheck, userEmailDuplicate } = useSignUpStore();
  const { setTelNumberPatternCheck, setTelNumberDuplicate, setUserEmailPatternCheck, setUserEmailDuplicate } = useSignUpStore();


  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  const userIdDuplicator = /^[A-Za-z0-9]{1,30}$/;
  const passwordDuplicator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?_]).{8,20}$/;
  const telNumberDuplicator = /^[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}$/;
  const userEmailDuplicator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;

  //          Event Handler          //
  const onUserIdChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = userIdDuplicator.test(value);
    setUserIdPatternCheck(isMatched);
    setUserId(value);
  }

  const onUserIdDuplicateButtonHandler = () => {
    if (!userIdPatternCheck) return;
    const data: DuplicateIdRequestDto = { userId };

    axios.post(DUPLICATE_ID_URL, data)
      .then((response) => duplicateCheckIdResponseHandler(response))
      .catch((error) => duplicateIdErrorHandler(error));
  }

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = passwordDuplicator.test(value);
    setPasswordPatternCheck(isMatched);
    setPassword(value);
  }

  const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = password === value;
    setPasswordDuplicate(isMatched);
    setPasswordCheck(value);
  }

  const onUserNameHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    setUserName(value);
  }

  const onTelNumberHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = telNumberDuplicator.test(value);
    setTelNumberPatternCheck(isMatched);
    setTelNumber(value);
  }

  const onTelNumberDuplicateButtonHandler = () => {
    if (!telNumberPatternCheck) return;
    const data: DuplicateTelNumberDto = { telNumber };

    axios.post(DUPLICATE_TEL_NUMBER_URL, data)
      .then((response) => duplicateTelNumberResponseHandler(response))
      .catch((error) => duplicateTelNumberErrorHandler(error));
  }

  const onUserEmailChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = userEmailDuplicator.test(value);
    setUserEmailPatternCheck(isMatched);
    setUserEmail(value);
  }

  const onUserEmailDuplicateButtonHandler = () => {
    if (!userEmailPatternCheck) return;
    const data: DuplicateEmailRequestDto = { userEmail };

    axios.post(DUPLICATE_USEREMAIL_URL, data)
      .then((response) => duplicateUserEmailResponseHandler(response))
      .catch((error) => duplicateUsrEmailErrorHandler(error));
  }



  //          Response Handler          //
  const duplicateCheckIdResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<DuplicateCheckIdResponseDto>;
    if (!result || !data) {
      alert(message);
      return;
    }
    setUserIdDuplicate(data.result);
  }


  const duplicateTelNumberResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<DuplicateTelnumberResponseDto>;
    if (!result || !data) {
      alert(message);
      return;
    }
    setTelNumberDuplicate(data.result);
  }

  const duplicateUserEmailResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<DuplicateCheckEmailResponseDto>;
    if (!result || !data) {
      alert(message);
      return;
    }
    setUserEmailDuplicate(data.result);
  }



  //          Error Handler          //
  const duplicateIdErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const duplicateTelNumberErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const duplicateUsrEmailErrorHandler = (error: any) => {
    console.log(error.message);
  }

  return (
    <Box display='flex' sx={{ height: '100%', flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h5" fontWeight='700' sx={{ color: '#008B8B' }}>Service Center KIOSK</Typography>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }} error={signUpError}>
          <InputLabel>아이디*</InputLabel>
          <Input type="text" endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => onUserIdDuplicateButtonHandler()}>
                <CheckIcon />
              </IconButton>
            </InputAdornment>
          }
            value={userId}
            onChange={(event) => onUserIdChangeHandler(event)}
          />
          {
            userIdPatternCheck === null ? (<></>) :
              !userIdPatternCheck ? (<FormHelperText sx={{ color: 'red' }}>아이디 형식이 맞지 않습니다.</FormHelperText>) :
                userIdDuplicate === null ? (<FormHelperText sx={{ color: 'orange' }}>아이디 중복체크를 해주세요.</FormHelperText>) :
                  !userIdDuplicate ? (<FormHelperText sx={{ color: 'red' }}>사용할 수 없는 아이디 입니다.</FormHelperText>) :
                    (<FormHelperText sx={{ color: 'green' }}>사용 가능한 아이디 입니다.</FormHelperText>)
          }
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }} error={signUpError}>
          <InputLabel>비밀번호*</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={(event) => onPasswordChangeHandler(event)}
          />
          {
            passwordPatternCheck === false ?
              (<FormHelperText sx={{ color: 'red' }}>{'영대문자 + 영소문자 + 숫자 + 특수문자(!?_)를 포함한 8-20자를 입력해주세요.'}</FormHelperText>) :
              (<></>)
          }
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }} error={signUpError}>
          <InputLabel>비밀번호 확인*</InputLabel>
          <Input
            type={showPasswordCheck ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPasswordCheck(!showPasswordCheck)}
                >
                  {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={passwordCheck}
            onChange={(event) => onPasswordCheckChangeHandler(event)}
          />
          {
            passwordDuplicate === false ?
              (<FormHelperText sx={{ color: 'red' }}>비밀번호가 서로 일치하지 않습니다.</FormHelperText>) :
              (<></>)
          }
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>이름</InputLabel>
          <Input type="text" endAdornment={
            <InputAdornment position="end">
              {/* <IconButton onClick={() => onUserNameHandler()}>
                <CheckIcon />
              </IconButton> */}
            </InputAdornment>
          }
            value={userName}
            onChange={(event) => onUserNameHandler(event)}
          />
        </FormControl>
        <FormControl sx={{ mt: '60px' }} error={signUpError} fullWidth variant="standard">
          <InputLabel>전화번호*</InputLabel>
          <Input type="text" endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => onTelNumberDuplicateButtonHandler()}>
                <CheckIcon />
              </IconButton>
            </InputAdornment>
          }
            value={telNumber}
            onChange={(event) => onTelNumberHandler(event)}
          />
          {
            telNumberDuplicate === null ? (<></>) :
              !telNumberPatternCheck ? (<FormHelperText sx={{ color: 'red' }}>전화번호 패턴이 일치하지 않습니다.</FormHelperText>) :
                telNumberPatternCheck === null ? (<FormHelperText sx={{ color: 'orange' }}>전화번호 종복체크를 해주세요.</FormHelperText>) :
                  telNumberDuplicate ? (<FormHelperText sx={{ color: 'green' }}>사용 가능한 전화번호입니다.</FormHelperText>) :
                    (<FormHelperText sx={{ color: 'red' }}>사용중인 전화번호입니다.</FormHelperText>)
          }
        </FormControl>
        <FormControl sx={{ mt: '60px' }} error={signUpError} fullWidth variant="standard">
          <InputLabel>이메일 주소*</InputLabel>
          <Input type="text" endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => onUserEmailDuplicateButtonHandler()}>
                <CheckIcon />
              </IconButton>
            </InputAdornment>
          }
            value={userEmail}
            onChange={(event) => onUserEmailChangeHandler(event)}
          />
          {
            userEmailPatternCheck === null ? (<></>) :
              !userEmailPatternCheck ? (<FormHelperText sx={{ color: 'red' }}>이메일 형식이 맞지 않습니다.</FormHelperText>) :
                userEmailDuplicate === null ? (<FormHelperText sx={{ color: 'orange' }}>이메일 중복체크를 해주세요.</FormHelperText>) :
                  !userEmailDuplicate ? (<FormHelperText sx={{ color: 'red' }}>사용할 수 없는 이메일입니다.</FormHelperText>) :
                    (<FormHelperText sx={{ color: 'green' }}>사용 가능한 이메일입니다.</FormHelperText>)
          }
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: '24px'}}>
          <Checkbox color="default" />
          <Typography sx={{ mr: '4px', color: 'red', fontWeight: 400 }}>개인정보동의</Typography>
          <Typography sx={{ fontWeight: 700 }}>더보기&gt;</Typography>
        </Box>
      </Box>
    </Box>
  )
}

//          Component          //
interface Props {
  setLoginView: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpCardView({ setLoginView }: Props) {

  //          Hook          //
  const { userId, password, passwordCheck } = useSignUpStore();
  const { userName, telNumber, userEmail } = useSignUpStore();
  const { setSignUpError } = useSignUpStore();
  const { userIdPatternCheck, passwordPatternCheck, telNumberPatternCheck, userEmailPatternCheck } = useSignUpStore();
  const { userIdDuplicate, passwordDuplicate, telNumberDuplicate, userEmailDuplicate } = useSignUpStore();


  //          Event Handler          //
  const onSignUpHandler = () => {
    if (!userId || !password || !passwordCheck || !telNumber || !userEmail) {
      setSignUpError(true);
      return;
    }
    if (!userIdPatternCheck || !passwordPatternCheck || !telNumberPatternCheck || !userEmailPatternCheck) return;
    if (!userIdDuplicate || !passwordDuplicate || !telNumberDuplicate || !userEmailDuplicate) return;

    setSignUpError(false);
    const data: SignUpRequestDto = { userId, password, userName, telNumber, userEmail };
  
    axios.post(SIGN_UP_URL, data)
      .then((response) => signUpResponseHandler(response))
      .catch((error) => signUpErrorHandler(error));
  };




  //          Response Handler          //
  const signUpResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message } = response.data as ResponseDto<SignUpResponseDto>;
    if (result) setLoginView(true);
    else alert(message);
  }

  //          Error Handler          //
  const signUpErrorHandler = (error: any) => {
    console.log(error.response.status);
  }

  return (
    <Box
      display="flex"
      sx={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <FirstPage />
      <Box
        component={Button}
        onClick={onSignUpHandler} sx={{ backgroundColor: "#008B8B", color: '#FFFFFF' }}
        variant='contained'
      >
        회원가입
      </Box>
      <Typography textAlign="center" sx={{ mt: '30px' }}>
        이미 계정이 있으신가요?
        <Typography
          component="span"
          fontWeight={900}
          onClick={() => setLoginView(true)}
        >
          {" "}
          로그인
        </Typography>
      </Typography>
    </Box>
  )
}




