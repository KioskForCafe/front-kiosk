import React, { ChangeEvent, useEffect, useState } from 'react'

import { Box, Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import axios, { AxiosResponse } from 'axios';
import { useSignUpStore, useUserStore } from 'src/stores';
import { DUPLICATE_ID_URL, DUPLICATE_TEL_NUMBER_URL, DUPLICATE_USEREMAIL_URL, PATCH_USER_URL, authorizationHeader } from 'src/apis/constants/api';
import { DuplicateEmailRequestDto, DuplicateIdRequestDto, DuplicateTelNumberDto, PatchUserRequestDto } from 'src/apis/request/user';
import ResponseDto from 'src/apis/response';
import { DuplicateCheckEmailResponseDto, DuplicateCheckIdResponseDto, DuplicateTelnumberResponseDto, GetUserResponseDto, PatchUserResponseDto } from 'src/apis/response/user';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function UserInfomationModify() {

  const navigator = useNavigate();

     //          Hook          //
  const userStore = useUserStore();

  const [cookies] = useCookies();
  const { userId, password, passwordCheck } = useSignUpStore();
  const { setUserId, setPassword, setPasswordCheck } = useSignUpStore();
  const { userIdPatternCheck, userIdDuplicate, passwordPatternCheck, passwordDuplicate } = useSignUpStore();
  const { setUserIdPatternCheck, setUserIdDuplicate, setPasswordPatternCheck, setPasswordDuplicate } = useSignUpStore();
  const { signUpError } = useSignUpStore();
  const { setSignUpError } = useSignUpStore();

  const { userName, telNumber, userEmail } = useSignUpStore();
  const { setUserName, setTelNumber, setUserEmail } = useSignUpStore();
  const { telNumberPatternCheck, telNumberDuplicate, userEmailPatternCheck, userEmailDuplicate } = useSignUpStore();
  const { setTelNumberPatternCheck, setTelNumberDuplicate, setUserEmailPatternCheck, setUserEmailDuplicate } = useSignUpStore();

  const accessToken = cookies.accessToken;

  const userIdDuplicator = /^[A-Za-z0-9]{1,30}$/;
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

  const onPatchUserHandler = () => {
    if ( !userId || !userName || !telNumber || !userEmail) {
      alert('모든 내용을 입력해주세요.');
      return;
    }
    if (!userIdPatternCheck || !telNumberPatternCheck || !userEmailPatternCheck) return;
    if (!userIdDuplicate || !telNumberDuplicate || !userEmailDuplicate) return;

    patchUser();
  };

  const patchUser = () => {
    const data: PatchUserRequestDto = {
      userId,
      userName,
      telNumber,
      userEmail
    }

    axios.patch(PATCH_USER_URL, data, authorizationHeader(accessToken))
      .then((response) => patchUserResponseHandler(response))
      .catch((error) => patchUserErrorHandler(error));
      
  }

  //          Response Handler          //
  const patchUserResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<PatchUserResponseDto>;
    if (!result || !data) {
      alert(message);
      return;
    }

    userStore.setUser(data);
    navigator('/mypage');
  }

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
  const patchUserErrorHandler = (error: any) => {
    console.log(error.response.status);
  }

  const duplicateIdErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const duplicateTelNumberErrorHandler = (error: any) => {
    console.log(error.message);
  }

  const duplicateUsrEmailErrorHandler = (error: any) => {
    console.log(error.message);
  }

  //          Use Effect          //
  useEffect(() => {
    if (!accessToken){
      navigator('/auth');
      return;
    }
  },[])

  return (
    <Box display='flex' sx={{ height: '100%', flexDirection: "column", justifyContent: "space-between", p: '100px 600px' }}>
        <Box>
        <Typography variant="h5" fontWeight='700' sx={{ color: '#008B8B' }}>회원 정보 수정</Typography>
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
        </Box>
        <Box
        component={Button}
        onClick={onPatchUserHandler} sx={{ backgroundColor: "#008B8B", color: '#FFFFFF', mt: '40px' }}
        variant='contained'
      >
        정보 수정
      </Box>
    </Box>
  )
}
