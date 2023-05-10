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
} from "@mui/material";

import axios, { AxiosResponse } from "axios";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { useSignUpStore } from 'src/stores';
import CheckIcon from '@mui/icons-material/Check';
import { DuplicateCheckIdResponseDto } from "src/apis/response/user";
import { DUPLICATE_ID_URL, DUPLICATE_TEL_NUMBER_URL, DUPLICATE_USERNAME_URL } from "src/apis/constants/api";
import ResponseDto from "src/apis/response";
import { DuplicateIdRequestDto, DuplicateTelNumberDto, DuplicateUserNameDto } from "src/apis/request/user";


interface Props {
  setLoginView: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpCardView({ setLoginView }: Props) {

  //          Hook          //
  const { userId, password, passwordCheck } = useSignUpStore();
  const { setUserId, setPassword, setPasswordCheck } = useSignUpStore();
  const { userIdPatternCheck, userIdDuplicate, passwordPatternCheck, passwordDuplicate } = useSignUpStore();
  const { setUserIdPatternCheck, setUserIdDuplicate, setPasswordPatternCheck, setPasswordDuplicate } = useSignUpStore();
  const { signUpError } = useSignUpStore();

  const { userName, telNumber, userEmail } = useSignUpStore();
  const { setUserName, setTelNumber, setUserEmail } = useSignUpStore();
  const { userNameDuplicate, telNumberPatternCheck, telNumberDuplicate, userEmailPatternCheck, userEmailDuplicate } = useSignUpStore();
  const { setUserNameDuplicate, setTelNumberPatternCheck, setTelNumberDuplicate, setUserEmailPatternCheck, setUserEmailDuplicate } = useSignUpStore();


  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  const userIdDuplicator = /^[A-Za-z0-9]{2,8}$/;
  const passwordDuplicator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?_]).{8,20}$/;
  const telNumberVaildator = /^[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}$/;
  const userEmailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;

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

  const onUserNameDuplicateButtonHandler = () => {
    if (!userName) return;
    const data: DuplicateUserNameDto = { userName };
    
    axios.post(DUPLICATE_USERNAME_URL, data)
      .then((response) => duplicateUserNameResponseHandler(response))
      .catch((error) => duplicateUserNameErrorHandler(error));
  }

  const onTelNumberHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    const isMatched = telNumberVaildator.test(value);
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



  //          Response Handler          //
  const duplicateCheckIdResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<DuplicateCheckIdResponseDto>;
    if (!result || !data) {
      alert(message);
      return;
    }
    setUserIdDuplicate(data.result);
  }
  
  const duplicateUserNameResponseHandler = () => {

  }

  const duplicateUserNameErrorHandler = () => {

  }

  const duplicateTelNumberResponseHandler = () => {

  }

  const duplicateTelNumberErrorHandler = () => {
    
  }

  //          Error Handler          //
  const duplicateIdErrorHandler = (error: any) => {
    console.log(error.message);
  }

  return (
    <Box display='flex' sx={{ height: '100%', flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h5" fontWeight='700' sx={{ color: '#008B8B' }}>Service Center KIOSK</Typography>
        <FormControl fullWidth variant="standard" sx={{ mt: "40px" }} error={signUpError}>
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
              <IconButton onClick={() => onUserNameDuplicateButtonHandler()}>
                <CheckIcon />
              </IconButton>
            </InputAdornment>
          }
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          {
            userNameDuplicate === null ? (<></>) :
            userNameDuplicate ? (<FormHelperText sx={{ color: 'green' }}>사용 가능한 닉네임입니다.</FormHelperText>) :
                (<FormHelperText sx={{ color: 'red' }}>사용중인 닉네임입니다.</FormHelperText>)
          }
        </FormControl>
        <Typography textAlign="center" sx={{ mt: '40px' }}>
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
    </Box>
  )
}
